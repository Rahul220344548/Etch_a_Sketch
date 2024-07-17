
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("grid-container");
    const resizeBtn = document.querySelector(".btn");
    const clearBtn = document.querySelector(".clearBtn");
    function createGrid(size) {
        // Clear any existing squares
        container.innerHTML = '';

        // Calculate the size of each square
        const squareSize = 640 / size; // Assuming container size is 640px

        // Create the squares
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'red';
            });
        }

        // Adjust the container size
        container.style.width = `${640}px`;
        container.style.height = `${640}px`;
    }
    function resizeGrid() {
        let resizeValue;
        do {
            resizeValue = prompt("Enter a number between 1 to 100: ");
            resizeValue = Number(resizeValue);
            if (resizeValue < 1 || resizeValue > 100) {
                alert("ERROR! Please enter a number between 1 and 100.");
            }
        } while (resizeValue < 1 || resizeValue > 100);
        createGrid(resizeValue);
    }

    clearBtn.addEventListener('click', () => {
        createGrid(16);
    });

    resizeBtn.addEventListener('click', resizeGrid);
    // Create initial grid
    createGrid(16); // Default size
});







