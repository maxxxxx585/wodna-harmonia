/* ============================================================
   WODNA HARMONIA — wspólny skrypt dla wszystkich podstron
   ============================================================ */

// Bąbelki H₂ w tle — ten sam efekt na każdej podstronie
(function () {
  const field = document.getElementById('bubbles');
  if (!field) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const count = 30;
  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    const size = 7 + Math.random() * 30;
    const left = 2 + Math.random() * 96;
    const delay = -Math.random() * 26; // ujemne opóźnienie = pole bąbelków jest "pełne" od razu po wczytaniu
    const duration = 16 + Math.random() * 22;
    b.style.cssText =
      'width:' + size + 'px;height:' + size + 'px;' +
      'left:' + left + '%;top:0;' +
      'animation-delay:' + delay + 's;' +
      'animation-duration:' + duration + 's;';
    field.appendChild(b);
  }
})();

// Menu mobilne (hamburger) — pokazuje listę podstron na wąskich ekranach
(function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  // zamknij menu po kliknięciu linku (przejście na inną podstronę)
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();

// Akordeon FAQ
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Płynne przewijanie do kotwic na TEJ SAMEJ podstronie (np. #faq, #kontakt)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});
