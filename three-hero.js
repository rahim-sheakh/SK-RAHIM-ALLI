/**
 * Ultra-Modern 3D Interactive Cyber Universe & Hero Core
 * Powered by Three.js
 * Sk Rahim Alli Portfolio
 */

(function () {
  'use strict';

  function initThreeUniverse() {
    // Prefer global fixed container if present, otherwise fall back to hero container
    const container = document.getElementById('three-universe-container') || document.getElementById('three-hero-container');
    if (!container) return;

    if (typeof THREE === 'undefined') {
      setTimeout(initThreeUniverse, 100);
      return;
    }

    // Measure viewport
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, width / height, 0.1, 1000);
    camera.position.set(0, 0, 22);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // -------------------------------------------------------------
    // 1. Central Cyber Reactor Core (Prominent in Hero)
    // -------------------------------------------------------------
    const coreGroup = new THREE.Group();
    // Offset core to frame the right-hand hero podium on desktop
    coreGroup.position.set(window.innerWidth > 992 ? 4.2 : 0, 0, 0);
    scene.add(coreGroup);

    // Outer Geodesic Icosahedron Wireframe
    const icoGeo = new THREE.IcosahedronGeometry(5.8, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
      roughness: 0.15,
      metalness: 0.9,
      emissive: 0x003355,
      emissiveIntensity: 0.6
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    coreGroup.add(icoMesh);

    // Dynamic Torus Knot (Metallic Purple & Cyan Specular)
    const knotGeo = new THREE.TorusKnotGeometry(3.2, 0.75, 128, 32, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x8a2be2,
      roughness: 0.18,
      metalness: 0.92,
      emissive: 0x3b0764,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.9
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    coreGroup.add(knotMesh);

    // Core Plasma Nucleus
    const sphereGeo = new THREE.SphereGeometry(1.6, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.9
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    coreGroup.add(sphereMesh);

    // Concentric Gimbal Energy Rings
    const ringGeo1 = new THREE.TorusGeometry(7.8, 0.08, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.55
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(9.6, 0.06, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.5
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(11.2, 0.05, 16, 120);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = Math.PI / 6;
    coreGroup.add(ring3);

    // -------------------------------------------------------------
    // 2. Floating 3D Geometric Tech Polyhedra (Orbiting Core)
    // -------------------------------------------------------------
    const techOrbitGroup = new THREE.Group();
    coreGroup.add(techOrbitGroup);

    const techShapes = [];
    const techPalettes = [0x00f0ff, 0xa855f7, 0x3b82f6, 0x00ff88, 0xf59e0b];
    const techGeos = [
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.TetrahedronGeometry(0.8, 0),
      new THREE.DodecahedronGeometry(0.65, 0),
      new THREE.BoxGeometry(0.9, 0.9, 0.9),
      new THREE.IcosahedronGeometry(0.6, 0)
    ];

    for (let i = 0; i < 6; i++) {
      const g = techGeos[i % techGeos.length];
      const m = new THREE.MeshStandardMaterial({
        color: techPalettes[i % techPalettes.length],
        wireframe: i % 2 === 0,
        roughness: 0.2,
        metalness: 0.85,
        emissive: techPalettes[i % techPalettes.length],
        emissiveIntensity: 0.4
      });
      const mesh = new THREE.Mesh(g, m);
      const angle = (i / 6) * Math.PI * 2;
      const radius = 9.2 + (i % 2) * 2.2;
      mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.45, Math.sin(angle * 2) * 2.5);
      mesh.userData = {
        baseRadius: radius,
        baseAngle: angle,
        speed: 0.45 + (i % 3) * 0.2,
        rotSpeedX: 0.02 + Math.random() * 0.02,
        rotSpeedY: 0.03 + Math.random() * 0.02
      };
      techOrbitGroup.add(mesh);
      techShapes.push(mesh);
    }

    // -------------------------------------------------------------
    // 3. Multi-Zone Cosmic Particle Highway (All Sections)
    // -------------------------------------------------------------
    const particleCount = 1800;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x00f0ff), // Electric Cyan
      new THREE.Color(0xa855f7), // Cosmic Purple
      new THREE.Color(0x38bdf8), // Sky Blue
      new THREE.Color(0x00ff88), // Emerald Matrix
      new THREE.Color(0xffffff)  // Crystalline White
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spread across deep 3D space
      positions[i3] = (Math.random() - 0.5) * 80;
      positions[i3 + 1] = (Math.random() - 0.5) * 120;
      positions[i3 + 2] = (Math.random() - 0.5) * 60 - 5;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // High-resolution circular soft glow texture
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(0,240,255,0.85)');
      grad.addColorStop(0.7, 'rgba(168,85,247,0.3)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      map: createCircleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // -------------------------------------------------------------
    // 4. Subtle 3D Cyber Grid Plane (Perspective Floor)
    // -------------------------------------------------------------
    const gridHelper = new THREE.GridHelper(90, 45, 0x00f0ff, 0x1e293b);
    gridHelper.position.y = -22;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.22;
    scene.add(gridHelper);

    // -------------------------------------------------------------
    // 5. Dynamic Lighting System
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x0a1026, 2.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight.position.set(10, 20, 15);
    scene.add(dirLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 4.5, 70);
    cyanLight.position.set(15, 12, 14);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4.5, 70);
    purpleLight.position.set(-15, -12, 12);
    scene.add(purpleLight);

    const coreLight = new THREE.PointLight(0x00ffff, 3.5, 25);
    coreLight.position.set(0, 0, 0);
    coreGroup.add(coreLight);

    // -------------------------------------------------------------
    // 6. Interactive Mouse & Scroll Tracking
    // -------------------------------------------------------------
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let shockwave = 0;

    window.addEventListener('mousemove', (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    window.addEventListener('scroll', () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetScrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    }, { passive: true });

    // Interactive Shockwave on Hero or Canvas Click
    window.addEventListener('pointerdown', (e) => {
      if (e.target.closest('#three-universe-container') || e.target.closest('#three-hero-container') || e.target.closest('.hero-section')) {
        shockwave = 1.0;
        coreLight.intensity = 10;
        if (typeof window.playCyberSound === 'function') {
          window.playCyberSound('click');
        }
      }
    });

    // Auto-adjust scale & positioning for Mobile, Tablet, and Laptop
    let baseScale = 1.0;
    const updateResponsiveLayout = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (width < 600) {
        // Mobile Phones: Deep cosmic backdrop
        baseScale = 0.44;
        coreGroup.position.set(0, 0, -5.5);
        camera.position.z = 24;
      } else if (width <= 1024) {
        // Tablets & Small Laptops
        baseScale = 0.68;
        coreGroup.position.set(0, 0, -3.0);
        camera.position.z = 23;
      } else {
        // Laptops & Desktop
        baseScale = 1.0;
        coreGroup.position.set(4.2, 0, 0);
        camera.position.z = 22;
      }
    };

    updateResponsiveLayout();
    window.addEventListener('resize', updateResponsiveLayout);

    // -------------------------------------------------------------
    // 7. Animation Loop with Multi-Section 3D Travel
    // -------------------------------------------------------------
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth scroll progress lerp
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.08;

      // 3D Camera Travel based on Scroll
      // Travels smoothly through space as user explores sections
      camera.position.x = mouse.x * 2.8 + Math.sin(scrollProgress * Math.PI * 2) * 2.5;
      camera.position.y = mouse.y * 2.5 - scrollProgress * 18;
      const baseCamZ = width < 600 ? 24 : (width <= 1024 ? 23 : 22);
      camera.position.z = baseCamZ - Math.sin(scrollProgress * Math.PI) * 4;

      // Core rotation & responsiveness
      coreGroup.rotation.x = elapsed * 0.22 + mouse.y * 0.3;
      coreGroup.rotation.y = elapsed * 0.26 + mouse.x * 0.45;
      knotMesh.rotation.x = elapsed * 0.35;
      knotMesh.rotation.z = elapsed * 0.28;

      ring1.rotation.z = elapsed * 0.16;
      ring2.rotation.x = -elapsed * 0.18;
      ring3.rotation.y = elapsed * 0.14;

      // Floating tech polyhedra orbit
      techShapes.forEach((shape) => {
        const u = shape.userData;
        const currentAngle = u.baseAngle + elapsed * u.speed;
        shape.position.x = Math.cos(currentAngle) * u.baseRadius;
        shape.position.y = Math.sin(currentAngle) * (u.baseRadius * 0.45);
        shape.position.z = Math.sin(currentAngle * 2) * 2.5;
        shape.rotation.x += u.rotSpeedX;
        shape.rotation.y += u.rotSpeedY;
      });

      // Core subtle breathing with responsive baseScale
      const breathe = (1 + Math.sin(elapsed * 2.2) * 0.04) * baseScale;
      coreGroup.scale.set(breathe, breathe, breathe);

      // Core position dynamic fade when scrolling past hero
      // Slips gently back and fades so sections beneath are not obstructed
      const heroOpacity = Math.max(0, 1 - scrollProgress * 3.5);
      icoMat.opacity = 0.65 * heroOpacity;
      knotMat.opacity = 0.9 * heroOpacity;
      sphereMat.opacity = 0.9 * heroOpacity;
      ringMat1.opacity = 0.55 * heroOpacity;
      ringMat2.opacity = 0.5 * heroOpacity;
      ringMat3.opacity = 0.35 * heroOpacity;

      techShapes.forEach((shape) => {
        if (shape.material) {
          shape.material.transparent = true;
          shape.material.opacity = 0.75 * heroOpacity;
        }
      });

      // Shockwave dissipation
      if (shockwave > 0) {
        shockwave -= delta * 1.6;
        if (shockwave < 0) shockwave = 0;
        const kick = 1 + shockwave * 0.3;
        coreGroup.scale.multiplyScalar(kick);
        coreLight.intensity = 3.5 + shockwave * 7;
      }

      // Rotate cosmic starfield slowly with subtle mouse influence
      particleSystem.rotation.y = elapsed * 0.02 + mouse.x * 0.06;
      particleSystem.rotation.x = elapsed * 0.015 + mouse.y * 0.04;

      // Oscillate cyber grid plane
      gridHelper.position.z = (elapsed * 2) % 2;

      // Dynamic light movements
      cyanLight.position.x = Math.sin(elapsed * 0.8) * 18;
      cyanLight.position.y = Math.cos(elapsed * 0.6) * 16 - scrollProgress * 12;
      purpleLight.position.x = -Math.cos(elapsed * 0.7) * 18;
      purpleLight.position.y = -Math.sin(elapsed * 0.9) * 16 - scrollProgress * 12;

      camera.lookAt(0, -scrollProgress * 14, 0);

      renderer.render(scene, camera);
    }

    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeUniverse);
  } else {
    initThreeUniverse();
  }
})();
