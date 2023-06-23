const quotes = [
  {
    quote:
      '"Once you wake up and smell the coffee, it’s hard to go back to sleep."',
    author: "Fran Drescher",
  },
  {
    quote:
      '"Television is not real life. In real life, people actually have to leave the coffee shop and go to jobs."',
    author: "Charles J. Sykes",
  },
  {
    quote: '"Coffee smells like freshly ground heaven."',
    author: "Jessi Lane Adams",
  },
  {
    quote: '"I orchestrate my mornings to the tune of coffee."',
    author: "Harry Mahtar",
  },
  {
    quote:
      '"As long as there was coffee in the world, how bad could things be?"',
    author: "Cassandra Clare, City of Ashes",
  },
  {
    quote: '"I’d rather take coffee than compliments just now."',
    author: "Louisa May Alcott, Little Women",
  },
  {
    quote:
      '"Ah coffee. The sweet balm by which we shall accomplish today’s tasks."',
    author: "Holly Black, Ironside",
  },
  {
    quote: '"Coffee, the favorite drink of the civilized world."',
    author: "Thomas Jefferson",
  },
  {
    quote:
      '"No matter what historians claimed, BC really stood for ‘Before Coffee.’"',
    author: "Cherise Sinclair, Master of the Mountain",
  },
  {
    quote:
      '"To do good work one must eat well, be well housed, have one’s fling from time to time, smoke one’s pipe, and drink one’s coffee in peace."',
    author: "Vincent Van Gogh",
  },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
