document.addEventListener("DOMContentLoaded", () => {
    const gameSelect = document.getElementById("game-select");
    const launchBtn = document.getElementById("launch-btn");

    // Load games from JSON into dropdown
    fetch("games.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(game => {
                const option = document.createElement("option");
                option.value = game.url; // Store URL in value
                option.textContent = game.title;
                gameSelect.appendChild(option);
            });
        });

    // Handle Launch Button
    launchBtn.addEventListener("click", () => {
        const selectedUrl = gameSelect.value;
        if (selectedUrl) {
            window.location.href = selectedUrl; // Redirect to game
        } else {
            alert("Please select a game first!");
        }
    });
});