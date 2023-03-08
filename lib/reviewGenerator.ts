import {ReviewRecord} from "../records/Review.record";
import {runCompletion} from "../utils/openAI.api.connection";
import {getRandomGame} from "../utils/rawg.io.api.conn";

export async function reviewGenerator() {
    try {
        const gameToDoReview = await getRandomGame();
        // const review = await runCompletion("Do you like the movie Frozen?");
        const review = await runCompletion(`Write a review of a game called "${gameToDoReview.name}" that has maximum 950 chars`);
        const reviewRecord = new ReviewRecord(
            String(gameToDoReview.id),
            gameToDoReview.name,
            gameToDoReview.released,
            gameToDoReview.background_image,
            gameToDoReview.rating,
            gameToDoReview.ratings_count,
            review
        )
        return reviewRecord;
    } catch (err) {
        throw new Error(`Error occurred in reviewGenerator ` + err.message);
    }

}