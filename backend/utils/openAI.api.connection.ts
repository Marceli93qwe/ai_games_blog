import {Configuration, OpenAIApi} from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, //api key generated and saved on OpenAI account
});
const openai = new OpenAIApi(configuration);


//runCompletion is the function that we send request, it gives us back an answer
export async function runCompletion(prompt: string): Promise<string> {
    try {
        const completion = await openai.createCompletion({
            max_tokens: 400, //it influences the max length of the generated answer
            model: "text-davinci-003",
            prompt: `${prompt}`,
        });
        return completion.data.choices[0].text
    } catch (err) {
        throw new Error("Error while accessing data from OpenAI API " + err.message);
    }
}

