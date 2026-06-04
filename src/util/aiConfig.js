const API_KEY = process.env.OPENAI_API_KEY;

export const apiKeyChecker = () => {
  if (!API_KEY) {
    console.error("ERROR: OPEN_API_KEY is not set");
    process.exit(1);
  }
};

export const checkOpenAI = async () => {
  const openai = (await import("openai")).default;
  const client = new openai({
    apiKey: API_KEY,
  });

  if (!client) {
    console.error("Erro: Failed to initialize OpenAI client.");
    process.exit(1);
  }

  console.log("OpenAI client Initialized Successfully");
  return client;
};
