class Boy{
    constructor(im,x, y, width, height){
        this.body=Bodies.rectangle(x, y,width, height);
        this.width = width;
        this.height = height;
        this.im=im
    }
    display() {
        var pos = this.body.position;
        image(this.im,this.body.position.x,this.body.position.y, this.width, this.height);
    }
}