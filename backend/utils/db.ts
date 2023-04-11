import {createPool, Pool} from "mysql2/promise";

let pool: Pool;

try {
    pool = createPool({
        host: "localhost",
        database: "ai_games_blog",
        user: "root",
        namedPlaceholders: true,
        decimalNumbers: true,
    });
} catch (err) {
    throw new Error("Error trying to connect to database");
}
export {pool};
