const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

    function circulo(x, y, radio, color) {
      ctx.beginPath();
      ctx.arc(x, y, radio, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

const r = 80;
const cx = 150, cy = 150;

circulo(cx - 50, cy - 40, r, '#2e8b57');
    
circulo(cx + 50, cy - 40, r, '#5b4fcf');

circulo(cx, cy + 50, r, '#c0397a');