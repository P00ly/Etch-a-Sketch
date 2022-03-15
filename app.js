//Selectors
const container_div = document.getElementById("grid-container");
const sizeSlider_input = document.getElementById("sizeSlider");




//Event Listeners






//FUNCTIONS
//creates grid
function makeGrid(rows, cols) {
    container_div.style.setProperty('--grid-rows', rows);
    container_div.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container_div.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16, 16);

//Shows slider value
function updateSliderValue(val) {
    document.getElementById('sliderValue').value = val;
}