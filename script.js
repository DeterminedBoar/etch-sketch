let currentColor = document.querySelector(".color-picker").value;
let gridSize = document.querySelector("#grid-size-controller").value;
let sizeDisplay = document.querySelector(".grid-size");
let mouseUp = true;

const gridArea = document.querySelector(".grid-content");
const sizeController = document.querySelector("#grid-size-controller");
const colorPicker = document.querySelector(".color-picker");
const clearBtn = document.querySelector(".grid-clear")



sizeDisplay.textContent = "Size: " + gridSize; 
createGrid();

function setTileSize(tile ,width, height) {
    tile.style.cssText = "width: " + width + "px; " + "height: " + height + "px;";
}

function setTileColor(tile, width, height, color) {
    tile.style.cssText = "width: " + width + "px; height: " + height + "px; background-color: " + color + ";";
}

function createGrid() {
    for (let gridRow = 0; gridRow < gridSize; gridRow++) {
        for (let gridCol = 0; gridCol< gridSize; gridCol++) {
            createTile();
        }    
    }
}

document.body.onmouseup = function() {
    mouseUp = true;
}

function createTile() {
    const tile = document.createElement("div");
    tileWidth = 320/gridSize;
    tileHeight = 320/gridSize;
    setTileSize(tile, tileWidth, tileHeight);
    tile.classList = "tile";
    gridArea.appendChild(tile);
    tile.addEventListener("mousedown", (event) => {
        event.preventDefault();
        mouseUp = false;
        setTileColor(tile, tileWidth, tileHeight, currentColor);
    });
    tile.addEventListener("mousemove", () => {
        if (mouseUp === false) {
            setTileColor(tile, tileWidth, tileHeight, currentColor);
        }
    });
}

function clearGrid() {
    while (gridArea.firstChild) {
        gridArea.removeChild(gridArea.lastChild);
    }
}

colorPicker.addEventListener("input", (event) => {
    const tempColor = event.target.value;
    currentColor = tempColor;
});

clearBtn.addEventListener("click", () => {
    clearGrid();
    createGrid();
});

sizeController.addEventListener("input", (event) => {
    const tempslider = event.target.value;
    gridSize = tempslider;
    sizeDisplay.textContent = "Size: " + tempslider; 
    clearGrid();
    createGrid();
});
