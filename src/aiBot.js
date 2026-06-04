import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { checkOpenAI } from "./util/aiConfig.js";
import readline from "readline";

const client = await checkOpenAI();
const model = "gpt-4o-mini";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const systemPrompt = "You are helpful assistant that response in 5 line";

function askQuestion(userPrompt) {
  return new Promise((resolve, reject) => {
    readLine.question(userPrompt, (answer) => {
      resolve(answer);
    });
  });
}

// for memory
const conversation = [];

while (true) {
  const userQuestion = await askQuestion("Ask a question: ");
  if (userQuestion.toLowerCase() === "exit") {
    console.log("Exiting.....");
    break;
  }

  const stream = await client.chat.completions.create({
    model,
    stream: true,
    messages: [
      { role: "system", content: systemPrompt },
      ...conversation,
      { role: "user", content: userQuestion },
    ],
  });

  // to provide a mem history
  conversation.push({ role: "user", content: userQuestion });

  let fullChunk = null;
  process.stdout.write("Chat Bot: ");

  for await (const chunk of stream) {
    const delta = chunk.choices[0]?.delta?.content;
    if (delta) {
      process.stdout.write(delta);
      fullChunk += delta;
    }
  }
  conversation.push({ role: "assistant", content: fullChunk });
  console.log("\n");
}

readLine.close();
