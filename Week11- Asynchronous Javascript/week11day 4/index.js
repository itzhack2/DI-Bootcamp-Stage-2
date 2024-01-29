// const url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2";//limit=10 ,//offset=2
const BASE_URL =  "https://api.giphy.com/v1/gifs/search";
const searchTerm = "sun";
const rating = "g";
const api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2M"
const limit = 10
const offset = 2

const url = `${BASE_URL}?q=${searchTerm}&rating=${rating}&api_key${api_key}&limit=${limit}&offset=${offset}`

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", logRequest);
xhr.open("GET", url);
xhr.send();

function logRequest(e){
const response = JSON.parse(xhr.response);
console.log("response:", response)
}
// const first = response.data[0]; 
//;   
// 🌟 Exercise 3 : Async Function
async function fetchData() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const objectStarWars = await response.json();
        console.log(objectStarWars.result);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}
fetchData();

// 🌟 Exercise 4: Analyze
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();//calling resolved
