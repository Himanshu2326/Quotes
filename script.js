

/*
========================
  ? JavaScript
========================
*/


let Quotes = document.querySelector('#Quotes')
let Author = document.querySelector('#Author')
let tweet = document.querySelector('#tweet')


let btn = document.querySelector('#GetNewQuotes')
let realData = "";


// Fetching API:--

const getQuotes = async () => {

    let api = "https://api.quotable.io/quotes/random";
    try {
        let Data = await fetch(api);
        realData = await Data.json();

        getNewQuotes();
    } catch (error) {
        console.log(error);
    }
}

getQuotes();

//? New Quotes Code:--

const getNewQuotes = async () => {

    let rnum = 0;
    let api = "https://api.quotable.io/quotes/random";
    try {
        let Data = await fetch(api);
        realData = await Data.json();

    } catch (error) {
        console.log(error);
    }
    let RealQuotes = realData[rnum];
    Author.innerHTML = `${RealQuotes.author}`;
    Quotes.innerHTML = `${RealQuotes.content}`;

    RealQuotes.author == null
        ? (Author.innerText = "UnKnown")
        : (Author.innerText = `${RealQuotes.author}`)

}

btn.addEventListener('click', getNewQuotes)



//? Tweet Button:---

const TweetNow = () => {
    let Tweet = `https://twitter.com/intent/tweet?text=${realData[0].content}`;
    window.open(Tweet)
}
tweet.addEventListener('click', TweetNow)

