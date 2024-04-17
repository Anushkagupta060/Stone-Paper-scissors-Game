let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genComputerChoice=()=>{ //randumly computer rock,paper scisssors me se randumly ek chose krega
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =(userChoice) =>{
    // console.log("game was drawn");
    msg.innerText = "GAme Was Draw. Play again";
    msg.style.backgroundColor.backgroundColor ="pink";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText =userScore;
        // console.log("You Win!");
        msg.innerText = `You Win! Your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";//yha color chenge kar sakte hai if we win

        
         
    }else{
        console.log("You Lose");
        compScore++;
        compScorePara.innerText =compScore;
        msg.innerText = `You Lose! ${compChoice} beats  Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}
const playGame =(userChoice) =>{
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice = genComputerChoice();
    console.log("computer choice =",compChoice);


    if(userChoice ===compChoice){ //draw game
        drawGame();
    }else{
        let userWin =true;
        if(userChoice ==="rock"){ //scissor,paper
            userWin= compChoice ==="paper" ? false : true;
        }else if(userChoice ==="paper"){//rock,scissors chose kra hoga
            userWin = compChoice ==="scissors" ? false:true;

        }else{//rock,paper hoga user ke pass
            userWin =compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{ //user choice is given
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});