let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // 1:playerX  2:playerO

//for this we create 2D Array

const winPatterns = [
//In the game played on a 3x3 matrix logic

    //Horizontal Wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //Vertical Wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //Diagonal Wins
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click on box");
        if(turnO) {
            //player O
            box.innerText = "O";
            turnO = false;
        } else {
            //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`; 
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let patterns  of winPatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "" ) {
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
                
                break;
            }
        }
    }
};   

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
