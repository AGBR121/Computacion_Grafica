    (function() {
      const ctx = document.getElementById('c1').getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 240, 0);
      grad.addColorStop(0,   '#e74c3c');
      grad.addColorStop(0.5, '#f39c12');
      grad.addColorStop(1,   '#2ecc71');
      ctx.fillStyle = grad;
      ctx.fillRect(10, 20, 220, 80);
    })();

    (function() {
      const ctx = document.getElementById('c2').getContext('2d');
      const grad = ctx.createRadialGradient(120, 60, 5, 120, 60, 70);
      grad.addColorStop(0,   '#fff176');
      grad.addColorStop(0.5, '#ff8f00');
      grad.addColorStop(1,   'rgba(255,80,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(120, 60, 70, 0, Math.PI * 2);
      ctx.fill();
    })();
    
    (function() {
      const ctx = document.getElementById('c3').getContext('2d');
      ctx.shadowColor = '#3498db';
      ctx.shadowBlur = 20;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
      ctx.fillStyle = '#2980b9';
      ctx.fillRect(50, 25, 140, 70);
    })();

    (function() {
      const ctx = document.getElementById('c4').getContext('2d');
      ctx.font = 'bold 32px Georgia';
      ctx.fillStyle = '#8e44ad';
      ctx.fillText('Canvas', 30, 55);
      ctx.strokeStyle = '#e74c3c';
      ctx.lineWidth = 1.5;
      ctx.strokeText('Canvas', 30, 95);
    })();

    (function() {
      const ctx = document.getElementById('c5').getContext('2d');
      const colores = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6'];
      colores.forEach((color, i) => {
        ctx.save();
        ctx.translate(120, 60);
        ctx.rotate((i * Math.PI * 2) / colores.length);
        ctx.fillStyle = color;
        ctx.fillRect(10, -8, 60, 16);
        ctx.restore();
      });
    })();

    (function() {
      const ctx = document.getElementById('c6').getContext('2d');
      ctx.beginPath();
      ctx.moveTo(20, 100);
      ctx.quadraticCurveTo(120, -20, 220, 100);
      ctx.strokeStyle = '#e74c3c';
      ctx.lineWidth = 3;
      ctx.stroke();
      // Punto de control
      ctx.beginPath();
      ctx.arc(120, -20, 5, 0, Math.PI*2);
      ctx.fillStyle = '#aaa';
      ctx.fill();
      ctx.fillStyle = '#888';
      ctx.font = '12px Georgia';
      ctx.fillText('punto control', 90, -26);
    })();

    (function() {
      const ctx = document.getElementById('c7').getContext('2d');
      ctx.beginPath();
      ctx.moveTo(20, 100);
      ctx.bezierCurveTo(60, 10, 180, 10, 220, 100);
      ctx.strokeStyle = '#2980b9';
      ctx.lineWidth = 3;
      ctx.stroke();
      [[60,10],[180,10]].forEach(([x,y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI*2);
        ctx.fillStyle = '#aaa';
        ctx.fill();
      });
    })();

    (function() {
      const ctx = document.getElementById('c8').getContext('2d');
      const colores = ['#e74c3c','#3498db','#2ecc71','#f39c12'];
      colores.forEach((color, i) => {
        ctx.globalAlpha = 0.25 + i * 0.2;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(60 + i * 40, 60, 40, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1; 
    })();