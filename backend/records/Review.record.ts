import {Review_Record} from "../types/review/ReviewRecord.types";
import {pool} from "../utils/db";
import {Game} from "../utils/rawg.io.api.conn";

export class ReviewRecord implements Review_Record {
    constructor(
        public id: string,
        public name: string,
        public released: string,
        public background_image: string,
        public rating: number,
        public ratings_count: number,
        public review: string,
        public review_date: string,
        public short_screenshots: string,
    ) {
    }

    static async getAll(): Promise<ReviewRecord[]> {
        try {
            const [allReviews] = await pool.execute("SELECT * from `reviews`");
            return allReviews as ReviewRecord[];
        } catch (err) {
            throw new Error("Error in ReviewRecord.getAll() " + err.message);
        }
    }

    static async getAllIds(): Promise<string[]> {
        try {
            const allIds = (await ReviewRecord.getAll()).map(review => review.id);
            return allIds;
        } catch (err) {
            throw new Error("Error occurred in GetAllIds() " + err.message);
        }

    }

    static async getOne(id: string) {
        try {
            const [oneReview] = await pool.execute("SELECT * FROM `reviews` WHERE `id`=:id", {
                id,
            });
            //if not found
            if ((oneReview as []).length === 0) return null;
            //if found
            return oneReview as Game[];
        } catch (err) {
            throw new Error("Error occurred in getOne() " + err.message);
        }
    }

    async insert(): Promise<string> {
        try {
            await pool.execute("INSERT INTO `reviews` (`id`,`name`,`released`,`background_image`,`rating`, `ratings_count`, `review`, `review_date`, `short_screenshots`) VALUES (:id, :name, :released, :background_image, :rating, :ratings_count, :review, :review_date, :short_screenshots)",
                {
                    id: this.id,
                    name: this.name,
                    released: this.released,
                    background_image: this.background_image,
                    rating: this.rating,
                    ratings_count: this.ratings_count,
                    review: this.review,
                    review_date: this.review_date,
                    short_screenshots: this.short_screenshots
                });
        } catch (err) {
            throw new Error("error occurred in insert()");
        }
        return this.id;
    }

}