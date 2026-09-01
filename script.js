// A.S.D Motors — static site JS

// Header scroll state
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu .close');
if (burger && menu) {
  burger.addEventListener('click', () => menu.classList.add('open'));
  closeBtn?.addEventListener('click', () => menu.classList.remove('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// Contact form
const form = document.querySelector('#contact-form');
const sent = document.querySelector('#sent-state');
if (form && sent) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    sent.style.display = 'block';
  });
}

// Carousel (mobile testimonials)
const carousel = document.querySelector('.carousel');
if (carousel) {
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prev = document.querySelector('.carousel-arrow.prev');
  const next = document.querySelector('.carousel-arrow.next');
  let idx = 0;
  const total = slides.length;
  const update = () => {
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  };
  prev?.addEventListener('click', () => { idx = (idx - 1 + total) % total; update(); });
  next?.addEventListener('click', () => { idx = (idx + 1) % total; update(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { idx = i; update(); }));
  update();
}
