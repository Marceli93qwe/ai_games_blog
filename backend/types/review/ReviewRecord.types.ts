import {Game} from "../../utils/rawg.io.api.conn";

export interface Review_Record extends Game {
    review: string;
    review_date: string;
}