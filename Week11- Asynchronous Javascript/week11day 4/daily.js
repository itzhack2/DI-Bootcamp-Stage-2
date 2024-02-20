const form = document.forms[0];
const div = document.querySelector("#container");
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const inputValue = form.children[0].value;
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=${apiKey}&limit=1`);
    if (res.ok) {
      const data = await res.json();
      const img = document.createElement("img");
      const containerDiv = document.createElement("div");
      const deleteButton = document.createElement("button");

      deleteButton.innerText = `Delete ${inputValue} gif`;
      img.src = data.data[0].images.original.url;
      img.style.width = "200px";
      deleteButton.addEventListener("click", () => {
        containerDiv.remove();
      });

      containerDiv.style =
        "display:inline-block; width:300px; height:250px; display:flex; justify-content:center;align-items:center; border:1px solid black; margin:5px;flex-direction:column;";
      containerDiv.append(img, deleteButton);
      div.append(containerDiv);
    } else {
      throw new Error("there was an error");
    }
  } catch (e) {
    console.log(e);
  }
});

const deleteAllButton = document.getElementById("deleteAllButton");

deleteAllButton.addEventListener("click", () => {
  div.innerHTML = "";
});



// anoter-anser
// const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
// const searchForm = document.getElementById('searchForm');
// const gifsContainer = document.getElementById('gifsContainer');
// const deleteAllBtn = document.getElementById('deleteAllBtn');

// searchForm.addEventListener('submit', async function(event) {
//     event.preventDefault();
//     const categoryInput = document.getElementById('categoryInput').value;
    
//     try {
//         const gifUrl = await fetchRandomGif(categoryInput);
//         appendGif(categoryInput, gifUrl);
//     } catch (error) {
//         console.error('Error fetching GIF:', error);
//     }
// });

// deleteAllBtn.addEventListener('click', function() {
//     gifsContainer.innerHTML = '';
// });

// function fetchRandomGif(category) {
//     const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;
    
//     return fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const gifUrl = data.data.images.fixed_height.url;
//             return gifUrl;
//         });
// }

// function appendGif(category, gifUrl) {
//     const gifElement = document.createElement('div');
//     gifElement.innerHTML = `
//         <img src="${gifUrl}" alt="${category} GIF">
//         <button class="deleteBtn">DELETE</button>
//     `;

//     const deleteBtn = gifElement.querySelector('.deleteBtn');
//     deleteBtn.addEventListener('click', function() {
//         gifsContainer.removeChild(gifElement);
//     });

//     gifsContainer.appendChild(gifElement);
// }

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Giphy GIF Fetcher</title>
// </head>
// <body>
//     <h1>Giphy GIF Fetcher</h1>
    
//     <form id="searchForm">
//         <label for="categoryInput">Enter a category:</label>
//         <input type="text" id="categoryInput" required>
//         <button type="submit">Fetch GIF</button>
//     </form>

//     <div id="gifsContainer"></div>

//     <button id="deleteAllBtn">Delete All</button>

//     <script src="script.js"></script>
// </body>
// </html>
