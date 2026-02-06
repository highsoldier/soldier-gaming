document.addEventListener("DOMContentLoaded", () => {
    const gameSelect = document.getElementById("game-select");
    const launchBtn = document.getElementById("launch-btn");

    // Load games into dropdown (same as before)
    fetch("games.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(game => {
                const option = document.createElement("option");
                option.value = game.url; // URL of the game file
                option.textContent = game.title;
                gameSelect.appendChild(option);
            });
        });

    // Handle Launch Button - NEW LOGIC
    launchBtn.addEventListener("click", async () => {
        const selectedUrl = gameSelect.value;
        if (!selectedUrl) {
            alert("Please select a game first!");
            return;
        }

        try {
            // 1. Fetch the content of the game file
            const response = await fetch(selectedUrl);
            const gameContent = await response.text();

            // 2. Open a new blank tab
            const newTab = window.open("about:blank", "_blank");

            // 3. Write the fetched HTML into the new tab
            newTab.document.open();
            newTab.document.write(gameContent);
            newTab.document.close();
            
        } catch (error) {
            console.error("Failed to load game:", error);
            alert("Could not load the game.");
        }
    });
});