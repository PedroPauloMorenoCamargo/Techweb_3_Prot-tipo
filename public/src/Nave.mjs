export default class Nave {
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.height = 40;
        this.width = 30;
    }
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y +this.height/2 + this.velocity.y >=MAX_HEIGHT || this.position.y -this.height/2 + this.velocity.y <= MIN_HEIGHT){
            this.velocity.y = 0;
        }
        if (this.position.x +this.height/2 + this.velocity.x >=MAX_WIDTH || this.position.x -this.height/2 + this.velocity.x <= MIN_WIDTH){
            this.velocity.x = 0;
        }
    }
    draw(){
        context.fillStyle = 'white';
        context.fillRect(this.position.x, this.position.y,40,30);
    }
}