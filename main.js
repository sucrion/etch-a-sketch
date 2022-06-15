//names
let contDiv = document.querySelector('#containerDiv');
let hoverColor = '#250609';

//making the grid
for (let i = 1; i <= 16; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('insideDiv');
    newDiv.addEventListener('mouseover', trail);
    contDiv.appendChild(newDiv);
}

document.querySelector('#updateGrid').addEventListener('click', gridUpdate);

//user actions
function trail() {
    // hoverColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = hoverColor;
}

function gridUpdate() {
    let gridSize = Number(document.querySelector('#gridSize').value);
    contDiv.innerHTML = '';
    let newSize = (1 / gridSize)*100;
    for (let i = 1; i <= gridSize**2; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('insideDiv');
        newDiv.addEventListener('mouseover', trail);
        newDiv.style.width = newSize + '%';
        newDiv.style.height = newSize + '%';
        contDiv.appendChild(newDiv);
    }
}

