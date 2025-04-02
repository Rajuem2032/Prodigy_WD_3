window.addEventListener("scroll",function(){
    let header=this.document.getElementById('header');
    if(window.scrollY>50){
        header.style.backgroundColor="rgb(88, 88, 229)"
    }
    else{
        header.style.backgroundColor="blue"
    }
})