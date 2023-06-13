const quotes = [
  {
    quote: "There is no substitute for hard work",
    author: "Thomas Edison",
  },
  {
    quote: "To do nothing is sometimes a good remedy",
    author: "Hippocrates",
  },
  {
    quote: "If you are afraid and still go forward, you are brave",
    author: "Napoleon Bonaparte",
  },
  {
    quote:
      "We may have all come on different ships, but we're in the same boat now",
    author: "Martin Luther King, Jr.",
  },
  {
    quote: "Real knowledge is to know the extent of one's ignorance",
    author: "Confucius",
  },
  {
    quote: "The only good is knowledge and the only evil is ignorance",
    author: "Socrates",
  },
  {
    quote: "Patience is bitter but it’s fruit is sweet",
    author: "Vincent Van Gogh",
  },
  {
    quote: "There is always something for which to be thankful",
    author: "Charles Dickens",
  },
  {
    quote: "Only a life lived for others is a life worth while",
    author: "Albert Einstein",
  },
  {
    quote:
      "When we are born, we cry, that we are come To this great stage of fools",
    author: "William Shakespeare",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;
