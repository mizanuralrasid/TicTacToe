let boxes = document.querySelectorAll(".box");
let msgBox = document.querySelector("#msg-box");
let resetBtn = document.querySelector("#resetBtn");

let turn0 = true; // turn0 , turnX

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("boxe was clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) =>{
    msgBox.innerText = `Congratulations, Winner is ${winner}`;

}

const disableBox = () =>{
    for (box of boxes) {
        box.disabled=true;
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
            console.log("winner");
            showWinner(pos1);
            disableBox();
            }
          }
    }
};

resetBtn.addEventListener("click", resetGame);

const resetGame = () =>{
    turn0 = true;
    msgBox = innerText = "";
    enableBoxes();
}

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };