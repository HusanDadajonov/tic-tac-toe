let elBox = document.querySelector(".box");
let sum = 1;
let winGif = document.querySelector(".win-gif");
let ohNoGif = document.querySelector(".no-gif");
let userWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let ohNo = document.getElementById("myAudio");
let winAudio = document.getElementById("myAudio2");

function startOhNo() { 
  ohNo.autoplay = true;
  ohNo.load();
}
function startWin (){
    winAudio.autoplay = true;
    winAudio.load();
}

document.querySelector(".reset").addEventListener("click",reset);

for(let i = 0; i <= 8; i++){
    let cell = document.createElement("div");
    cell.className = "box__cell";
    elBox.appendChild(cell);
    cell.addEventListener("click",itemClick,{once:true});
    
    function itemClick (e){
        if(sum){
            cell.innerHTML = `<i class='bx bx-x'></i>`;
            cell.id = "x";
            sum = 0;
        }
        else{
            cell.innerHTML = `<i class='bx bx-circle'></i>`;
            cell.id = "o";
            sum = 1;
        }
        win();
    }
}

function win() {
    let elCells = document.querySelectorAll(".box__cell");
    for(let i = 0; i <= 7; i++){
        let itemArr = userWin[i];;
        if(elCells[itemArr[0]].id == "x" && elCells[itemArr[1]].id == "x" && elCells[itemArr[2]].id == "x"){
            console.log("X");
            winGif.style.visibility = "visible";
            startWin();
            document.querySelector(".reset").style.visibility = "visible"
        }
        else if(elCells[itemArr[0]].id == "o" && elCells[itemArr[1]].id == "o" && elCells[itemArr[2]].id == "o"){
            console.log("o");
            ohNoGif.style.visibility = "visible";
            startOhNo(); 
            document.querySelector(".reset").style.visibility = "visible" 
        }
    }
   
}

function reset(){
    elBox.querySelectorAll(".box__cell").forEach(item => {
        if(item.innerHTML != ""){
            window.location.reload();
        }
    })
    
}
