const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;


MAX_HEIGHT = 2000
MIN_HEIGHT = -2000
MAX_WIDTH = 2000
MIN_WIDTH = -2000
class Nave {
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.height = 40;
        this.width = 30;
    }
    update(){
        this.draw();
        if (this.position.y +this.height/2 + this.velocity.y >=MAX_HEIGHT || this.position.y -this.height/2 + this.velocity.y <= MIN_HEIGHT){
            this.velocity.y = 0;
        }
        if (this.position.x +this.width/2 + this.velocity.x >=MAX_WIDTH || this.position.x -this.width/2 + this.velocity.x <= MIN_WIDTH){
            this.velocity.x = 0;
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    draw(){
        context.fillStyle = 'white';
        context.fillRect(this.position.x, this.position.y,40,30);
    }
}

const player = new Nave({
    position:{
        x:canvas.width/2,
        y:canvas.height/2
    },
    velocity:{
        x:0,
        y:0
    }
})



function trans_x (posicao,width,max,min){
    translate_x =width/2-posicao;
    if (max-posicao<= 540){
        translate_x = width/2-1488-player.width/2;
    }
    return translate_x;
}

/*function trans_y (posicao,height,max,min){
    translate_y =height/2-posicao;
    if (max-posicao<= 1024){
        translate_y = 976;
    }
    if (min - posicao >=1024){
        translate_y = 1024 ;
    }
    return translate_y;
}*/


function animate(){
    window.requestAnimationFrame(animate);
    context.fillStyle = 'red';
    context.fillRect(-2000,-2000,4000,4000);
    context.save();
    context.translate(trans_x(player.position.x,canvas.width,MAX_HEIGHT,MIN_HEIGHT),canvas.height/2-player.position.y);
    player.update();
    context.restore();

}

animate();
window.addEventListener('keydown', (event) => {
    switch (event.key) {
    case 'w':
        player.velocity.y = 8;
        break
    case 'a':
        player.velocity.x = -8;
        break
    case 's':
        player.velocity.y = -8;
        break
    case 'd':
        player.velocity.x = 8;
        break
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
    case 'w':
        player.velocity.y = 0;
        break
    case 'a':
        player.velocity.x = 0;
        break
    case 's':
        player.velocity.y = 0;
        break
    case 'd':
        player.velocity.x = 0;
        break
    }
});