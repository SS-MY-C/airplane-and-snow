var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");
var particles =[];
for (var i=0;i<500;i++){
    particles.push({
        x:Math.random()*window.innerWidth,
        y:Math.random()*window.innerHeight,
        vx:(Math.random()*1-.5),
        vy:(Math.random()*1+.5),
        size:1+Math.random()*2,
        color:"#fff"
    });
}
function timeUpdate(e){
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    var particle;
    for( var i=0; i<500 ; i++){
        particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        if(particle.x < 0){
            particle.x = window.innerWidth;
        }
        if(particle.x > window.innerWidth){
            particle.x = 0;
        }
        if(particle.y >= window.innerHeight){
            particle.y=0;
        }
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x , particle.y , particle.size , 0 ,Math.PI*2);
        context.closePath();
        context.fill();
    }
}
setInterval(timeUpdate, 40);