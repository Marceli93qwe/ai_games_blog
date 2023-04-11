import {runCompletion} from "../utils/openAI.api.connection";

test("OpenAI_API_Connection_Test", async () => {
    const testCompletion = `Do you like the frozen movie`
    // runCompletion() should not throw
    expect(async () => await runCompletion(testCompletion)).not.toThrow();
    //runCompletion() should return string value
    expect(typeof await runCompletion(testCompletion)).toBe("string");
    // console.log(await runCompletion(testCompletion));
})