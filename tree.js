class Tree{
    constructor(x,y,width,height,im){
        this.im=im;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display(){
        image(this.im,this.x,this.y,this.width,this.height);
    }
}