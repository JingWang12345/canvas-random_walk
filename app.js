const width = document.getElementById('my-canvas').width = screen.availWidth;
const height = document.getElementById('my-canvas').height = screen.availHeight;

const ctx = document.getElementById('my-canvas').getContext('2d');

const arr = Array(Math.ceil(width/10)).fill(0);

const str =
"☇☈ ↼ ↽ ↾ ↿ ⇀ ⇁ ⇂ ⇃ ⇞ ⇟ ⇠ ⇡ ⇢ ⇣ ⇤ ⇥ ⇦ ⇧ ⇨ ⇩ ⇪ ↺ ↻" +
"↑ ↓ ← → ↖ ↗ ↙ ↘ ↔ ↕ ➻ ➼ ➽ ➸ ➳ ➺ ➻ ➴ ➵ ➶ ➷ ➹".split("");

ctx.font = "10px";

function rain() {
    ctx.fillStyle = "rgba(0,0,20,0.05)";
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = '#00c8aa';
    arr.forEach(function(value, index) {
        ctx.fillText(str[Math.floor(Math.random() * str.length)],index * 10, value + 10);

        arr[index] = value >= height || value > 8888 * Math.random() ? 0 : value + 10;
        
    })
}

setInterval(rain, 30);