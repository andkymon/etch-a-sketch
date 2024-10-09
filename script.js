const container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
    const square = document.createElement("div");

    square.className = "square";
    square.style.height = "6.25%";
    square.style.width = "6.25%";
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
    container.appendChild(square);
};

const btn = document.querySelector("#sizeChanger");
btn.addEventListener("click", btnClick);

function btnClick() {
    let choice = prompt("Choose a grid size (1-100):")
    if (choice > 0 && choice < 101 && Number.isInteger(Number(choice))) {
        changeSize(choice);
    } else if (choice != null) {
        alert("Invalid input!");
        console.log(choice);
    }
}

function changeSize(size) {
    //Clear existing grid
    const oldSquares = document.querySelectorAll(".square");
    oldSquares.forEach((oldSquare) => container.removeChild(oldSquare));
    //Create new grid
    dimes = (100 / size) + "%";
    for (i = 0; i < (size ** 2); i++) {
        const square = document.createElement("div");
    
        square.className = "square";
        square.style.height = dimes;
        square.style.width = dimes;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        container.appendChild(square);
    };
}
