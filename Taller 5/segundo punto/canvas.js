const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); 

const angulo = 30 * (Math.PI / 180);
const longitud = 300;

const cx = canvas.width / 2;
const cy = canvas.height / 2 - 150;

const x1 = cx + longitud * Math.cos(angulo);
const y1 = cy;
const x2 = cx;
const y2 = cy - longitud * Math.sin(angulo);
const x3 = cx - longitud * Math.cos(angulo);
const y3 = cy;
const x4 = cx;
const y4 = cy + longitud * Math.sin(angulo);

ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.lineTo(x4, y4);
ctx.closePath();
ctx.stroke();

const offset = 20 / Math.sin(angulo); 
const longitud2 = longitud - offset;

const ix1 = cx + longitud2 * Math.cos(angulo);
const iy1 = cy;
const ix2 = cx;
const iy2 = cy - longitud2 * Math.sin(angulo);
const ix3 = cx - longitud2 * Math.cos(angulo);
const iy3 = cy;
const ix4 = cx;
const iy4 = cy + longitud2 * Math.sin(angulo);

ctx.beginPath();
ctx.moveTo(ix1, iy1);
ctx.lineTo(ix2, iy2);
ctx.lineTo(ix3, iy3);
ctx.lineTo(ix4, iy4);
ctx.closePath();
ctx.stroke();


const largo = iy4-iy2-30;
ctx.beginPath();
ctx.moveTo(ix4, iy2);
ctx.lineTo(ix4, iy2+largo+30);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x1,y1+largo);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x3, y1);
ctx.lineTo(x3,y1+largo);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x2, y4);
ctx.lineTo(x2, y4+largo);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x3, y4 + largo);
ctx.lineTo(x1, y4 + largo);
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;

ctx.beginPath();
ctx.moveTo(x3, y1 + largo);   
ctx.lineTo(x2, y4 + largo);  
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x1, y1 + largo);   
ctx.lineTo(x2, y4 + largo);  
ctx.stroke();