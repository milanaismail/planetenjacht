class Planeet {
    constructor(x, y, color, speed, size) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.speed = speed;
      this.size = size;
    }
  
    move() {
      let radius = this.size/2
      this.y += this.speed;
      if (this.y > height) {
        this.y = 0 - radius;
      }
    }
  
    display() {
      fill(this.color);
      circle(this.x, this.y, this.size);
    }

    isColliding(obj){
      let isHit =collideRectCircle(obj.x, obj.y, obj.width, obj.height, this.x, this.y, this.size);
      return isHit
    }

  }