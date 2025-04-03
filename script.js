document.addEventListener("DOMContentLoaded", () => {
    fetchCharacters();
    fetchEpisodes();
    fetchLocations();
    document.getElementById("search-button").addEventListener("click", searchCharacter);
});

function fetchCharacters() {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => displayCharacters(data.results))
        .catch(error => console.error("Error al obtener los personajes:", error));
}

function displayCharacters(characters) {
    const charactersList = document.getElementById("characters-list");
    charactersList.innerHTML = "";
    characters.forEach(character => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");
        characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>${character.status} - ${character.species}</p>
            <button class="favorite-button" onclick="addToFavorites('${character.id}', '${character.name}', '${character.image}')">❤️ Agregar a Favoritos</button>
        `;
        charactersList.appendChild(characterCard);
    });
}

function fetchEpisodes() {
    fetch("https://rickandmortyapi.com/api/episode")
        .then(response => response.json())
        .then(data => displayEpisodes(data.results))
        .catch(error => console.error("Error al obtener episodios:", error));
}

function displayEpisodes(episodes) {
    const episodesList = document.getElementById("episodes-list");
    episodesList.innerHTML = "";
    episodes.forEach(episode => {
        const episodeItem = document.createElement("div");
        episodeItem.classList.add("episode-item");
        episodeItem.innerHTML = `
            <h3>${episode.name}</h3>
            <p>Temporada ${episode.episode}</p>
            <p>Aired on: ${episode.air_date}</p>
        `;
        episodesList.appendChild(episodeItem);
    });
}

function fetchLocations() {
    fetch("https://rickandmortyapi.com/api/location")
        .then(response => response.json())
        .then(data => displayLocations(data.results))
        .catch(error => console.error("Error al obtener ubicaciones:", error));
}

function displayLocations(locations) {
    const locationsList = document.getElementById("locations-list");
    locationsList.innerHTML = "";
    locations.forEach(location => {
        const locationItem = document.createElement("div");
        locationItem.classList.add("location-item");
        locationItem.innerHTML = `
            <h3>${location.name}</h3>
            <p>Tipo: ${location.type}</p>
            <p>Dimensión: ${location.dimension}</p>
        `;
        locationsList.appendChild(locationItem);
    });
}

function addToFavorites(id, name, image) {
    const favoritesList = document.getElementById("favorite-list");
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("character-card");
    favoriteCard.innerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <button class="remove-button" onclick="removeFavorite(this)">❌ Eliminar</button>
    `;
    favoritesList.appendChild(favoriteCard);
}

function removeFavorite(button) {
    button.parentElement.remove();
}

function searchCharacter() {
    const query = document.getElementById("search-box").value.toLowerCase();
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(response => response.json())
        .then(data => {
            const searchResults = document.getElementById("search-results");
            searchResults.innerHTML = "";
            if (data.results) {
                data.results.forEach(character => {
                    const characterCard = document.createElement("div");
                    characterCard.classList.add("character-card");
                    characterCard.innerHTML = `
                        <img src="${character.image}" alt="${character.name}">
                        <h3>${character.name}</h3>
                        <p>${character.status} - ${character.species}</p>
                        <button class="favorite-button" onclick="addToFavorites('${character.id}', '${character.name}', '${character.image}')">❤️ Agregar a Favoritos</button>
                    `;
                    searchResults.appendChild(characterCard);
                });
            } else {
                searchResults.innerHTML = "<p>No se encontraron personajes</p>";
            }
        })
        .catch(error => console.error("Error en la búsqueda:", error));
}

function openTab(tabName) {
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });
    document.getElementById(tabName).classList.add("active");
}
