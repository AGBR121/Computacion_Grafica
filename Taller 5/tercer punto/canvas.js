const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function etiqueta(texto, x, y) {
    ctx.fillStyle = '#444';
    ctx.font = '14px Georgia';
    ctx.textAlign = 'center';
    ctx.fillText(texto, x, y);
}

ctx.beginPath();
ctx.moveTo(100, 60);
ctx.lineTo(40,  170);
ctx.lineTo(160, 170);
ctx.closePath();
ctx.fillStyle = 'rgba(46, 139, 87, 0.15)';
ctx.fill();
ctx.strokeStyle = '#2e8b57';
ctx.lineWidth = 2.5;
ctx.stroke();

ctx.beginPath();
ctx.rect(230, 80, 160, 90);
ctx.fillStyle = 'rgba(30, 100, 200, 0.12)';
ctx.fill();
ctx.strokeStyle = '#1a64c8';
ctx.lineWidth = 2.5;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(440, 80);   
ctx.lineTo(570, 80);   
ctx.lineTo(590, 170); 
ctx.lineTo(420, 170);  
ctx.closePath();
ctx.fillStyle = 'rgba(180, 60, 160, 0.12)';
ctx.fill();
ctx.strokeStyle = '#b43ca0';
ctx.lineWidth = 2.5;
ctx.stroke();

const hx = 690, hy = 125, hr = 60;
ctx.beginPath();
for (let i = 0; i < 6; i++) {
    const angulo = (Math.PI / 3) * i - Math.PI / 6;
    const x = hx + hr * Math.cos(angulo);
    const y = hy + hr * Math.sin(angulo);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
}
ctx.closePath();
ctx.fillStyle = 'rgba(200, 130, 20, 0.13)';
ctx.fill();
ctx.strokeStyle = '#c87a10';
ctx.lineWidth = 2.5;
ctx.stroke();