import {reviewGenerator} from "../lib/reviewGenerator";
import {ReviewRecord} from "../records/Review.record";

test("Review generator test", async () => {
    //function should not throw
    expect(async () => await reviewGenerator()).not.toThrow();
    //the returned value should be an instance of ReviewRecord
    expect(await reviewGenerator() instanceof ReviewRecord).toEqual(true)
    // console.log(await reviewGenerator())
})