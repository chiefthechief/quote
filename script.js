const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
let apiQuotes = [];
// show new quote
function newQuote() {
   // pic randdom quote
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   console.log(quote);
   if (!quote.author) {
      authorText.textContent = "Unknown";
   } else {
      authorText.textContent = quote.author;
   }
   if(quote.text.lenth > 50){
      quoteText.classList.add("long-quote");
   } else {
      quoteText.classList.remove("long-quote");
   }
   quoteText.textContent = quote.text;
}
// getting quotes from API
async function getQuotes() {
   const apiUrl = "https://type.fit/api/quotes";
   try { 
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
   } catch (error) {
   }
}
function tweetQuote() {
   const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
   window.opent(twitterUrl, "_blank");
}
// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);
// onload...
getQuotes();