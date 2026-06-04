# Terminal GPT Chatbot 🤖

A command-line AI chatbot built with Node.js and OpenAI.

## Features

- Real-time streaming responses
- Conversation memory
- Interactive terminal interface
- System prompt customization
- Exit command support

## Tech Stack

- Node.js
- OpenAI API
- Readline
- JavaScript (ES Modules)

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/terminal-gpt-chatbot.git
cd terminal-gpt-chatbot
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
OPENAI_API_KEY=your_api_key
```

## Usage

Run the application:

```bash
pnpm start
```

Example:

```text
Ask a question: What is JavaScript?

Chat Bot:
JavaScript is a programming language...
```

Type:

```text
exit
```

to quit the application.

## Project Structure

```text
AiBot/
├── .env
├── package.json
├── src/
│   ├── aiBot.js
│   └── util/
│       └── aiConfig.js
```

## Learning Outcomes

- OpenAI API integration
- Streaming responses
- Async Iterators
- Readline interface
- Context management using conversation history
- Environment variable management

## Future Improvements

- Token usage tracking
- Persistent chat history
- Multiple AI models
- Function calling / tools
- Markdown rendering
- Voice support

## License

MIT
