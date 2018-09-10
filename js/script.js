// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var red;
var green;
var blue;
var viewedQuotes =[];

//Array to hold quotes, sources, citaitons & years
var quotes = [
	{
		quote: "You know your in love when you can't fall asleep because reality is finally better than your dreams.",
		source: "Dr. Suess",
		citation: "",
		year:"1902 - 1991",
		tags: "Love"
	},
	{
		quote: "A man without ethics is a wild beast loosed upon this world.",
		source: "Albert Camus",
		citation: "",
		year:"1913 - 1960",
		tags: "Ethics",
	},
	{
		quote: "Only I can change my life no one can do it for me.",
		source: "Carol Burnett",
		citation: "",
		year: "1933",
		tags: "Life",
	},
	{
		quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
		source: "Albert Einstein",
		citation: "",
		year: "1879 - 1955",
		tags: "Engineering",
	},
	{
		quote: "Life is far to important a thing ever to talk seriously about.",
		source: "Oscar Wilde",
		citation: "",
		year: "1854 - 1900",
		tags: "Important",
	},
	{
		quote: "It always seems impossible until its done",
		source: "Nelson Mandela",
		citation: "",
		year: "1944",
		tags: "Impossible",
	},
];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);

	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

//Function to genereate random rgb color value
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}



// Function to take previously selected random object from array & print to screen
function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}
