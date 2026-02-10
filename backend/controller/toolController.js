import { getAllTools , insertTool } from "../models/toolModel";

// get all tools for render
export const fetchallTools = async( _ , res) => {
    try {
        const tools = await fetchallTools();

        return res.status(200).json(tools);

    } catch(err){
        console.log("Error in fetchAllTools" , err.message);
        return res.status(500).json({
            message: "Server Error"
        })
    }
};

export const provideNewTool = async(req , res) => {
    try {
        const {
            name,
            title,
            email,
            type,
            gitURL,
            imgURL,
            tags,
            ageRecom,
            description
        } = req.body;

        // backend validation
        if (!name || name.trim() === "") {
        return res.status(400).json({ message: "Name is required." });
        }

        if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Title is required." });
        }

        if (!email || !email.includes("@")) {
        return res.status(400).json({ message: "Valid email is required." });
        }

        if (!description || description.length < 15) {
        return res.status(400).json({
            message: "Description must be at least 15 characters."
            });
        }

        // insert tool into table
        const [id] = await insertTool(req.body);

        // success feedback
        return res.status(201).json({
            message: "Tool created successfully.",
            id
        });

    }catch(err){
        console.log("Error in provideNewTool" , err.message);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}