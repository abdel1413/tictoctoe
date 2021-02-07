//select

var nextDiv = document.querySelector(".next");
const resetDiv = document.querySelector('.reset');
const cellDiv = document.querySelectorAll('.grid');
// console.log("nextDiv = "+nextDiv.value);

//game variables
let gameIsLive = true;
let xIsNext = true;


//lettersym
const xSymb = '✕';
const oSymb ='O';

//functions
//convert letter to symbole
const letterToSymb = (letter) => letter === 'x' ? xSymb : oSymb ; 
// console.log("letterToSymb" + letterToSymb);


const checkGamestatus = () => {
const topLeft = cellDiv[0].classList[1];
const topMiddle = cellDiv[1].classList[1];
const topRight = cellDiv[2].classList[1];
const middleLeft = cellDiv[3].classList[1];
const middleMiddle = cellDiv[4].classList[1];
const middleRight = cellDiv[5].classList[1];
const bottomLeft = cellDiv[6].classList[1];
const bottomMiddle = cellDiv[7].classList[1];
const  bottomRight= cellDiv[8].classList[1];

// console.log(topLeft,topMiddle, topRight,
//             middleLeft,middleMiddle,middleRight,
//              bottomLeft,bottomMiddle,bottomRight);

//fuction to handle the winner 
const  handleWinner = (letter) =>{
    gameIsLive = false;
    winner = letter;
    if(letter=== 'x'){
        nextDiv.innerHTML = `${letterToSymb(letter)} has won!`
}else{
   
    // text on the screen should change the color to white
    nextDiv.innerHTML = `<span>${letterToSymb(letter)}  has won!<span>`;  
}
}

//check winner
if(topLeft && topLeft === topMiddle && topLeft === topRight){
  handleWinner(topLeft); 
  cellDiv[0].classList.add('won')
  cellDiv[1].classList.add('won')
  cellDiv[2].classList.add('won')
}else if(middleLeft && middleLeft === middleMiddle && middleLeft === middleRight){
    handleWinner(middleLeft);
    cellDiv[3].classList.add('won')
  cellDiv[4].classList.add('won')
  cellDiv[5].classList.add('won')
}else if(bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
    handleWinner(bottomLeft);
    cellDiv[6].classList.add('won')
  cellDiv[7].classList.add('won')
  cellDiv[8].classList.add('won')
}else if(topLeft && topLeft === middleLeft && topLeft === bottomLeft){
    handleWinner(topLeft);
    cellDiv[0].classList.add('won')
  cellDiv[3].classList.add('won')
  cellDiv[6].classList.add('won')
} else if(topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle){
    handleWinner(topMiddle);
    cellDiv[1].classList.add('won')
  cellDiv[4].classList.add('won')
  cellDiv[7].classList.add('won')
}else if(topRight && topRight===middleRight && topRight === bottomRight){
    handleWinner(topRight);
    cellDiv[2].classList.add('won')
  cellDiv[5].classList.add('won')
  cellDiv[8].classList.add('won')
}else if(topLeft && topLeft === middleMiddle && topLeft === bottomRight){
    handleWinner(topLeft);
    cellDiv[0].classList.add('won')
  cellDiv[4].classList.add('won')
  cellDiv[8].classList.add('won')
}else if(topRight && topRight === middleMiddle && topRight === bottomLeft){
    handleWinner(topRight);
    cellDiv[2].classList.add('won')
  cellDiv[4].classList.add('won')
  cellDiv[6].classList.add('won')
}else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight
    && bottomLeft && bottomMiddle && bottomRight){
        gameIsLive = false;
        nextDiv.innerHTML = `game is tied!`;

    }else{
        xIsNext = !xIsNext;
        if(xIsNext){
            nextDiv.innerHTML = `${xSymb} is next`;
        }else{
            nextDiv.innerHTML = `<span>${oSymb} is next</span>`;
        }
    }
};


//event handler
// const handleReset = (e)=>{
//     console.log(e);
// }

const handleReset = () =>{
    xIsNext = true;
    nextDiv.innerHTML =`${xSymb} is next`;

    for(const celdv of cellDiv){
         celdv.classList.remove('x');
         celdv.classList.remove('o');
         celdv.classList.remove('won');
    }
    gameIsLive = true;
}

const handleCells = (e) =>{
    // console.log(e.target.classList);
    const classList = e.target.classList;
    const location = e.target.classList[1];

    // console.log("location is "+ location);

    if(!gameIsLive ||classList[1]=== 'x'|| classList[1]==='o'){
        return;
    }
   
    if(xIsNext){
        classList.add("x");
        checkGamestatus();
       
    }else{
        classList.add("o");
        checkGamestatus();
       
    }

};

//event listener

resetDiv.addEventListener("click",handleReset);

 for (const cell of cellDiv){
 cell.addEventListener("click",handleCells);}