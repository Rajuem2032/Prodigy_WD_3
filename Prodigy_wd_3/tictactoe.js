let buttons = document.getElementsByClassName('btn');
let start=document.querySelector('#startbtn')
let reset=document.querySelector('#resetbtn')
let body=document.body;
let clicked=false;
let timeout;
let clickAudio=new Audio("glass-ting.mp3")
let scratchAudio=new Audio("scratch.mp3")
let resetAudio=new Audio("reset.mp3")
let gameOverAudio=new Audio("gameOver.mp3")
let startAudio=new Audio("start.mp3")
let winAudio=new Audio("win.mp3")
let turnText=document.querySelector('#turntext')
let startClicked=false
// let declareWinner=document.querySelector('.decalrewin')

disableAll();

start.addEventListener('click',function(){
    if(startClicked===false){
        for(let b of buttons){
            b.disabled=false;
            b.classList.add('active');
        }
        start.style.backgroundColor = "red";
        document.querySelector(".line").style.width="0"
        start.innerText="RESET"
        startClicked=true;
        startAudio.play();
    }else{
        for(let b of buttons){
            b.innerText="";
        }
        startClicked=false;
        turnText.innerText=""
        start.style.backgroundColor = "green";
        start.innerText="START"
        turnText.innerText=""
        document.querySelector(".line").style.width="0"
        clicked=false;
        resetAudio.play()
        document.querySelector('.declarewin').innerText=""
        document.querySelector("#winjoy").getElementsByTagName('img')[0].style.width="0"
    }
})




for (let b of buttons) {
    b.addEventListener('click', function() {
        if(!clicked){
            
            b.innerText = "X";
            clicked=true;
            turnText.innerText="Turn for O"
        }
        else{
            
            b.innerText="O";
            clicked=false;
            turnText.innerText="Turn for X"
        }
        clickAudio.currentTime=0;
        clickAudio.play();
        b.disabled=true;
        
        concludeWinner();
        
        
    });
}


const winner=[
    [0,1,2,-1.6,3,0],
    [3,4,5,-1.6,9.7,0],
    [6,7,8,-1.6,16.5,0],
    [0,4,8,-0.1,10.5,45],
    [2,4,6,-1,10,315],
    [0,3,6,-7.4,10,90],
    [1,4,7,-1.1,10,90],
    [2,5,8,5.6,10,90]
            ]

function concludeWinner(){
    for(let win of winner){
        const [a,b,c]=win;
        if (buttons[a].innerText!="" && buttons[a].innerText===buttons[b].innerText && buttons[a].innerText===buttons[c].innerText) {
            
            document.querySelector('.declarewin').innerText=buttons[a].innerText+" Win's"
            document.querySelector(".line").style.width="20vw"
            document.querySelector("#winjoy").getElementsByTagName('img')[0].style.width="16vw"
            document.querySelector('.declarewin').style.visibility="visible"
            document.querySelector(".line").style.transform=`translate(${win[3]}vw, ${win[4]}vw) rotate(${win[5]}deg)`
            document.querySelector('.celeb').style.visibility="visible"

            setTimeout(function(){
                document.querySelector('.celeb').style.visibility="hidden"
            },5000)
            
            for(let b of buttons){
                b.classList.remove('active');
            }
            turnText.innerText=""
            
            winAudio.play();
            disableAll();
            return;
        }
    }
    
        let allField=true;
        for(let b of buttons){
            if(b.innerText===""){
             allField=false;
             break;
             }
         }       
        if(allField){
            for(let b of buttons){
                b.classList.remove('active');
            }
            gameOverAudio.play();
            for(let b of buttons){
            b.innerText="";
        }
        disableAll();
        clicked=false;

    }

}


function disableAll(){
    for(let b of buttons){
        b.disabled=true;
    }
}

function gameDraw(){
    
}



