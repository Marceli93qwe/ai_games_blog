import {reviewGenerator} from "./reviewGenerator";


//this is the function made to be callback in the setInterval in index.ts
export const addReviewHandler = async () => {
    const review = await reviewGenerator();
    await review.insert();
}