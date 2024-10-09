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



