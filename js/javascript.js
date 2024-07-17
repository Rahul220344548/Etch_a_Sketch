


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

resizeBtn.addEventListener('click', resizeGrid)


function resizeGrid() {
    // This Function adjusts the number of sqaures in grid based on input from user
    let resizeValue = prompt("Enter a number between 1 to 100: ");
    resizeValue = Number(resizeValue);
    
    if (resizeValue >= 1 && resizeValue <=100) {
        alert("Work!");
    } else {
        alert("ERROR!");
    }
}
