// Variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mathama Gandhis`
},{
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
},{
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: `Aistotle`
},
{
    quote: `"Your time is limited, so don't waste it living someone else's life"`,
    person: ` Steve Jobs`
},
{   
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`
},
{
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life. You'll never have enough."`,
    person: `Confucius`
},
{
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`
},
{
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`
},
{
    quote: `"The journet of a thousand miles begins with one steps. "`,
    person: `Lao Tzu`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})