let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let mess=document.querySelector("#msg");
choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log("your choice "+userChoice);
        playGame(userChoice);
    })
});
const playGame=(userChoice)=>{
    const compChoice1=compChoice();
    //draw
    if(userChoice==compChoice1) {
        console.log("Game Draw");
        mess.innerText="Game Draw, nice try";
         mess.style.backgroundColor="yellow";
    }
    else {
        //win
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice1=="paper"? false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice1=="scissor"? false:true;
        }
        else{
            userWin=compChoice1=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice1);
    }
    
};
const compChoice=()=>{
    let arr=["rock","scissor","paper"];
    let ind=Math.floor(Math.random()*3);
    console.log("computer Choice "+arr[ind]);
    return arr[ind];
}

let showWinner=(userWin,userChoice,compChoice1)=>{
    if(userWin) {
        console.log("user win");
        updateScore(userWin);
        changeMess(userWin,userChoice,compChoice1);
    }
    else {
        console.log("comp win");
        updateScore(userWin);
        changeMess(userWin,userChoice,compChoice1);
    }
}

const changeMess=(message,userChoice,compChoice1)=>{
     if(message) {
        mess.innerText=`You win!, your ${userChoice} beats ${compChoice1}`;
        mess.style.backgroundColor="green";
     }
     else {
        mess.innerText=`You Loss!, your ${userChoice} beats by${compChoice1}`;
         mess.style.backgroundColor="red";
    }
}

let your=document.querySelector("#you");
let com=document.querySelector("#computer");
let updateScore=(message)=>{
    if(message) {
        userScore+=1;
        your.innerText=userScore;
    }
    else{
        compScore+=1;
        com.innerText=compScore;
    }
}