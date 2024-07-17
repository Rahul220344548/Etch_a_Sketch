


document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("grid-container");

    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        });
        
    }
});

const resizeBtn = document.querySelector(".btn");

resizeBtn.addEventListener('click', () => {
    prompt("Enter a number between 1 to 64: ");
});


