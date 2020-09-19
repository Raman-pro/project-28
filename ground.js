class Ground {
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brow")
        rect(pos.x, pos.y, this.width, this.height);
    }
}

class Mango {
    constructor(ima, x, y, width, height) {
        this.body = Bodies.circle(x, y, width, {isStatic: true, restitution: 0, friction: 1});
        this.width = width;
        this.height = height;
        this.image = ima;
        World.add(world, this.body);
        this.rect;
    }

    display() {
        // var angle = this.body.angle;
        // push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        imageMode(CENTER);
        this.rect=image(this.image, this.body.position.x, this.body.position.y, this.width, this.width)
        // pop()
    }
}

class Stone {
    constructor(ima, x, y, width, height) {
        this.body = Bodies.circle(x, y, width, {
            'restitution': 0,
            'friction': 1.0,
            'density': 1.2
        });
        this.width = width;
        this.height = height;
        this.image = ima;
        World.add(world, this.body);
        this.rect;
    }

    display() {
        // var angle = this.body.angle;
        // push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        imageMode(CENTER);
        this.rect=image(this.image, this.body.position.x, this.body.position.y, this.width, this.width)
        // pop()
    }
}