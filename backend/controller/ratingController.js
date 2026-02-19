import { insertRating } from "../models/ratingModel.js";

export const submitRating = async (req , res) => {
    try {
        const { rating , toolID } = req.body;

        if(!rating || !toolID){
            return res.status(400).json({message: 'Missing credentials.'});
        }
        const [id] = await insertRating(rating , toolID);

        return res.status(201).json({message: 'Rating submitted successfully.'});
    } catch(error) {    
        console.error('Error in submitRating controller: ' , error.message);
        res.status(500).json({message: 'Internal Server Error.'});

    }

}