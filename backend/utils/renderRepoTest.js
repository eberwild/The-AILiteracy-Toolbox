import fetch from "node-fetch"; // to test deployed site URL
import axios from "axios";       // to interact with Render API
import crypto from "crypto";     // generate unique service names
import fs from "fs-extra";       // check files in repo
import tmp from "tmp";           // temporary folder for cloning repo
import simpleGit from "simple-git"; // clone GitHub repos
import dotenv from "dotenv";

dotenv.config({ path: ".env.docker" }); // load Render API key

/**
 * Test a user-submitted repo by deploying temporarily on Render.
 * Supports 3 types:
 * 1) React/Vite (Node frontend)
 * 2) Plain HTML/JS/CSS
 * 3) Python Webservice (Flask/FastAPI)
 *
 * @param {string} repoUrl - GitHub repo URL
 * @returns {boolean} - true if site runs/responds, false otherwise
 */

export async function testRepoRenderMulti(repoUrl) {

  // Step 1 - Generate unique service name
  const serviceName = `tool-test-${crypto.randomBytes(4).toString("hex")}`;

  // Step 2 - Clone repo into temporary folder
  const tmpDir = tmp.dirSync({ unsafeCleanup: true });
  const projectPath = tmpDir.name;

  try {
    await simpleGit().clone(repoUrl, projectPath);

    // Step 3 - Detect project type
    const packageJsonPath = `${projectPath}/package.json`;
    const requirementsPath = `${projectPath}/requirements.txt`;
    let projectType = "plain"; // default = plain HTML/JS/CSS

    if (await fs.pathExists(packageJsonPath)) {
      projectType = "node"; // React/Vite or other Node frontend
    } else if (await fs.pathExists(requirementsPath)) {
      projectType = "python"; // Python webservice
    }

    // Step 4 - Prepare Render API payload based on type
    let renderPayload = { name: serviceName };

    if (projectType === "node") {
      // React/Vite frontend
      renderPayload = {
        ...renderPayload,
        type: "static_site",
        repo: repoUrl,
        branch: "main",
        buildCommand: "npm install && npm run build",
        publishDirectory: "dist"
      };
    } else if (projectType === "python") {
      // Python Web Service (Flask/FastAPI)
      renderPayload = {
        ...renderPayload,
        type: "web_service",
        repo: repoUrl,
        branch: "main",
        buildCommand: "pip install -r requirements.txt",
        startCommand: "python main.py"
      };
    } else {
      // Plain HTML/JS/CSS
      renderPayload = {
        ...renderPayload,
        type: "static_site",
        repo: repoUrl,
        branch: "main",
        buildCommand: null,        // no build needed
        publishDirectory: "."      // serve root folder
      };
    }

    // Step 5 - Create service on Render
    const createResp = await axios.post(
      "https://api.render.com/v1/services",
      renderPayload,
      { headers: { Authorization: `Bearer ${process.env.RENDER_API_KEY}` } }
    );

    const serviceId = createResp.data.id;
    const serviceUrl = createResp.data.serviceDetails?.url || createResp.data.service?.url;

    // Step 6 - Poll until service is live or failed with maximal time 
    let isLive = false;
    for (let i = 0; i < 20; i++) { // max 100s
      await new Promise(r => setTimeout(r, 5000)); // 5s delay

      const statusResp = await axios.get(`https://api.render.com/v1/services/${serviceId}`, {
        headers: { Authorization: `Bearer ${process.env.RENDER_API_KEY}` }
      });

      const state = statusResp.data.state;
      if (state === "live") { isLive = true; break; }
      else if (state === "failed") { break; }
    }

    // Step 7 - Test HTTP response (only for live URL)
    let success = false;
    if (isLive && serviceUrl) {
      const resp = await fetch(serviceUrl);
      success = resp.ok;
    }

    // Step 7️⃣ - Cleanup: delete Render service
    await axios.delete(`https://api.render.com/v1/services/${serviceId}`, {
      headers: { Authorization: `Bearer ${process.env.RENDER_API_KEY}` }
    });

    // Step 8️⃣ - Cleanup local tmp folder
    tmpDir.removeCallback();

    // Return final result
    return success;

  } catch (err) {
    console.error("Render Multi-Repo Test Error:", err.message);
    tmpDir.removeCallback();
    return false;
  }
}