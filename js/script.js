/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
  This is the source of quotes the generator retrieves from. In using the following format to add more quotes, the last two items are optional: 
  {'quote': '', 'source': '', 'citation': '', 'year': }
***/
var quotes = [
  {'quote': 'Every artist was first an amateur.', 'source': 'Ralph Waldo Emerson'},
  {'quote': 'Creativity takes courage.', 'source': 'Henri Matisse'},
  {'quote': 'Every child is an artist. The problem is how to remain an artist once we grow up.', 'source': 'Pablo Picasso'},
  {'quote': 'You don’t take a photograph, you make it.', 'source': 'Ansel Adams', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'Art enables us to find ourselves and lose ourselves at the same time.', 'source': 'Thomas Merton'},
  {'quote': 'We don’t make mistakes, just happy little accidents.', 'source': 'Bob Ross', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'A picture is a poem without words.', 'source': 'Horace', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'The principles of true art is not to portray, but to evoke.', 'source': 'Jerzy Kosinski',  'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'Painting is easy when you don’t know how, but very difficult when you do.', 'source': 'Edgar Degas', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'As my artist’s statement explains, my work is utterly incomprehensible and is therefore full of deep significance.', 'source': 'Calvin', 'citation': 'Twisted Sifter', 'year': 2012},
];

// Random number generator
function getRandomQuote() {
  return Math.floor(Math.random() * quotes.length - 1) + 1;
}

/* This is the quote generator, it chooses which quote to show by invoking the getRandomQuote function, then uses the random number it puts out as index to the quotes literal objects. */
function printQuote() {
  var x = getRandomQuote();
  var outputQuote = document.getElementById('quote-box');
  outputQuote.innerHTML = '<p class="quote">' + quotes[x]['quote'] + '</p><p class="source">' + quotes[x]['source'] + (quotes[x]['citation'] ? '<span class="citation">' + quotes[x]['citation'] + '</span>' : '') + (quotes[x]['year'] ? '<span class="year"> ' + quotes[x]['year'] + '</span>' : '') + '</p>';
}

// Invokes printQuote when the frontend button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
