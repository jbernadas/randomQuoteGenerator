/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
  {'quote': '', 'source': '', 'citation': '', 'year': }
***/
var quotes = [
  {'quote': 'Every artist was first an amateur', 'source': 'Ralph Waldo Emerson', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'Creativity takes courage', 'source': 'Henri Matisse', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'Every child is an artist. The problem is how to remain an artist once we grow up.', 'source': 'Pablo Picasso', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'You don’t take a photograph, you make it', 'source': 'Ansel Adams', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'Art enables us to find ourselves and lose ourselves at the same time.', 'source': 'Thomas Merton', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'We don’t make mistakes, just happy little accidents', 'source': 'Bob Ross', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'A picture is a poem without words', 'source': 'Horace', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'The principles of true art is not to portray, but to evoke', 'source': 'Jerzy Kosinski',  'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'Painting is easy when you don’t know how, but very difficult when you do', 'source': 'Edgar Degas', 'citation': 'Twisted Sifter', 'year': 2012},
  {'quote': 'As my artist’s statement explains, my work is utterly incomprehensible and is therefore full of deep significance', 'source': 'Calvin', 'citation': 'Twisted Sifter', 'year': 2012},
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  return Math.floor(Math.random() * quotes.length - 1) + 1;
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  var x = getRandomQuote();
  var outputQuote = document.getElementById('quote-box');
  outputQuote.innerHTML = '<p class="quote">' + quotes[x]['quote'] + '</p><p class="source">' + quotes[x]['source'] + '<span class="citation">' + quotes[x]['citation'] + '</span><span class="year"> ' + quotes[x]['year'] + '</p>';
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.