document.addEventListener('DOMContentLoaded', function () {
    const fetchDataButton = document.getElementById('fetchData');
    const characterInfoContainer = document.getElementById('characterInfo');
    const loadingMessage = document.getElementById('loading');
    const errorMessage = document.getElementById('error');

    fetchDataButton.addEventListener('click', fetchRandomCharacter);

    function fetchRandomCharacter() {
        loadingMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        characterInfoContainer.innerHTML = ''; // Clear previous character info

        // Make AJAX request to SWAPI
        const apiUrl = 'https://www.swapi.tech/api/people/';
        const randomCharacterId = Math.floor(Math.random() * 83) + 1;

        fetch(apiUrl + randomCharacterId)
            .then(response => response.json())
            .then(data => {
                loadingMessage.style.display = 'none';
                displayCharacterInfo(data.result.properties);
            })
            .catch(error => {
                loadingMessage.style.display = 'none';
                errorMessage.style.display = 'block';
            });
    }

    function displayCharacterInfo(character) {
        const infoHTML = `
            <h2>${character.name}</h2>
            <p>Height: ${character.height} cm</p>
            <p>Gender: ${character.gender}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Home World: ${character.homeworld}</p>
        `;
        characterInfoContainer.innerHTML = infoHTML;
    }
});
