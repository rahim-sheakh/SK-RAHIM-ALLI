/**
 * Futuristic 3D Cyber Cursor & Trail Effects
 * Sk Rahim Alli Portfolio
 */

(function () {
  // Check if touch device
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Create cursor DOM elements if not already present
  let cursorDot = document.querySelector('.cursor-dot');
  let cursorRing = document.querySelector('.cursor-ring');
  let cursorCanvas = document.querySelector('.cursor-canvas');

  if (!cursorDot) {
    cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
  }

  if (!cursorRing) {
    cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    cursorRing.innerHTML = '<span class="cursor-text"></span>';
    document.body.appendChild(cursorRing);
  }

  if (!cursorCanvas) {
    cursorCanvas = document.createElement('canvas');
    cursorCanvas.className = 'cursor-canvas';
    document.body.appendChild(cursorCanvas);
  }

  const cursorText = cursorRing.querySelector('.cursor-text');
  const ctx = cursorCanvas.getContext('2d');

  // Mouse coords
  let mouse = { x: -100, y: -100 };
  let ring = { x: -100, y: -100, targetX: -100, targetY: -100, scale: 1, text: '' };
  let isHovered = false;
  let isDown = false;

  // Particle trail system
  const particles = [];
  const maxParticles = 35;

  function resizeCanvas() {
    cursorCanvas.width = window.innerWidth;
    cursorCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    cursorDot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

    // Spawn trail particles when cursor moves
    if (Math.random() < 0.6) {
      particles.push({
        x: mouse.x,
        y: mouse.y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2.8 + 1,
        life: 1.0,
        decay: Math.random() * 0.03 + 0.02,
        color: Math.random() > 0.4 ? 'rgba(0, 240, 255,' : 'rgba(168, 85, 247,'
      });
      if (particles.length > maxParticles) particles.shift();
    }
  }, { passive: true });

  window.addEventListener('mousedown', () => {
    isDown = true;
    cursorRing.classList.add('active');

    // Click wave
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      particles.push({
        x: mouse.x,
        y: mouse.y,
        vx: Math.cos(angle) * 3,
        vy: Math.sin(angle) * 3,
        size: 3.5,
        life: 1.0,
        decay: 0.04,
        color: 'rgba(0, 255, 200,'
      });
    }
  });

  window.addEventListener('mouseup', () => {
    isDown = false;
    cursorRing.classList.remove('active');
  });

  // Magnetic hover and context hover detection
  function attachHoverListeners() {
    const interactives = document.querySelectorAll(
      'a, button, .interactive, .chip, .card-tilt, .stat-card, input, textarea, .nav-link'
    );

    interactives.forEach((el) => {
      el.addEventListener('mouseenter', (e) => {
        isHovered = true;
        cursorRing.classList.add('hovered');

        const customCursor = el.getAttribute('data-cursor');
        if (customCursor) {
          cursorText.textContent = customCursor;
          cursorRing.classList.add('has-text');
        } else if (el.tagName === 'A' || el.tagName === 'BUTTON') {
          cursorText.textContent = '';
          cursorRing.classList.remove('has-text');
        }

        // Magnetic effect if element has .magnetic class
        if (el.classList.contains('magnetic')) {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          ring.targetX = centerX;
          ring.targetY = centerY;
        }
      });

      el.addEventListener('mouseleave', () => {
        isHovered = false;
        cursorRing.classList.remove('hovered');
        cursorRing.classList.remove('has-text');
        cursorText.textContent = '';
      });
    });
  }

  // Animation render loop
  function render() {
    // Lerp outer ring towards mouse with smooth damping
    const ease = isHovered ? 0.22 : 0.16;
    ring.x += (mouse.x - ring.x) * ease;
    ring.y += (mouse.y - ring.y) * ease;

    cursorRing.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;

    // Draw particle sparks on canvas
    ctx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color} ${p.life})`;
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  render();

  // Attach hover listeners after DOM loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachHoverListeners);
  } else {
    attachHoverListeners();
  }

  // Expose re-bind function for dynamic content
  window.refreshCursorListeners = attachHoverListeners;
})();
