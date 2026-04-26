 const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
 
    const datos = [40, 120, 60, 90, 50, 130, 80, 200, 300, 150]; 
 
    //Margenes y dimensiones del gráfico
    const margenIzq  = 25;
    const margenDer  = 30;
    const margenSup  = 30;
    const margenInf  = 25;
 
    const anchoGrafico = canvas.width  - margenIzq - margenDer;
    const altoGrafico  = canvas.height - margenSup - margenInf;
 
    const maxValor = Math.max(...datos);
    const minValor = 0;
 
    // Funciones para convertir valores a coordenadas del canvas
    function valorAY(valor) {
      return margenSup + altoGrafico - ((valor - minValor) / (maxValor - minValor)) * altoGrafico;
    }
 
    function indiceAX(i) {
      return margenIzq + (i / (datos.length - 1)) * anchoGrafico;
    }
 
    // Dibujar ejes
    ctx.beginPath();
    ctx.moveTo(margenIzq, margenSup);               // tope del eje Y
    ctx.lineTo(margenIzq, margenSup + altoGrafico); // base eje Y
    ctx.lineTo(margenIzq + anchoGrafico, margenSup + altoGrafico); // eje X
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1.5;
    ctx.stroke();
 
    // Dibujar líneas del gráfico
    ctx.beginPath();
    ctx.moveTo(indiceAX(0), valorAY(datos[0]));
    for (let i = 1; i < datos.length; i++) {
      ctx.lineTo(indiceAX(i), valorAY(datos[i]));
    }
    ctx.strokeStyle = '#0070f0';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.stroke();