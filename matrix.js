// Matrix Rain Effect
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('matrix-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Caracteres Matrix (mezcla de katakana y números)
  const characters = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ0123456789';
  const chars = characters.split('');
  const fontSize = 18;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + "px 'VT323', monospace";
    ctx.fillStyle = '#00ff00';
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 35);
  window.addEventListener('resize', () => {
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  });
}); 