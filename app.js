let boxes = document.querySelectorAll('.box');
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg');
let resetBtn = document.querySelector('#reset-btn')
let newGameBtn = document.querySelector('#new-game-btn');

let turnX = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [1,4,7],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnX) {
            box.innerText = 'X';
            turnX = false;
        }
        else {
            box.innerText = '0';
            turnX = true;
        }
        box.disabled = true
        checkWinner();
    })
})
const showWinner = (winner) => {
    msg.innerText = `Congragulations winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const resetGame = () => {
    enableBoxes();
    msgContainer.classList.add('hide');
}
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        turnX = true;
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWinner = () => {
    for(let pattern of winPattern) {
        let pos1Val= boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!= "" && pos2Val!="" && pos3Val!="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}
resetBtn.addEventListener('click',resetGame)
newGameBtn.addEventListener('click',resetGame)