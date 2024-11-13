let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#b1");
let msgCont = document.querySelector(".msgcontainer");
let message = document.querySelector("#msg"); 


let turnO = true;

const winPattern = [

    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,4,8],

];

boxes.forEach((box)  => {

    box.addEventListener("click",()=>{
        console.log("box was clicked")
     if(turnO){
        box.innerText = "O"
        turnO = false;
     }
     else{
        box.innerText = "X"
        turnO = true; 
     }
     box.disabled = true;

winnerCheck();

    });
});
//for reseting game
const gameReset = () => {
    turnO = true;
    enableBox();
    msg.style.display = "none";  
    msg.innerText = 'Winner';
};
//For enabling boxes
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false ;
        box.innerText = "";
    }
}


//For disabling boxes
const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
}




const winnerShow = (winner) => {
    msg.style.display = "block"; 
    msg.style.fontWeight = "bold"; 
    msg.innerText = `Winner is ${winner}`;
    disableBox();
};



const winnerCheck = () =>{
for(let pattern of winPattern ){
   let p1V = boxes[pattern[0]].innerText;
   let p2V = boxes[pattern[1]].innerText;
   let p3V = boxes[pattern[2]].innerText;

   if(p1V != "" && p2V != "" && p3V != ""){

    if(p1V === p2V && p2V === p3V){
        winnerShow(p1V);
        console.log("winner", p1V);

       
       
    }
   }
}
};


//Adding functiong to reset button
resetBtn.addEventListener("click", gameReset);