class Ruimteschip {
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.points = 0;
      this.width = 20;
      this.height = 40;
      this.speed = speed;
    }
    display() {
      fill(255)
      noStroke()
      rect(this.x, this.y, this.width, this.height)
      triangle(this.x,this.y,this.x+10,this.y-20,this.x+20,this.y)
      fill(150, 200, 255)
      circle(this.x+10,this.y+10, 10)
      fill('red')
      quad(this.x, this.y+20, this.x, this.y+40, this.x-10, this.y+50, this.x-10, this.y+30)
      quad(this.x+20, this.y+20, this.x+20, this.y+40, this.x+30, this.y+50, this.x+30, this.y+30)
    
    
     }
    move(){
      if(keyIsDown(LEFT_ARROW)){
          this.x -= this.speed
        }
      if(keyIsDown(UP_ARROW)){
          this.y -= this.speed
        }
      if(keyIsDown(RIGHT_ARROW)){
          this.x += this.speed
        }
      if(keyIsDown(DOWN_ARROW)){
          this.y += this.speed
        }
    
      if(this.x > width - this.width - 11) {
          this.x = width - this.width - 11; 
      }
      if(this.x < 0 + this.width/2) {
          this.x = 0 + this.width/2 ;
      }
      if(this.y > height - this.height - 10) {
          this.y = height - this.height - 10; 
      }
      if(this.y < 0 + this.height/2) {
          this.y = 0 + this.height/2;
      }
    }
     
  }

