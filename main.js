//names
let contDiv = document.querySelector('#containerDiv');

//making the initial grid
for (let i = 1; i <= 16; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('insideDiv');
    contDiv.appendChild(newDiv);    
    trailAttach();
}

//event listeners
document.querySelector('#updateGrid').addEventListener('click', gridUpdate);
document.querySelector('#colorBtn').addEventListener('click', colorToggle)

function trailAttach() {document.querySelectorAll('.insideDiv').forEach(item => item.addEventListener('mouseover', trail))
}

function colorToggle() {
    document.querySelectorAll('.insideDiv').forEach(item => {
        item.classList.toggle('colorful');
        if (item.classList.contains('colorful')) {
            item.removeEventListener('mouseover', trail);
            item.addEventListener('mouseover', trailColor)    
        } else {
            item.removeEventListener('mouseover', trailColor);
            item.addEventListener('mouseover', trail)    
        }
    })
}

//user actions
function trail() {
    this.style.backgroundColor = '#382f30';
}
function trailColor() {
    //random hex
    let hoverColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = hoverColor;
}

function gridUpdate() {
    let gridSize = Number(document.querySelector('#gridSize').value);
    contDiv.innerHTML = '';
    let newSize = (1 / gridSize)*100;
    for (let i = 1; i <= gridSize**2; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('insideDiv');
        newDiv.style.width = newSize + '%';
        newDiv.style.height = newSize + '%';
        contDiv.appendChild(newDiv);
        trailAttach();
    }
}

