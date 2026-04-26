const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); 

const px = 160;
const py = 20;

//Partes de un cubo en forma isométrica
const rombosuperior = [
    {x: 0, y: 0},
    {x: 30, y: 15}, 
    {x: 60, y: 0},
    {x: 30, y: -15} 
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

                //Dibujar el cubo
                dibujarRombo(rombosuperior, x, y);
                dibujarRombo(romboderecho, x, y);
                dibujarRombo(romboizquierdo, x, y);
            }
        }
    }
}



//dibujarcuadricula(600, 0); //Dibujar la cuadricula completa

//Funcion para convertir coordenadas 3D a 2D isometricas
function iso(x, y, z){
    return {
        x: px - (y * 30) + (x * 30),
        y: py + (y * 15) + (x * 15) + (z * 30)
    };
}

//Funcion para dibujar una cara de la figura, recibe un array de puntos, el color de relleno y la posicion en x e y
function cara(puntos, fillcolor, posx, posy){
    ctx.beginPath();
    ctx.moveTo(puntos[0].x + posx, puntos[0].y + posy);
    for(let i = 1; i < puntos.length; i++){
        ctx.lineTo(puntos[i].x + posx, puntos[i].y + posy);
    }
    ctx.closePath();
    ctx.fillStyle = fillcolor;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


//FIGURA 1
//Cara superior
cara([
    iso(0,0,0),
    iso(2,0,0),
    iso(2,3,0),
    iso(0,3,0)
], 'gray',0,0);

//piso
//inferior izquierda
cara([
    iso(0,3,3),
    iso(0,3,4),
    iso(4,3,4),
    iso(4,3,3)
], 'gray',0,0)
//inferior derecha
cara([
    iso(4,3,3),
    iso(4,3,4),
    iso(4,0,4),
    iso(4,0,3)
], 'gray',0,0)

//Lateral derecha
cara([
    iso(4,2,-1),
    iso(4,0,3),
    iso(4,3,3),
    iso(3,4,0)
], 'gray',0,0)

//superiorderecha
cara([
    iso(4,2,-1),
    iso(2,0,0),
    iso(2,3,0),
    iso(2,3,1)
], 'gray',0,0)

//Lateral izquierda
cara([
    iso(0,3,0),
    iso(0,3,3),
    iso(4,3,3),
    iso(4,3,3),
    iso(3,4,0),
    iso(3,4,-1)
], 'gray',0,0);

//FIGURA 2
//Cara izquierda inferior
cara([
    iso(0,4,4),
    iso(0,4,6),
    iso(2,4,6),
    iso(2,4,4)
], 'blue', 300, 0);

//Piso inferior izquierda
cara([
    iso(0,4,4),
    iso(2,4,4),
    iso(2,2.5,4),
    iso(0,2.5,4)
], 'blue', 300, 0);

//Cara izquierda central
cara([
    iso(2,2.5,4),
    iso(0,2.5,4),
    iso(0,2.5,3),
    iso(2,2.5,3)
], 'blue', 300, 0);

//Piso central
cara([
    iso(0,2.5,3),
    iso(2,2.5,3),
    iso(2,1.5,3),
    iso(0,1.5,3)
], 'blue', 300, 0);

//Cara izquierda superior
cara([
    iso(0,1.5,3),
    iso(2,1.5,3),
    iso(2,1.5,2),
    iso(0,1.5,2)
], 'blue', 300, 0);

//Piso superior
cara([
    iso(2,1.5,2),
    iso(0,1.5,2),
    iso(0,0,2),
    iso(2,0,2)
], 'blue', 300, 0);

//cara lateral derecha completa
cara([
    iso(2,0,2),
    iso(2,0,6),
    iso(2,4,6),
    iso(2,4,4),
    iso(2,2.5,4),
    iso(2,2.5,3),
    iso(2,1.5,3),
    iso(2,1.5,2)
], 'blue', 300, 0);

//FIGURA 3
//Cara izquierda
cara([
    iso(0.2,2.2,0),
    iso(0.2,2.2,4.8),
    iso(3.8,2.2,4.8),
    iso(3.8,2.2,1.8),
    iso(1.2,2.2,1.8),
    iso(1.2,2.2,0)
], 'green',600,0);

//Cara superior
cara([
    iso(1.2,2.2,0),
    iso(1.2,1.3,0),
    iso(2.2,1.3,0),
    iso(2.2,-0.5,0),
    iso(0.2,-0.5,0),
    iso(0.2,2.2,0)
], 'green',600,0);

//Cara izquierda pequeña superior
cara([
    iso(1.2,2.2,1.8),
    iso(1.2,2.2,0),
    iso(1.2,1.3,0),
    iso(1.2,1.3,1.8),
], 'green',600,0);

//Cara derecha pequeña superior
cara([
    iso(1.2,1.3,0),
    iso(2.2,1.3,0),
    iso(2.2,1.3,1.8),
    iso(1.2,1.3,1.8)
], 'green',600,0);

//Cara derecha grande central
cara([
    iso(3.8,2.2,1.8),
    iso(1.2,2.2,1.8),
    iso(1.2,1.3,1.8),
    iso(2.2,1.3,1.8),
    iso(2.2,-0.5,1.8),
    iso(5.7,-0.5,1.8)
], 'green',600,0)

//Cara entre la superior y la central
cara([
    iso(2.2,1.3,0),
    iso(2.2,-0.5,0),
    iso(2.2,-0.5,1.8),
    iso(2.2,1.3,1.8)
], 'green',600,0)

//Cara entre la derecha grande central y la cara inferior
cara([
    iso(5.7,-0.5,1.8),
    iso(5.7,-0.5,3),
    iso(3.8,2.2,3.3),
    iso(3.8,2.2,1.8)
], 'green',600,0)

//Cara inferior
cara([
    iso(4.8,0,3.4),
    iso(3.8,2.2,3.3),
    iso(3.8,2.2,4.8),
    iso(4.8,0,3.7)
], 'green',600,0)

//FIGURA 4

//Cara superior izquierda
cara([
    iso(0,0,0),
    iso(1.2, 0,0),
    iso(1.2, 1.3,0),
    iso(0,1.3,0)
], 'red', 600, 250);

//Cara superior derecha
cara([
    iso(2,0,0),
    iso(3,0,0),
    iso(3,1.5,0),
    iso(2,1.5,0)
], 'red', 600, 250);

//Trapecio central
cara([
    iso(1.2,0,0),
    iso(1.2,0,0.8),
    iso(2,1.5,0),
    iso(1.8,2.8,0),
    iso(1.2,1.3,0)
], 'red', 600, 250);

//triangulo central
cara([
    iso(1.2,0.6,0.8),
    iso(1.2,1.4,1.5),
    iso(1.8,2.8,0)
], 'red', 600, 250);

//Cara izquierda
cara([
    iso(0,1.3,0),
    iso(0,3.92,2),
    iso(3,4,2),
    iso(3,1.5,0),
    iso(2,1.5,0),
    iso(1.2,1.4,1.5),
    iso(1.8,2.8,0),
    iso(1.2, 1.3,0)
], 'red', 600, 250);

//Cara derecha
cara([
    iso(3,4,2),
    iso(3.1,4,2),
    iso(3.2,0,2),
    iso(3,0,0),
    iso(3,1.5,0)
], 'red', 600, 250);
