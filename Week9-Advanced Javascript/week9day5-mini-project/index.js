let quotes = [
  { id: 0, author: 'Albert Einstein', quote: 'Imagination is more important than knowledge.', likes:0},
  { id: 1, author: 'Maya Angelou', quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.', likes:0},
  { id: 2, author: 'Oscar Wilde', quote: 'Be yourself; everyone else is already taken.', likes:0},
  { id: 3, author: 'J.K. Rowling', quote: 'It is our choices, Harry, that show what we truly are, far more than our abilities.', likes:0 },
  { id: 4, author: 'Mark Twain', quote: 'The secret of getting ahead is getting started.', likes:0},
  { id: 5, author: 'Jane Austen', quote: 'I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book!', likes:0},
  { id: 6, author: 'Charles Dickens', quote: 'It was the best of times, it was the worst of times.', likes:0},
  { id: 7, author: 'Rumi', quote: 'Don’t be satisfied with stories, how things have gone with others. Unfold your own myth.', likes:0},
  { id: 8, author: 'Harper Lee', quote: 'You never really understand a person until you consider things from his point of view... Until you climb into his skin and walk around in it.', likes:0},
  { id: 9, author: 'F. Scott Fitzgerald', quote: 'So we beat on, boats against the current, borne back ceaselessly into the past.', likes:0},
  { id: 10, author: 'William Shakespeare', quote: 'All the world\'s a stage, and all the men and women merely players.', likes:0},
  { id: 11, author: 'George Orwell', quote: 'In a time of deceit telling the truth is a revolutionary act.', likes:0},
  { id: 12, author: 'Aristotle', quote: 'It is the mark of an educated mind to be able to entertain a thought without accepting it.', likes:0 },
  { id: 13, author: 'Virginia Woolf', quote: 'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.', likes:0},
  { id: 14, author: 'C.S. Lewis', quote: 'You can make anything by writing.', likes:0},
  { id: 15, author: 'Agatha Christie', quote: 'The impossible could not have happened, therefore the impossible must be possible in spite of appearances.', likes:0 },
  { id: 16, author: 'Gabriel Garcia Marquez', quote: 'It\'s enough for me to be sure that you and I exist at this moment.', likes:0 },
  { id: 17, author: 'Ernest Hemingway', quote: 'There is no friend as loyal as a book.', likes:0 },
  { id: 18, author: 'Kurt Vonnegut', quote: 'We are what we pretend to be, so we must be careful about what we pretend to be.', likes:0 },
  { id: 19, author: 'Roald Dahl', quote: 'Those who don\'t believe in magic will never find it.', likes: 0 },
  { id: 20, author: 'Albert Einstein', quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.', likes: 0 },
  { id: 21, author: 'J.K. Rowling', quote: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.', likes: 0 },
  { id: 22, author: 'Virginia Woolf', quote: 'One cannot think well, love well, sleep well, if one has not dined well.', likes: 0 },
  { id: 23, author: 'Kurt Vonnegut', quote: 'We have to continually be jumping off cliffs and developing our wings on the way down.', likes: 0 },
  { id: 24, author: 'Roald Dahl', quote: 'If you have good thoughts, they will shine out of your face like sunbeams and you will always look lovely.', likes: 0 },

  
];

let previousQuoteIndex = -1;
let currentFilteredIndex = -1;
let filteredQuotes = [];

function getRandomQuoteIndex() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === previousQuoteIndex);
  previousQuoteIndex = randomIndex;
  return randomIndex;
}

function displayRandomQuote() {
  const quoteSection = document.getElementById('quote-section');
  const quoteDisplay = document.getElementById('quote-display');

  const randomIndex = getRandomQuoteIndex();
  const randomQuote = quotes[randomIndex];

  quoteDisplay.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
}

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', displayRandomQuote);

const addQuoteBtn = document.getElementById('add-quote-btn');
addQuoteBtn.addEventListener('click', function () {
  const quoteInput = document.getElementById('quote-input').value;
  const authorInput = document.getElementById('author-input').value;

  const newQuote = {
    id: quotes.length,
    author: authorInput,
    quote: quoteInput,
    likes: 0,
  };
  quotes.push(newQuote);

  document.getElementById('quote-input').value = '';
  document.getElementById('author-input').value = '';

  console.log(quotes);
});

const charCountIncludingSpacesBtn = document.getElementById('char-count-including-spaces-btn');
charCountIncludingSpacesBtn.addEventListener('click', function () {
  const currentQuote = document.getElementById('quote-display').textContent;
  const charCount = currentQuote.length;
  alert(`Character Count (Including Spaces): ${charCount}`);
});

const charCountExcludingSpacesBtn = document.getElementById('char-count-excluding-spaces-btn');
charCountExcludingSpacesBtn.addEventListener('click', function () {
  const currentQuote = document.getElementById('quote-display').textContent;
  const charCount = currentQuote.replace(/\s/g, '').length;
  alert(`Character Count (Excluding Spaces): ${charCount}`);
});

const wordCountBtn = document.getElementById('word-count-btn');
wordCountBtn.addEventListener('click', function () {
  const currentQuote = document.getElementById('quote-display').textContent;
  const wordCount = currentQuote.split(/\s+/).filter((word) => word !== '').length;
  alert(`Word Count: ${wordCount}`);
});

const likeBtn = document.getElementById('like-btn');
likeBtn.addEventListener('click', function () {
  const randomIndex = previousQuoteIndex;
  if (randomIndex !== -1) {
    quotes[randomIndex].likes += 1;
    console.log(quotes);
  }
});

const filterBtn = document.getElementById('filter-btn');
filterBtn.addEventListener('click', function () {
  const authorFilter = document.getElementById('author-filter').value.toLowerCase();
  filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === authorFilter);

  if (filteredQuotes.length > 0) {
    currentFilteredIndex = 0;
    displayFilteredQuote();
  } else {
    alert('No quotes found for the specified author.');
  }
});

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {
  if (filteredQuotes.length > 0 && currentFilteredIndex < filteredQuotes.length - 1) {
    currentFilteredIndex++;
    displayFilteredQuote();
  }
});

const prevBtn = document.getElementById('prev-btn');
prevBtn.addEventListener('click', function () {
  if (filteredQuotes.length > 0 && currentFilteredIndex > 0) {
    currentFilteredIndex--;
    displayFilteredQuote();
  }
});

function displayFilteredQuote() {
  const quoteSection = document.getElementById('quote-section');
  const quoteDisplay = document.getElementById('quote-display');

  const currentFilteredQuote = filteredQuotes[currentFilteredIndex];
  quoteDisplay.textContent = `"${currentFilteredQuote.quote}" - ${currentFilteredQuote.author}`;
}
