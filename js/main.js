let elBox = document.querySelector(".box");
let sum = 1;
let winTitle = document.querySelector(".win--title");

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

document.querySelector(".reset").addEventListener("click",reset);

function Render() {
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
}

Render()

function win() {
    let elCells = document.querySelectorAll(".box__cell");
    for(let i = 0; i <= 7; i++){
        let itemArr = userWin[i];;
        if(elCells[itemArr[0]].id == "x" && elCells[itemArr[1]].id == "x" && elCells[itemArr[2]].id == "x"){
            winTitle.style.display = "block";
            document.querySelector(".reset").style.display="flex";
            reset()
        }
        else if(elCells[itemArr[0]].id == "o" && elCells[itemArr[1]].id == "o" && elCells[itemArr[2]].id == "o"){
            winTitle.textContent = "o win"
            winTitle.style.display = "block";
            document.querySelector(".reset").style.display="flex"
            reset()
        }
    }
   
}

function reset(){
    document.querySelectorAll(".box__cell").forEach(item => {item.style.pointerEvents = "none"});
    document.querySelector(".reset").addEventListener("click", ()=> {
        document.querySelectorAll(".box__cell").forEach(item => {item.innerHTML="",item.id=""});
        winTitle.style.display = "none"
        setTimeout(()=> {
            document.querySelector(".reset").style.display="none";
        },500)
        window.location.reload();
    })
   
}
