// Quotes Array
const quotes = [
    {
      text: "Erm, what the sigma?",
      author: "Romeo upon seeing Juliet's dead body",
    },
    {
      text: "Unfanum tax me here",
      author: "ItzLpPlayz",
    },
    {
      text: "Hard and sharp as a sigma",
      author: "bumblebemeRR",
    },
    {
      text: "Juliet has massive gyatt.",
      author: "Romeo probably",
    },
    {
      text: "Alpha is beta and beta is alpha🔥🔥🤞",
      author: "St5rl0rd5",
    },
    {
      text: "So laggy and 0 ping a day I have not seen",
      author: "These_Calligrapher_6",
    },
    {
      text: "If you be Mr Skibidi, I shall be Mr Sigma",
      author: "HaHaLaughNowPls",
    },
    {
      text: "My naked weapon is out",
      author: "My shlong be long",
    },
    {
      text: "Solitary as a skibidi toilet with L rizz 😔",
      author: "Virtual-Arm5123",
    },
    {
      text: "I have no rizz to prick the sides of my gyatt; only a vaulting mewing streak which fanum taxes itself and falls on the other",
      author: "Let bro mew🗣️",
    },
  ];
  
  // DOM Elements
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote-btn");
  const copyQuoteBtn = document.getElementById("copy-quote-btn");
  
  // Function to Display a Random Quote
  function displayRandomQuote() {
    try {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
  
      // Update DOM with the new quote
      quoteEl.textContent = randomQuote.text;
      authorEl.textContent = `— ${randomQuote.author}`;
    } catch (error) {
      console.error("Error fetching quote:", error);
      quoteEl.textContent = "Oops! Something went wrong.";
      authorEl.textContent = "";
    }
  }
  
  // Function to Copy Quote to Clipboard
  function copyQuote() {
    const fullQuote = `${quoteEl.textContent} ${authorEl.textContent}`;
    navigator.clipboard
      .writeText(fullQuote)
      .then(() => alert("Quote copied to clipboard!"))
      .catch((error) => console.error("Error copying quote:", error));
  }
  
  // Event Listeners
  newQuoteBtn.addEventListener("click", displayRandomQuote);
  copyQuoteBtn.addEventListener("click", copyQuote);
  
  // Initialize with a Random Quote
  displayRandomQuote();
  