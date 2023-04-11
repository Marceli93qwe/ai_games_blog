import {reviewGenerator} from "./reviewGenerator";

//this is the function made to be callback in the setInterval in index.ts
export const addReviewHandler = async () => {
    try {
        const review = await reviewGenerator();
        await review.insert();
    } catch (err) {
        return console.log("Error occurred in addReviewHandler() " + err.message);
    }
}