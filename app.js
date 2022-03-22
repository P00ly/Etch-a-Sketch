const colorSelector = document.getElementById("colorSelector");

const default_size = '16'
const default_color = '#000000'; //set default color to black


//Create Grid 
const container_div = document.getElementById("grid-container");

function makeGrid(rows) { 
    container_div.style.setProperty('--grid-rows', rows);
    container_div.style.setProperty('--grid-cols', rows);
    
    for (let i = 0; i < (rows * rows); i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        container_div.appendChild(cell);
        cell.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = colorSelector.value;
        })
    };
};


//Slider value UI
const sizeSlider_input = document.getElementById("sizeSlider");
const sliderValue_div = document.getElementById('sliderValue');

sizeSlider_input.oninput = (e) => updateSliderValue(e.target.value);
function updateSliderValue(value) {
    sliderValue_div.innerHTML = `${value} x ${value}`
};

//Remove previous grid for changing grid size
function removeCells(parent) {
    while (parent.firschild) {
        parent.removeChild(parent.firstChild);
    }
};

//Change grid size
sizeSlider_input.addEventListener('input', function () {
    let value = sizeSlider_input.value //grabs value attribute of this input element
    removeCells(container_div);
    container_div.setAttribute('style', `grid-template-solumns: repeat(${value},
        1fr); grid-template-rows: repeat(${value}, 1fr);`);
    for (let i = 0; i < value * value; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        container_div.appendChild(cell);
        cell.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = colorSelector.value
        })
    }
});

//Clear grid button
const value = sizeSlider_input.value
cell = container_div.children;
const clear = document.getElementById('clearbtn');
clear.addEventListener('click', clearFunction);

function clearFunction() {
    for (let i = 0; i < value * value; i++) {
        cell[i].style.backgroundColor = 'white';
    }
};

//Rainbow button 
const rainbow = document.getElementById('rainbowbtn');
rainbow.addEventListener('click', rainbowfunc)

function rainbowfunc() {
    for (let i = 0; i < value * value; i++)
        cell[i].addEventListener('mouseover', rainbowBackground);  
};

function rainbowBackground(event) {
    event.target.style.backgroundColor = randomColor();
};

function randomColor() {
    let characters = '0123456789ABCDEF';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        color = hash += characters[Math.floor(Math.random() * 16)];
    }
    return color;
};


window.onload = () => {
    makeGrid(default_size);
};