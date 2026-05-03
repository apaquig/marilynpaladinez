  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = '✅ ¡Mensaje enviado!';
    btn.style.background = '#25d366';
    setTimeout(() => {
      btn.textContent = '📩 Enviar mensaje';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }

  // Smooth nav highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const bottom = top + sec.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + sec.id) a.style.color = '#cc0000';
        });
      }
    });
  });