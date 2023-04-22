
let randomWalkers = [];
let colorPattern = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let useColor = int(random(colorPattern));
  for (let i=0; i<colorPattern; i++) {
    randomWalkers.push(new Walker(useColor));
  }
  background(200);
  noStroke();
}

function draw() {
  for (let i=0; i<randomWalkers.length; i++) {
    randomWalkers[i].draw();
  }
}
class Walker {
    constructor(useColor) {
      this.pos = []; //円の座標
      this.colors = [['#194BA2', '#1C4478', '#F5AC25', '#F1A52B', '#F2F3F6'], ['#2A8C82', '#41BFB3', '#9BF2EA', '#275950', '#260101'], ['#D90479', '#D918B9', '#F5AC25', '#122E40', '#15BFAE'], ['#253B40', '#3F7373', '#F2A950', '#D96725', '#D98C5F']];
      this.useColor = useColor;
      this.angle = 150; //ランダムに向く角度の範囲
      this.diameter = []; //円の大きさ
      this.direction = []; //進む方向
      this.distance = 8; //移動距離
      for (let i = 0; i < this.colors[0].length; i++) {
        this.pos[i] = createVector(width / 2, height / 2);
        this.direction[i] = random(360);
        this.diameter[i] = width/10;
      }
    }
  
    draw() {
      let newPos = createVector(
        random(width / 2 - ((width / 4) * 2), width / 2 + ((width / 4) * 2)),
        random(height / 2 - ((height / 4) * 2), height / 2 + ((height / 4) * 2)));
  
      for (let i = 0; i < this.pos.length; i++) {
        fill(this.colors[this.useColor][i]);
        ellipse(this.pos[i].x, this.pos[i].y, this.diameter[i], this.diameter[i]);
        if (this.diameter[i] > 0) {
          this.pos[i].x += cos(radians(this.direction[i] + random(-this.angle, this.angle))) * this.distance;
          this.pos[i].y += sin(radians(this.direction[i] + random(-this.angle, this.angle))) * this.distance;
          this.diameter[i] -= this.distance * 0.08;
        } else {
          this.pos[i].x = newPos.x;
          this.pos[i].y = newPos.y;
          this.diameter[i] = width/10;
        }
      }
    }
  }
  