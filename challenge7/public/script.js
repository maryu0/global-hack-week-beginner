let isGenerating = false;

async function generateText() {
  if (isGenerating) return;

  const prompt = document.getElementById("prompt").value;
  const outputElement = document.getElementById("output");

  outputElement.innerHTML = "<p>Generating response...</p>";
  isGenerating = true;
  try {
    const response = await fetch("/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    if (data.response) {
      outputElement.innerHTML = `<p>${data.response}</p>`;
    } else {
      outputElement.innerHTML =
        "<p>Error generating response.Please try again.</p>";
    }
  } catch (err) {
    console.error(err);
    outputElement.innerHTML =
      "<p>An error occurred. Please try again later.</p>";
  } finally {
    isGenerating = false;
  }
}
