// ===============================
// IMPORTS
// ===============================

// Git wrapper to clone repositories
import simpleGit from "simple-git";

// execa allows us to run shell commands like npm, python, or docker
import { execa } from "execa";

// fetch to make HTTP requests
import fetch from "node-fetch";

// tmp creates safe temporary directories
import tmp from "tmp";

// fs-extra offers enhanced file system functions
import fs from "fs-extra";

// path helps to build cross-platform file paths
import path from "path"

// child_process for launching Python processes
import { spawn } from "child_process";

// ===============================
// MAIN FUNCTION
// ===============================

// This function tests whether a repo is startable / loadable
// It supports Frontend (React/Vite/HTML) and Python tools
export async function testToolRepo(repoUrl) {

  // ===============================
  // Step 1 ->  Create a temporary directory
  // ===============================

  const tmpDir = tmp.dirSync({ unsafeCleanup: true });
  const projectPath = tmpDir.name;

  // Generate a random port for frontend testing
  const testPort = 5000 + Math.floor(Math.random() * 1000);

  // Unique container name for Docker/nginx
  const containerName = "tool-test-" + Date.now();

  try {

    // ===============================
    // Step 2 ->  Clone the repository
    // ===============================

    await simpleGit().clone(repoUrl, projectPath);

    // ===============================
    // Step 3 ->  Detect project type
    // ===============================

    const packageJsonPath = path.join(projectPath, "package.json");
    const requirementsPath = path.join(projectPath, "requirements.txt");
    const appPyPath = path.join(projectPath, "app.py");

    const hasPackageJson = await fs.pathExists(packageJsonPath);
    const hasRequirements = await fs.pathExists(requirementsPath);
    const hasAppPy = await fs.pathExists(appPyPath);

    // ===============================
    // Step 4 ->  Frontend (React/Vite) workflow
    // ===============================

    if (hasPackageJson) {

      // Install dependencies
      await execa("npm", ["install"], { cwd: projectPath });

      // Run build
      await execa("npm", ["run", "build"], { cwd: projectPath });

      // Determine build folder
      let staticFolder = projectPath;
      const distPath = path.join(projectPath, "dist");
      const buildPath = path.join(projectPath, "build");

      if (await fs.pathExists(distPath)) staticFolder = distPath;
      else if (await fs.pathExists(buildPath)) staticFolder = buildPath;

      // Start nginx container to serve static files
      await execa("docker", [
        "run",
        "-d",
        "-p", `${testPort}:80`,
        "--name", containerName,
        "--memory=128m",
        "--cpus=0.5",
        "-v", `${staticFolder}:/usr/share/nginx/html:ro`,
        "nginx:alpine"
      ]);

      // Wait a short time for nginx to start
      await new Promise(resolve => setTimeout(resolve, 3000));

      // HTTP test
      const response = await fetch(`http://localhost:${testPort}`);
      const success = response.ok;

      // Cleanup
      await execa("docker", ["rm", "-f", containerName]);
      tmpDir.removeCallback();

      return success;
    }

    // ===============================
    // Step 4 ->  Python workflow
    // ===============================

    else if (hasRequirements || hasAppPy) {

      // Install Python dependencies if requirements.txt exists
      if (hasRequirements) {
        await execa("python", ["-m", "pip", "install", "-r", requirementsPath]);
      }

      // Launch Python process (app.py if exists)
      const pythonFile = hasAppPy ? appPyPath : null;

      if (!pythonFile) {
        // No entry point detected → fail
        tmpDir.removeCallback();
        return false;
      }

      // Spawn the Python process
      const pyProcess = spawn("python", [pythonFile], { cwd: projectPath });

      let processAlive = false;

      // Listen for errors
      pyProcess.on("error", (err) => {
        console.error("Python process failed to start:", err);
      });

      // Set a timeout to check if process stays alive for 5 seconds
      await new Promise(resolve => {
        const timeout = setTimeout(() => {
          // If process still running after 5 sec → consider startable
          processAlive = !pyProcess.killed;
          // Kill the process after test
          pyProcess.kill();
          resolve();
        }, 5000);
      });

      tmpDir.removeCallback();
      return processAlive;
    }

    // ===============================
    // Step 5 ->  Plain HTML/JS workflow
    // ===============================

    else {
      // Use the root folder as static folder
      const staticFolder = projectPath;

      // Start nginx container to serve static files
      await execa("docker", [
        "run",
        "-d",
        "-p", `${testPort}:80`,
        "--name", containerName,
        "--memory=128m",
        "--cpus=0.5",
        "-v", `${staticFolder}:/usr/share/nginx/html:ro`,
        "nginx:alpine"
      ]);

      // Wait a short time for nginx to start
      await new Promise(resolve => setTimeout(resolve, 3000));

      // HTTP test
      const response = await fetch(`http://localhost:${testPort}`);
      const success = response.ok;

      // Cleanup
      await execa("docker", ["rm", "-f", containerName]);
      tmpDir.removeCallback();

      return success;
    }

  } catch (error) {

    console.error("Tool Repo Test Error:", error);

    try {
      await execa("docker", ["rm", "-f", containerName]);
    } catch {}

    tmpDir.removeCallback();

    return false;
  }
}