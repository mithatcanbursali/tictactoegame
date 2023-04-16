const box = document.querySelectorAll(".box");
const text = document.querySelector(".turn");
const topBoxes = document.querySelectorAll(".top");
const bottomBoxes = document.querySelectorAll(".bottom");
const leftBoxes = document.querySelectorAll(".left");
const rightBoxes = document.querySelectorAll(".right");
const centerBoxes = document.querySelectorAll(".center");
const crossLeft = document.querySelectorAll(".crossleft");
const crossRight = document.querySelectorAll(".crossright");
const centerTop = document.querySelectorAll(".centertop")


let flag = 0;
let checkChanged = [0,0,0,0,0,0,0,0,0];
let drawIndicator = 9;
let win = 0;



function checkWin(){
let winCheck = 3;

for(let i = 0; i < 3; i++){
    if(topBoxes[i].innerHTML === "X"){
        winCheck--;
    }

    
    if (winCheck === 0){
        text.innerHTML = "Player 1 Wins!";
        for(let i = 0; i < 3; i++){
        topBoxes[i].classList.add("win-color");
        }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(bottomBoxes[i].innerHTML === "X"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 1 Wins!";
        for(let i = 0; i < 3; i++){
            bottomBoxes[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(leftBoxes[i].innerHTML === "X"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 1 Wins!";
        for(let i = 0; i < 3; i++){
            leftBoxes[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(rightBoxes[i].innerHTML === "X"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 1 Wins!";
        for(let i = 0; i < 3; i++){
            rightBoxes[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(centerBoxes[i].innerHTML === "X"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 1 Wins!";
        for(let i = 0; i < 3; i++){
            centerBoxes[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(crossLeft[i].innerHTML === "X"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 1 Wins!";
        for(let i = 0; i < 3; i++){
            crossLeft[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(crossRight[i].innerHTML === "X"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 1 Wins!";
        for(let i = 0; i < 3; i++){
            crossRight[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(centerTop[i].innerHTML === "X"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 1 Wins!";
        for(let i = 0; i < 3; i++){
            centerTop[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}


for(let i = 0; i < 3; i++){
    if(topBoxes[i].innerHTML === "O"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 2 Wins!";
        for(let i = 0; i < 3; i++){
            topBoxes[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(bottomBoxes[i].innerHTML === "O"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 2 Wins!";
        for(let i = 0; i < 3; i++){
            bottomBoxes[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(leftBoxes[i].innerHTML === "O"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 2 Wins!";
        for(let i = 0; i < 3; i++){
            leftBoxes[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(rightBoxes[i].innerHTML === "O"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 2 Wins!";
        for(let i = 0; i < 3; i++){
            rightBoxes[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(centerBoxes[i].innerHTML === "O"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 2 Wins!";
        for(let i = 0; i < 3; i++){
            centerBoxes[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(crossLeft[i].innerHTML === "O"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 2 Wins!";
        for(let i = 0; i < 3; i++){
            crossLeft[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(crossRight[i].innerHTML === "O"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 2 Wins!";
        for(let i = 0; i < 3; i++){
            crossRight[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}

for(let i = 0; i < 3; i++){
    if(centerTop[i].innerHTML === "O"){
        winCheck--;
    }
    if (winCheck === 0){
        text.innerHTML = "Player 2 Wins!";
        for(let i = 0; i < 3; i++){
            centerTop[i].classList.add("win-color");
            }
        win = 1;
    }

if (i == 2){
    winCheck = 3;
}
}


}

function init(){
    for(let i = 0;i<box.length;i++){
     box[i].addEventListener("click", function buttonEvent(){

        if(checkChanged[i] != 1 && win != 1) {
        
        
        if (flag === 0){

            text.innerHTML = "Player 2's Turn"
            box[i].innerHTML = "X";
            flag = 1;
            checkChanged[i] = 1;
            checkWin();
            drawIndicator--;
            if (drawIndicator === 0){
                text.innerHTML = "DRAW"
                checkWin();
                return 1;
                
            }
        
        }

        else {
            text.innerHTML = "Player 1's Turn"
            box[i].innerHTML = "O";
            flag = 0;
            checkChanged[i] = 1;
            checkWin();
            drawIndicator--;
        }
    }




    })}}

    init();
    