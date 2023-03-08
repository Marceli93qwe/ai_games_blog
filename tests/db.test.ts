import {pool} from "../utils/db";

test("db connection test", async () => {
    expect(async () => await pool.execute("SELECT * FROM `reviews`")).not.toThrow();
})
