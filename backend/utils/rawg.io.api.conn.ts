import fetch from "node-fetch";
import {ReviewRecord} from "../records/Review.record";
import dotenv from "dotenv";

dotenv.config();

export interface Game {
    id: string;
    name: string;
    released: string;
    background_image: string;
    rating: number;
    ratings_count: number;
    short_screenshots: string;
}

export const getRandomGame = async (): Promise<Game> => {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.rawg_key}&page=${Math.floor(Math.random() * 10) + 1}`);
        const games: Game[] = (await response.json()).results.map((result: Game) => (
            {
                id: String(result.id),
                name: result.name,
                released: result.released,
                background_image: result.background_image,
                rating: result.rating,
                ratings_count: result.ratings_count,
                short_screenshots: JSON.stringify(result.short_screenshots),
            }));
        let randomGame: Game = games[Math.floor(Math.random() * games.length)];
        //get ids of all already done reviews
        const idsOfAlreadyDoneReviews = await ReviewRecord.getAllIds();
        //avoids duplicating reviews
        while (idsOfAlreadyDoneReviews.includes(randomGame.id)) {
            randomGame = games[Math.floor(Math.random() * games.length)];
        }
        return randomGame;
    } catch (err) {
        throw new Error("error in rawg.io api connection " + err.message);
    }
}