# ChatGPT Text Generator

This project is a simple web-based application that leverages OpenAI's API to generate text responses based on user prompts. It includes a Node.js backend and a lightweight frontend for user interaction.

---

## Features

- **Text Generation:** Users can enter prompts, and the application generates responses using OpenAI's GPT-3.5-turbo model.
- **Rate Limiting:** Prevents excessive requests to comply with API usage limits.
- **Caching:** Implements a caching mechanism to optimize performance and reduce redundant API calls.
- **Error Handling:** Gracefully handles errors, including rate limit violations and API request failures.

---

## Installation

### Prerequisites

- Node.js installed on your machine
- OpenAI API key

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chatgpt-text-generator
   ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Create a .env file in the root directory and add your OpenAI API key:
   ```bash
    OPENAI_API_KEY=your-api-key
   ```
4. Start the server:
   ```bash
    npm start
   ```
5. Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```

## Usage

- Enter a prompt in the text input field.
- Click the "Generate Response" button to receive a text response from the model.
- The application will display the generated response below the input field.

## API Configuration

This project uses OpenAI's GPT-3.5-turbo model for text generation. To configure the API:

1.  Obtain an API key from OpenAI: OpenAI API.
2.  Add the key to the .env file:
    ```bash
    OPENAI_API_KEY=your-api-key
    ```

## Troubleshooting

- **429 Too Many Requests:** If you encounter this error, wait a few seconds and try again. The application implements rate limiting and retries to handle this gracefully.
- **500 Internal Server Error:** Ensure the API key is valid and the OpenAI API is accessible.
