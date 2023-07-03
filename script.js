score = 0;
cross = true;//score badh sakta hai
document.onkeydown=function(e){
    console.log("Key code is: ", e.key)
    if(e.key=="ArrowUp"){
        console.log("sshd");
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        },700);
    }
    if(e.key=="ArrowRight"){
        console.log("sshd");
        dino = document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino ,null).getPropertyValue('left'));
        dino.style.left = dinoX+ 112 +"px";
        
    }
    if(e.key=="ArrowLeft"){
        console.log("sshd");
        dino = document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino ,null).getPropertyValue('left'));
        dino.style.left = (dinoX- 112) +"px";
        
    }
}
//aap iss kaam ko karte reh kuch interval tak
//ye check karwayega kya aap apne obstacle se takra rhe hai
setInterval(() => {
    dino = document.querySelector('.dino');
    GameOver = document.querySelector('.GameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino ,null).getPropertyValue('left'));
    //dino ko kuda rhi hu toh uski top value bhi change krrhi hu
    dy = parseInt(window.getComputedStyle(dino ,null).getPropertyValue('top'));
    //dino ki computed left value
    
    ox = parseInt(window.getComputedStyle(obstacle ,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle ,null).getPropertyValue('top'));
    //proximity check karne ke liye kii itne me ho yya na ho toh jump karw ya jo bhi 
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    //console.log(offsetX,offsetY)
    if(offsetX< 150 && offsetY<63){
        GameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
    }
    else if(offsetX< 145 && cross){//x axis me rahe zombie ke paas
        score+=1; 
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        },1000);
    }


}, 100);
function updateScore(score){
    ScoreCount.innerHTML = "Your Score: "+ String(score);
}
