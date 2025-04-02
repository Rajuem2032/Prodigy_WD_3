let hour=0;
let min=0;
let sec=0;
let ms=0;
let timerRunning=false;
let intervalId=null;

let start=document.getElementById('start');
let pause=document.getElementById('pause');
let reset=document.getElementById('reset');
let lap=document.getElementById('lap');
let lapList=document.getElementById('laplist');
let display=document.getElementById('timeDisplay')
let msDisplay=document.getElementById('msCount');

start.addEventListener('click', function(){
    if(!timerRunning){
        startTimer();
        start.innerHTML="PAUSE";
         start.style.backgroundColor="red"
    }
    else{
        pauseTimer();
        start.innerHTML="RESUME"
        start.style.backgroundColor="green"
    }
});

reset.addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId=null;
    timerRunning=false;
    hour=0;
    min=0;
    sec=0;
    ms=0;
    display.innerHTML=`${"00"} : ${"00"} : ${"00"}`;
    msDisplay.innerHTML=`${"00"}`;
    start.innerHTML="START"

})

lap.addEventListener('click', function(){
    if(timerRunning){
        let laptext=display.textContent;
        let lapItem=document.createElement('li');
        lapItem.textContent=`lap${lapList.children.length+1}: ${laptext}`
        lapList.appendChild(lapItem);
    }
})


function startTimer(){
    if(!intervalId){
        intervalId=setInterval(stopwatch,10);
        timerRunning=true;
       
    }
}

function pauseTimer(){
    clearInterval(intervalId);
    intervalId=null;
    timerRunning=false;
    
}

function stopwatch(){
    if(timerRunning){
        ms++;
        if(ms==100){
            ms=0;
            sec++;
            if(sec==60){
                sec=0;
                min++;
                if(min==60){
                    min=0;
                    hour++;
                }
            }
        }
    }
    // setTimeout("stopwatch()", 10);
    
    let secString=sec<10 ? `0${sec}` : sec
    let minString=min<10 ? `0${min}` : min
    let hourString=sec<10 ? `0${hour}` : hour
    let msString=ms<10 ? `0${ms}` : ms*10
    display.innerHTML=`${hourString} : ${minString} : ${secString}`
    msDisplay.innerHTML=`${msString}`
    
    
}

