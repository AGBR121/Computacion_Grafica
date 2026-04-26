const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); 

const px = 160;
const py = 20;

const rombosuperior = [
    {x: 0, y: 0},
    {x: 30, y: 15},  // Punto derecho más extendido
    {x: 60, y: 0},
    {x: 30, y: -15}  // Punto izquierdo más extendido
]

const romboderecho= [
    {x: 30, y: 15},
    {x: 30, y: 45},
    {x: 60, y: 30},
    {x: 60, y: 0}
]

const romboizquierdo = [
    {x: 0, y: 0},
    {x: 30, y: 15},
    {x: 30, y: 45},
    {x: 0, y: 30}
]

function dibujarRombo(rombo, px, py) {
    ctx.beginPath();
    ctx.moveTo(px + rombo[0].x, py + rombo[0].y);
    for (let i = 1; i < rombo.length; i++) {
        ctx.lineTo(px + rombo[i].x, py + rombo[i].y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'gray';
    ctx.stroke();
}

function dibujarcuadricula(posx, posy) {
    const filas = 5;
    const columnas = 5;
    const niveles = 6;

    for (let n = 0; n < niveles; n++) {     
        for (let f = 0; f < filas; f++) {
            for (let c = 0; c < columnas; c++) {

                let x = px - (c * 30) + (f * 30) + posx;
                let y = py + (c * 15) + (f * 15) + (n * 30) + posy; 

                dibujarRombo(rombosuperior, x, y);
                dibujarRombo(romboderecho, x, y);
                dibujarRombo(romboizquierdo, x, y);
            }
        }
    }
}



dibujarcuadricula(300, 0);

function iso(x, y, z){
    return {
        x: px - (y * 30) + (x * 30),
        y: py + (y * 15) + (x * 15) + (z * 30)
    };
}


function cara(puntos, fillcolor){
    ctx.beginPath();
    ctx.moveTo(puntos[0].x, puntos[0].y);
    for(let i = 1; i < puntos.length; i++){
        ctx.lineTo(puntos[i].x, puntos[i].y);
    }
    ctx.closePath();
    ctx.fillStyle = fillcolor;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


//FIGURA 1
cara([
    iso(0,0,0),
    iso(2,0,0),
    iso(2,3,0),
    iso(0,3,0)
], 'gray');

//linea izquierda
cara([
    iso(0,3,0),
    iso(0,3,4)
], 'gray');

//piso
cara([
    iso(0,3,3),
    iso(0,3,4),
    iso(4,3,4),
    iso(4,3,3)
], 'gray')

cara([
    iso(4,3,3),
    iso(4,3,4),
    iso(4,0,4),
    iso(4,0,3)
], 'gray')

//superiorderecha

cara([
    iso(4,2,-1),
    iso(4,0,3),
    iso(4,3,3),
    iso(3,4,0)
], 'gray')

cara([
    iso(4,2,-1),
    iso(2,0,0),
    iso(2,3,0),
    iso(2,3,1)
], 'gray')

cara([
    iso(0,3,0),
    iso(0,3,4),
    iso(4,3,4),
    iso(4,3,3),
    iso(3,4,0),
    iso(3,4,-1)
], 'gray');

//FIGURA 2
