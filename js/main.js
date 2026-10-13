(() => {
  'use strict';
  const filters = Array.from(document.querySelectorAll('.filter'));
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const count = document.getElementById('result-count');
  filters.forEach((button) => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    let visible = 0;
    filters.forEach((other) => {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    cards.forEach((card) => {
      const show = selected === 'all' || card.dataset.category.split(/\s+/).includes(selected);
      card.hidden = !show;
      if (show) visible += 1;
    });
    count.textContent = String(visible).padStart(2, '0');
  }));
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  menu?.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('open', !expanded);
  });
  links?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      links?.classList.remove('open');
      menu?.setAttribute('aria-expanded', 'false');
    }
  });
  const progress = document.getElementById('reading-progress');
  let scheduled = false;
  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = maxScroll > 0 ? `${(window.scrollY / maxScroll) * 100}%` : '0%';
      scheduled = false;
    });
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
