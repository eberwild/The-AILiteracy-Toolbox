import { getAllEntries , createEntry } from "../models/blackboardModel.js";

export const fetchAllEntries = async( _ , res) => {
    try {
        const blackboardEntries = await getAllEntries();

        return res.status(200).json(blackboardEntries);
    }catch(err){
        console.log("Error in BlackboardController / fetchAllEntries:" , err.message);
        return res.status(500).json({
            message: "Server Error"
        })
    }
}

export const postEntry = async( req , res) => {
    try{
        const message = req.body;
        const email = req.user.email;
        console.log(email);
        console.log(message);

        // backend validation

        // insert new entry into db
        const [id] = await createEntry(message , email);

        // success feedback
        return res.status(201).json({
            message: "Tool created successfully.",
            id
        });

    }catch(err){
        console.log("Error in BlackboardController/postEntry:" , err-message);
        return res.status(500).json({
            message: "Server Error"
        })
    }
}