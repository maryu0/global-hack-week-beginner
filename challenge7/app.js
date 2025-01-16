require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/generate", async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res.json({ response: response.data.choices[0].message.content.trim() });
  } catch (err) {
    console.error(err);

    if (err.response && err.response.status === 429) {
      // Handle rate-limiting errors
      const retryAfter = err.response.headers["retry-after"];
      res.status(429).json({
        error: "Rate limit exceeded. Please wait and try again.",
        retryAfter: retryAfter || 1, // Suggest retry-after duration
      });
    } else {
      res.status(500).json({ error: "Error generating response." });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
