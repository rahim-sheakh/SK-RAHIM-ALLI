/**
 * Main Application Logic
 * Sk Rahim Alli - 3D Animated Portfolio
 */

(function () {
  'use strict';

  // Portfolio Data Object
  const P = {
    name: "Sk Rahim Alli",
    roles: ["Full Stack Developer", "AI Engineer", "Problem Solver"],
    availability: "Available to work",
    badge: "Full-stack Developer",
    logo: "logo.png",
    photo: "hero.png",
    location: "Bhubaneswar, India",
    timezone: "Asia/Kolkata",
    email: "skrahimalli08@gmail.com",
    phone: "+917606049822",
    summary: "Full Stack Developer and AI Engineer who builds scalable web apps and practical machine learning tools. Open to internships, freelance projects and collaborations.",
    socials: {
      linkedin: "https://www.linkedin.com/in/skrahimalli",
      github: "https://github.com/rahim-sheakh",
      whatsapp: "https://wa.me/+917606049822"
    },
    stats: [
      { value: 5, suffix: "+", label: "Projects built", icon: "code" },
      { value: 500, suffix: "+", label: "Git commits", icon: "git" },
      { value: 8.0, dec: 1, suffix: "", label: "CGPA (B.Tech)", icon: "award" },
      { value: 3, suffix: "+", label: "Hackathons won", icon: "trophy" }
    ],
    aboutHeading: "Crafting futuristic digital experiences with precision & intelligence",
    about: "I'm a computer science undergraduate passionate about turning innovative ideas into production-ready software. From high-impact hackathons to scalable full-stack applications, I bridge the gap between elegant frontend engineering, robust backend architecture, and modern artificial intelligence. Constantly pushing boundaries with Python, OpenCV, and modern web frameworks.",
    facts: [
      { label: "Achievements", value: "1st place at University Project Exhibition. Multiple Hackathon winner." },
      { label: "Education", value: "B.Tech in Computer Science and Data Science (2026 to 2030)." },
      { label: "Current Focus", value: "Computer Vision (OpenCV), Deep Learning & Scalable Full-Stack Systems." }
    ],
    skills: [
      { cat: "Frontend", name: "HTML5", level: 95 },
      { cat: "Frontend", name: "CSS3", level: 90 },
      { cat: "Frontend", name: "JavaScript (ES6+)", level: 88 },
      { cat: "Frontend", name: "React.js", level: 85 },
      { cat: "Frontend", name: "Next.js", level: 80 },
      { cat: "Frontend", name: "Responsive Design", level: 92 },
      { cat: "Backend", name: "Node.js", level: 85 },
      { cat: "Backend", name: "Express.js", level: 82 },
      { cat: "Backend", name: "MySQL", level: 80 },
      { cat: "Backend", name: "SQL", level: 78 },
      { cat: "Programming", name: "Python", level: 85 },
      { cat: "Programming", name: "Java", level: 75 },
      { cat: "Programming", name: "C", level: 72 },
      { cat: "AI & Data Science", name: "Machine Learning", level: 75 },
      { cat: "AI & Data Science", name: "OpenCV (Computer Vision)", level: 78 },
      { cat: "AI & Data Science", name: "Data Analytics", level: 72 },
      { cat: "Tools & DevOps", name: "Git", level: 88 },
      { cat: "Tools & DevOps", name: "GitHub", level: 90 }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Service Marketplace",
        cat: "Full Stack",
        icon: "SM",
        badge: "Featured System",
        text: "A robust full-stack web platform connecting local service providers with customers. Features multi-role authentication, service catalog, location search, and comprehensive administrative analytics dashboard.",
        features: [
          "Role-based authentication & permissions",
          "Real-time search & service provider matching",
          "Interactive admin dashboard & analytics",
          "Fully responsive & mobile-optimized UI"
        ],
        tags: ["HTML5", "CSS3", "JavaScript", "MySQL", "Node.js"],
        live: "#",
        code: "https://github.com/rahim-sheakh"
      },
      {
        id: "proj-2",
        title: "Face Attendance System",
        cat: "AI / ML",
        icon: "FA",
        badge: "AI Vision",
        text: "Automated biometric attendance platform powered by Computer Vision. Recognizes faces in live camera streams in real-time, logs attendance to secure databases, and includes anti-spoof protection.",
        features: [
          "Real-time face detection & feature matching",
          "Automated instant attendance timestamps",
          "Anti-spoofing logic preventing photo fraud",
          "Intuitive management & reporting UI"
        ],
        tags: ["Python", "OpenCV", "SQLite", "Computer Vision"],
        live: "#",
        code: "https://github.com/rahim-sheakh"
      },
      {
        id: "proj-3",
        title: "Travel Planner",
        cat: "Full Stack",
        icon: "TP",
        badge: "Hackathon Winner",
        text: "Award-winning travel discovery and itinerary scheduling application built for modern tourists. Enables seamless destination exploration, custom daily trip schedules, and booking management.",
        features: [
          "Interactive destination discovery & guide maps",
          "Dynamic day-by-day itinerary planner",
          "Activity reservation & checkout flow",
          "Cross-platform responsive design"
        ],
        tags: ["JavaScript", "HTML5", "CSS3", "SQL", "APIs"],
        live: "#",
        code: "https://github.com/rahim-sheakh"
      }
    ],
    journey: [
      {
        year: "2030",
        kind: "Internship",
        title: "AI & Machine Learning Intern",
        org: "Organisation Name",
        text: "Hands-on immersion in supervised/unsupervised machine learning, deep neural networks, model validation, and deployment of predictive AI microservices."
      },
      {
        year: "2029",
        kind: "Award",
        title: "1st Place, University Project Exhibition",
        org: "University Name",
        text: "Awarded 1st prize among hundreds of competitors for creating an innovative full-stack platform addressing real-world community utility."
      },
      {
        year: "2028",
        kind: "Hackathon",
        title: "Winner, Tourism Tech Hackathon",
        org: "Host Institute",
        text: "Secured 1st place in the tourism technology theme, recognized by jury judges for creative architecture and execution under tight time constraints."
      },
      {
        year: "2027",
        kind: "Internship",
        title: "Advanced C Programming Intern",
        org: "Institute Name",
        text: "Mastered low-level systems programming, complex pointer arithmetic, custom dynamic memory allocators, and core algorithmic data structures."
      },
      {
        year: "2027",
        kind: "Award",
        title: "2nd Place, Inter-College Coding Contest",
        org: "College",
        text: "Runner-up in algorithmic competitive programming covering graph algorithms, dynamic programming, and data structures."
      },
      {
        year: "2026",
        kind: "Education",
        title: "Started B.Tech in Computer Science & Data Science",
        org: "Bhubaneswar Engineering College",
        text: "Embarked on undergraduate studies focusing on Artificial Intelligence, Data Science, Full-Stack Architecture, and Computer Science fundamentals."
      }
    ],
    education: [
      {
        yrs: "2026 — 2030",
        title: "B.Tech in Computer Science & Data Science",
        org: "Bhubaneswar Engineering College, Bhubaneswar",
        text: "Comprehensive engineering curriculum focusing on Machine Learning, Big Data, Data Structures & Algorithms, Operating Systems, Database Management, and Artificial Intelligence.",
        score: "CGPA: 8.0"
      },
      {
        yrs: "2024 — 2026",
        title: "+2 Higher Secondary Science",
        org: "Sabitri Devi Higher Secondary School of Science, Salepur",
        text: "Specialized in Computer Science, Mathematics, and Physics. Developed foundational proficiency in Web Technologies, Java, Database Management, and Network Systems.",
        score: "Score: 81%"
      }
    ],
    certs: [
      {
        year: "2024",
        title: "Full-Stack Web Development",
        issuer: "Professional Certification",
        tags: "React.js, Node.js, Express, MongoDB, REST APIs"
      },
      {
        year: "2024",
        title: "Data Structures & Algorithms in Java",
        issuer: "Professional Certification",
        tags: "Java, Core DSA, Problem Solving, Algorithmic Analysis"
      },
      {
        year: "2024",
        title: "OpenCV Python for Computer Vision",
        issuer: "Professional Certification",
        tags: "OpenCV, Image Processing, Object Tracking, Python"
      },
      {
        year: "2023",
        title: "Responsive Web Design & Modern CSS",
        issuer: "Professional Certification",
        tags: "HTML5, Modern CSS3, Flexbox, CSS Grid, A11y"
      }
    ],
    resume: {
      title: "Full Stack Developer & AI Engineer",
      summary: "Full-stack developer and Computer Science undergraduate specializing in Data Science and AI. Proven record of building high-performance web applications and computer vision systems with multiple hackathon and exhibition wins.",
      languages: "Python, JavaScript (ES6+), Java, C, SQL, HTML5, CSS3",
      tools: "Node.js, React, Express, MySQL, SQLite, MongoDB, Git, GitHub, VS Code, OpenCV",
      concepts: "Full-Stack Development, RESTful APIs, Computer Vision, Machine Learning, Data Analytics, Responsive UI/UX"
    }
  };

  // Expose P to global scope if needed
  window.PORTFOLIO_DATA = P;

  /* -------------------------------------------------------------
     1. Web Audio API Cyber Synthesizer
     ------------------------------------------------------------- */
  let audioCtx = null;
  let soundEnabled = true;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playCyberSound(type) {
    if (!soundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.08);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.12);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'switch') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(880, now + 0.04);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      }
    } catch (e) {
      // Audio fallback silent
    }
  }

  // Audio Toggle Button
  const soundBtn = document.getElementById('soundBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      initAudio();
      soundEnabled = !soundEnabled;
      soundBtn.classList.toggle('muted', !soundEnabled);
      soundBtn.setAttribute('aria-pressed', soundEnabled);
      const label = soundBtn.querySelector('.sound-label');
      if (label) label.textContent = soundEnabled ? 'SFX: ON' : 'SFX: OFF';
      if (soundEnabled) playCyberSound('switch');
    });
  }

  document.addEventListener('pointerdown', initAudio, { once: true });

  /* -------------------------------------------------------------
     2. Smooth Scrolling (Lenis Integration)
     ------------------------------------------------------------- */
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with GSAP ScrollTrigger if present
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  /* -------------------------------------------------------------
     3. Scroll Progress Laser Bar & Percentage Counter
     ------------------------------------------------------------- */
  const scrollLaser = document.getElementById('scrollLaser');
  const scrollPercentText = document.getElementById('scrollPercentText');

  function updateScrollProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / totalHeight)) : 0;
    const percent = Math.round(progress * 100);

    if (scrollLaser) {
      scrollLaser.style.transform = `scaleX(${progress})`;
    }
    if (scrollPercentText) {
      scrollPercentText.textContent = `${percent}%`;
    }
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* -------------------------------------------------------------
     4. Dynamic Role Typing Animation
     ------------------------------------------------------------- */
  const roleTextEl = document.getElementById('roleText');
  if (roleTextEl) {
    const roles = P.roles;
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeLoop() {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        roleTextEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typeSpeed = 45;
      } else {
        roleTextEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typeSpeed = 95;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at full word
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typeSpeed = 450;
      }

      setTimeout(typeLoop, typeSpeed);
    }

    typeLoop();
  }

  /* -------------------------------------------------------------
     5. Advanced 3D Card Tilt with Multi-Plane Parallax Depth
     ------------------------------------------------------------- */
  function init3DTilt() {
    // Only run on non-touch devices with fine pointers to ensure silky smooth scrolling on mobile & tablet
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
      return;
    }
    const tiltElements = document.querySelectorAll('.card-tilt');

    tiltElements.forEach((card) => {
      // Add glare overlay element if missing
      let glare = card.querySelector('.card-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'card-glare';
        card.appendChild(glare);
      }

      card.addEventListener('mouseenter', () => {
        playCyberSound('hover');
      });

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -11;
        const rotateY = ((x - centerX) / centerX) * 11;

        card.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.025, 1.025, 1.025)`;

        // Multi-plane 3D Depth on inner elements
        const popElements = card.querySelectorAll('.stat-number, .stat-icon-wrap, .project-icon-box, .project-badge-bar, .skill-header, .skill-bar-wrap, .timeline-kind-pill, .w-icon-wrap, .capsule-hud-footer');
        popElements.forEach((el) => {
          el.style.transform = 'translateZ(36px)';
          el.style.transition = 'transform 0.1s ease-out';
        });

        // Dynamic 3D Parallax on Orbit Widgets in Hero Stage
        if (card.classList.contains('podium-3d-stage')) {
          const widgets = card.querySelectorAll('.orbit-widget');
          widgets.forEach((w) => {
            const depth = parseFloat(w.getAttribute('data-depth')) || 35;
            const shiftX = ((x - centerX) / centerX) * (depth * 0.4);
            const shiftY = ((y - centerY) / centerY) * (depth * 0.4);
            w.style.transform = `translate3d(${shiftX.toFixed(1)}px, ${shiftY.toFixed(1)}px, ${depth}px)`;
          });
        }

        // Glare specular position
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(0, 240, 255, 0.28), transparent 65%)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
        glare.style.background = 'transparent';

        const popElements = card.querySelectorAll('.stat-number, .stat-icon-wrap, .project-icon-box, .project-badge-bar, .skill-header, .skill-bar-wrap, .timeline-kind-pill, .w-icon-wrap, .capsule-hud-footer');
        popElements.forEach((el) => {
          el.style.transform = 'translateZ(0px)';
        });

        if (card.classList.contains('podium-3d-stage')) {
          const widgets = card.querySelectorAll('.orbit-widget');
          widgets.forEach((w) => {
            const depth = parseFloat(w.getAttribute('data-depth')) || 35;
            w.style.transform = `translateZ(${depth}px)`;
          });
        }
      });
    });
  }

  /* -------------------------------------------------------------
     6. Stats Number Count-Up Animation
     ------------------------------------------------------------- */
  function initStatsCountUp() {
    const statCards = document.querySelectorAll('.stat-number');
    let counted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            counted = true;
            statCards.forEach((el) => {
              const target = parseFloat(el.getAttribute('data-target'));
              const suffix = el.getAttribute('data-suffix') || '';
              const dec = parseInt(el.getAttribute('data-dec') || '0', 10);
              const duration = 1800;
              const start = performance.now();

              function updateNum(now) {
                const elapsed = now - start;
                const progress = Math.min(1, elapsed / duration);
                // Ease out cubic
                const ease = 1 - Math.pow(1 - progress, 3);
                const current = target * ease;

                el.textContent = (dec > 0 ? current.toFixed(dec) : Math.floor(current)) + suffix;

                if (progress < 1) {
                  requestAnimationFrame(updateNum);
                } else {
                  el.textContent = (dec > 0 ? target.toFixed(dec) : target) + suffix;
                }
              }

              requestAnimationFrame(updateNum);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsContainer = document.getElementById('statsContainer');
    if (statsContainer) observer.observe(statsContainer);
  }

  /* -------------------------------------------------------------
     7. Render Skills & Category Filters
     ------------------------------------------------------------- */
  const skillGrid = document.getElementById('skillGrid');
  const skillFilterGroup = document.getElementById('skillChips');

  function renderSkills(filter = 'All') {
    if (!skillGrid) return;

    const filtered = filter === 'All' ? P.skills : P.skills.filter((s) => s.cat === filter);

    skillGrid.innerHTML = filtered
      .map(
        (s) => `
      <div class="skill-card card-tilt" data-cat="${s.cat}">
        <div class="skill-header">
          <div class="skill-name">
            <span class="skill-dot"></span>
            <strong>${s.name}</strong>
          </div>
          <span class="skill-percent">${s.level}%</span>
        </div>
        <div class="skill-bar-wrap">
          <div class="skill-bar-fill" style="width: ${s.level}%;"></div>
        </div>
        <div class="skill-tag">${s.cat}</div>
      </div>
    `
      )
      .join('');

    init3DTilt();
    if (window.refreshCursorListeners) window.refreshCursorListeners();
  }

  function initSkillFilters() {
    if (!skillFilterGroup) return;

    const cats = ['All', 'Frontend', 'Backend', 'Programming', 'AI & Data Science', 'Tools & DevOps'];

    skillFilterGroup.innerHTML = cats
      .map(
        (cat, i) => `
      <button class="chip ${i === 0 ? 'active' : ''}" data-filter="${cat}" type="button">
        ${cat}
      </button>
    `
      )
      .join('');

    skillFilterGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;

      playCyberSound('click');
      skillFilterGroup.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-filter');
      renderSkills(cat);
    });

    renderSkills('All');
  }

  /* -------------------------------------------------------------
     8. Render Projects & Filter Chips
     ------------------------------------------------------------- */
  const projectGrid = document.getElementById('projectGrid');
  const projectChips = document.getElementById('projectChips');

  function renderProjects(filter = 'All') {
    if (!projectGrid) return;

    const filtered = filter === 'All' ? P.projects : P.projects.filter((p) => p.cat === filter);

    projectGrid.innerHTML = filtered
      .map(
        (p) => `
      <article class="project-card card-tilt" data-cat="${p.cat}" data-id="${p.id}">
        <div class="project-badge-bar">
          <span class="project-tag-pill">${p.badge}</span>
          <span class="project-cat-pill">${p.cat}</span>
        </div>
        
        <div class="project-icon-box">
          <span class="p-icon">${p.icon}</span>
        </div>

        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.text}</p>

        <ul class="project-features">
          ${p.features.map((f) => `<li><svg viewBox="0 0 20 20" fill="currentColor" class="feat-check"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>${f}</li>`).join('')}
        </ul>

        <div class="project-tech-tags">
          ${p.tags.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-footer">
          <button class="btn-project-preview" data-open-modal="${p.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Quick View
          </button>
          <a class="btn-project-code" href="${p.code}" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" class="btn-icon"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>
            GitHub
          </a>
        </div>
      </article>
    `
      )
      .join('');

    init3DTilt();
    if (window.refreshCursorListeners) window.refreshCursorListeners();
  }

  function initProjectFilters() {
    if (!projectChips) return;

    const cats = ['All', 'Full Stack', 'AI / ML'];

    projectChips.innerHTML = cats
      .map(
        (cat, i) => `
      <button class="chip ${i === 0 ? 'active' : ''}" data-filter="${cat}" type="button">
        ${cat}
      </button>
    `
      )
      .join('');

    projectChips.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;

      playCyberSound('click');
      projectChips.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });

    renderProjects('All');
  }

  /* -------------------------------------------------------------
     9. Project Modal Details Viewer
     ------------------------------------------------------------- */
  const projectModal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  function openProjectModal(projectId) {
    const proj = P.projects.find((p) => p.id === projectId);
    if (!proj || !projectModal || !modalContent) return;

    playCyberSound('click');

    modalContent.innerHTML = `
      <div class="modal-badge-row">
        <span class="project-tag-pill">${proj.badge}</span>
        <span class="project-cat-pill">${proj.cat}</span>
      </div>
      <h2 class="modal-title">${proj.title}</h2>
      <p class="modal-desc">${proj.text}</p>

      <div class="modal-section-title">Key Architectural Highlights</div>
      <ul class="modal-feature-list">
        ${proj.features.map((f) => `<li><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>${f}</li>`).join('')}
      </ul>

      <div class="modal-section-title">Technologies Used</div>
      <div class="modal-tags">
        ${proj.tags.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a class="btn primary" href="${proj.code}" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>
          View Source Repository
        </a>
      </div>
    `;

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    playCyberSound('click');
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-modal]');
    if (trigger) {
      const pid = trigger.getAttribute('data-open-modal');
      openProjectModal(pid);
    }
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  /* -------------------------------------------------------------
     10. Render Journey Timeline, Education, & Certifications
     ------------------------------------------------------------- */
  const timelineEl = document.getElementById('timelineGrid');
  if (timelineEl) {
    timelineEl.innerHTML = P.journey
      .map(
        (j) => `
      <div class="timeline-item card-tilt">
        <div class="timeline-indicator">
          <span class="timeline-glow-node"></span>
          <div class="timeline-line"></div>
        </div>
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="timeline-year">${j.year}</span>
            <span class="timeline-kind-pill kind-${j.kind.toLowerCase()}">${j.kind}</span>
          </div>
          <h3 class="timeline-title">${j.title}</h3>
          <h4 class="timeline-org">${j.org}</h4>
          <p class="timeline-desc">${j.text}</p>
        </div>
      </div>
    `
      )
      .join('');
  }

  const eduGrid = document.getElementById('eduGrid');
  if (eduGrid) {
    eduGrid.innerHTML = P.education
      .map(
        (e) => `
      <article class="edu-card card-tilt">
        <div class="edu-top">
          <span class="edu-years">${e.yrs}</span>
          <span class="edu-score-pill">${e.score}</span>
        </div>
        <h3 class="edu-title">${e.title}</h3>
        <h4 class="edu-org">${e.org}</h4>
        <p class="edu-desc">${e.text}</p>
      </article>
    `
      )
      .join('');
  }

  const certGrid = document.getElementById('certGrid');
  if (certGrid) {
    certGrid.innerHTML = P.certs
      .map(
        (c) => `
      <article class="cert-card card-tilt">
        <div class="cert-top">
          <span class="cert-year">${c.year}</span>
          <span class="cert-badge">
            <svg viewBox="0 0 20 20" fill="currentColor" class="cert-check-icon"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Verified
          </span>
        </div>
        <h4 class="cert-title">${c.title}</h4>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-tags">${c.tags}</div>
      </article>
    `
      )
      .join('');
  }

  /* -------------------------------------------------------------
     11. Resume Paper Print Handler
     ------------------------------------------------------------- */
  const printBtn = document.getElementById('printResumeBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      playCyberSound('click');
      window.print();
    });
  }

  /* -------------------------------------------------------------
     12. One-Click Copy Clipboard Utilities & Toast
     ------------------------------------------------------------- */
  const toast = document.getElementById('copyToast');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('visible');
    playCyberSound('switch');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }

  document.querySelectorAll('[data-copy]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const val = el.getAttribute('data-copy');
      navigator.clipboard.writeText(val).then(() => {
        showToast(`Copied to clipboard: ${val}`);
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 25,
            spread: 50,
            origin: { y: 0.8 },
            colors: ['#00f0ff', '#a855f7', '#00ff88']
          });
        }
      });
    });
  });

  /* -------------------------------------------------------------
     13. Contact Form Submission Handling
     ------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playCyberSound('click');
      const fd = new FormData(contactForm);
      const name = fd.get('name');
      const email = fd.get('email');
      const message = fd.get('message');

      const subject = `Portfolio Inquiry from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

      if (formStatus) {
        formStatus.textContent = '🚀 Opening your email client to dispatch message...';
        formStatus.classList.add('active');
      }

      window.location.href = `mailto:${P.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#00f0ff', '#3b82f6', '#a855f7']
        });
      }
    });
  }

  /* -------------------------------------------------------------
     14. Live Asia/Kolkata Clock
     ------------------------------------------------------------- */
  const clockEl = document.getElementById('liveClock');
  function updateClock() {
    if (!clockEl) return;
    try {
      const formatter = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: P.timezone
      });
      clockEl.textContent = formatter.format(new Date());
    } catch (e) {
      clockEl.textContent = new Date().toLocaleTimeString();
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* -------------------------------------------------------------
     15. Mobile Menu Toggle & Navigation Spy
     ------------------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    const toggleMenu = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      playCyberSound('click');
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.classList.toggle('active', isOpen);
    };

    menuToggle.addEventListener('click', toggleMenu);

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
      });
    });

    // Close on outside tap / click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.classList.remove('active');
        }
      }
    });
  }

  // Active link IntersectionObserver
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((a) => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px' }
  );

  sections.forEach((sec) => navObserver.observe(sec));

  /* -------------------------------------------------------------
     16. GSAP Reveal & Scroll Animations
     ------------------------------------------------------------- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Fade and 3D elevate sections
    gsap.utils.toArray('.reveal-up').forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 40,
          rotateX: 6
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 3D Stagger Animations for Cards Across All Sections
    ScrollTrigger.batch('.stat-card', {
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 35, rotateX: 18, scale: 0.92 },
          { opacity: 1, y: 0, rotateX: 0, scale: 1, stagger: 0.1, duration: 0.75, ease: 'power2.out' }
        );
      },
      start: 'top 90%'
    });

    ScrollTrigger.batch('.project-card', {
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 40, rotateX: 15, scale: 0.94 },
          { opacity: 1, y: 0, rotateX: 0, scale: 1, stagger: 0.14, duration: 0.85, ease: 'power3.out' }
        );
      },
      start: 'top 88%'
    });

    ScrollTrigger.batch('.timeline-item, .edu-card, .cert-card', {
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 30, rotateY: 8 },
          { opacity: 1, y: 0, rotateY: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out' }
        );
      },
      start: 'top 90%'
    });
  }

  /* -------------------------------------------------------------
     17. Initializations on DOM Load
     ------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initSkillFilters();
    initProjectFilters();
    init3DTilt();
    initStatsCountUp();

    // Loader dismiss animation
    const loader = document.getElementById('cyberLoader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('loaded');
        setTimeout(() => {
          loader.remove();
        }, 800);
      }, 700);
    }
  });
})();
