import {addReviewHandler} from "../lib/addReviewHandler";

test("addReviewHandler() basic tests", async () => {
    expect(async () => {
        await addReviewHandler()
    }).not.toThrow();
})