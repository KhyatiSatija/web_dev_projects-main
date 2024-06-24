window.addEventListener("load", initEvents);
function initEvents(){
    loadGameBoard();
}
function loadGameBoard(){
    let table = document.querySelector("#gameBoard");
    for (let i = 0; i< 3; i++){
        //insert a new row
        let tr = table.insertRow();
        for (let j = 0; j < 3; j++){
            //create a new col
            let td = tr.insertCell();
            //create button
            let btn = document.createElement("button");
            btn.className = "btn";
            //append button in column
            td.appendChild(btn);
            btn.addEventListener("click", userMove);
        }
    }
}
function userMove(){
    // event.target.textContent = 'X';
    this.innerHTML = 'X';
}

function cpuMove(){
    let randomPosition = parseInt(Math.random() * 9);
    let btns = document.querySelectorAll(".btn");
    let randomBtn = btns[randomPosition];
    randomBtn.innerHTML = '0';
}
