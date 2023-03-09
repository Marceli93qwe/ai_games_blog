import {Router} from "express";
import {ReviewRecord} from "../records/Review.record";
import {NotFoundError} from "../utils/error";

export const ReviewRouter = Router();


ReviewRouter
    .get("/", async (req, res) => {
        const allReviews = await ReviewRecord.getAll();
        res.json(allReviews);
    })
    .get("/:id", async (req, res) => {
        const {id} = req.params;
        const chosenReview = await ReviewRecord.getOne(id);
        if (!chosenReview) throw new NotFoundError("Couldn't find review with id: " + id);
        res.json(chosenReview);
    })