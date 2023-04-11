import {getRandomGame} from "../utils/rawg.io.api.conn";

test("getRandomGame() tests", async () => {
    expect(async () => {
        await getRandomGame()
    }).not.toThrow();
    console.log(await getRandomGame());
})