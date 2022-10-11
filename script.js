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
        // square.addEventListener('mouseover', ()=> {
        //     square.style.backgroundColor='red';
        // })
        square.addEventListener('mouseover', colourSquare);
        square.style.backgroundColor= "lightgreen" ;
        board.insertAdjacentElement("beforeend", square);   
    };
};

let click =true;

document.querySelector('body').addEventListener('click', e =>{
   if (e.target.tagName != 'BUTTON'){
    click = !click ;
    if (click){
    document.querySelector(".mode").textContent= "Colouring mode";
    } else {
        document.querySelector(".mode").textContent= "non-Colouring mode";
    }
   }
});

function colourSquare(){
   if (click){
    if (colour === 'random'){
        return  this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
          this.style.backgroundColor=colour; 
      }
   }
}

populateBoard(16);

function changeSize (input) {
    if (input >= 2 && input <= 100){
        populateBoard(input);
        
    }else {
        if(input >100){
        alert('too many squares');
        } else{
            alert('too little squares!')
        }

    }
    
}

        // let blackbtn = document.querySelector(".blackbtn");

        // blackbtn.addEventListener('click', e => {
        //     square.style.backgroundColor ='black';
        // })
    let colour='black';
    function changeColour(choice){
            colour = choice ; 
    }

function reset(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor='lightgreen');
}