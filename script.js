// const box = document.createElement('div');
// // const grid = document.getElementById('table');


// // document.div.innerHTML = 'hello world' ;
// function createSketchpad(){
// const gridContainer= document.querySelector(".grid-container");
// let grid = document.querySelector('.grid-item');

// gridContainer.style.gridTemplateColumns = 'repeat (16, 1fr)';
// gridContainer.style.gridTemplateRows = 'repeat (16, 1fr)';


// // function createSketchpad() {
//     for (let i=0;i <256;i++){
//         // grid.textContent = `${i}` ;
//         // gridContainer.appendChild(grid).innerHTML;
//         grid.style.backgroundColor ="blue";
//         gridContainer.insertAdjacentElement('beforeend', grid);

//     }
// }
// // }

// createSketchpad();
// // function grid.forEach(smallBox => {


    
// // });
function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i=0; i < amount; i++){

        let square = document.createElement("div");
        square.classList.add(`${i}`); //for me to see the nth square 
        square.addEventListener('mouseover', ()=> {
            square.style.backgroundColor='red';
        })
        square.style.backgroundColor= "blue" ;
        board.insertAdjacentElement("beforeend", square);   
    };
};

populateBoard(32);

function changeSize (input) {
    if (input >= 2 && input <= 100){
        populateBoard(input);
        
    }else {
        console.log('too many squares');
    }
    
}