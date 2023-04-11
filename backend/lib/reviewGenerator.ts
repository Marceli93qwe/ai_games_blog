import {ReviewRecord} from "../records/Review.record";
import {runCompletion} from "../utils/openAI.api.connection";
import {getRandomGame} from "../utils/rawg.io.api.conn";

// function used only in reviewGenerator() to get the date when review was generated
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export async function reviewGenerator() {
    try {
        const gameToDoReview = await getRandomGame();
        // const review = await runCompletion("Do you like the movie Frozen?");
        const review = await runCompletion(`Write a review of a game called "${gameToDoReview.name}" that has maximum 950 chars`);
        // we cut out the first screen because it is the same photo as background_image
        const short_screenshots = JSON.stringify(JSON.parse(gameToDoReview.short_screenshots).slice(1, gameToDoReview.short_screenshots.length-1));
        console.log(short_screenshots)
        const reviewRecord = new ReviewRecord(
            String(gameToDoReview.id),
            gameToDoReview.name,
            gameToDoReview.released,
            gameToDoReview.background_image,
            gameToDoReview.rating,
            gameToDoReview.ratings_count,
            review,
            getCurrentDate(),
            short_screenshots,
        )
        return reviewRecord;
    } catch (err) {
        throw new Error(`Error occurred in reviewGenerator() ` + err.message);
    }

}