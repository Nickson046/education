/* MARINGLOBAL SCHOLARS — SHARED JS */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar Scroll ── */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => { if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile Menu ── */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  const navCta    = document.querySelector('.nav-cta');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks?.classList.toggle('open');
      navCta?.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      hamburger.classList.toggle('active');
      if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });
  }

  /* ── Active Nav Link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) link.classList.add('active');
  });

  /* ── Scroll Reveal ── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('[data-reveal],[data-reveal-stagger]').forEach(el => revealObs.observe(el));

  /* ── Accordion ── */
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const body = trigger.nextElementSibling;
      const isOpen = trigger.classList.contains('open');
      document.querySelectorAll('.accordion-trigger.open').forEach(t => {
        t.classList.remove('open');
        t.nextElementSibling.style.maxHeight = '0';
      });
      if (!isOpen) { trigger.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; }
    });
  });

  /* ── Counter Animation ── */
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const start  = performance.now();
    const step   = (now) => {
      const p = Math.min((now - start) / 1800, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(e * target).toLocaleString() + (el.dataset.suffix || '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

  /* ── Toast ── */
  window.showToast = (message, type = 'success') => {
    const t = document.createElement('div');
    t.style.cssText = `position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:${type==='success'?'#2D8C6E':'#C0392B'};color:#fff;padding:.85rem 1.8rem;border-radius:4px;font-family:'DM Sans',sans-serif;font-size:.9rem;font-weight:500;box-shadow:0 4px 20px rgba(0,0,0,.2);z-index:9999;animation:fadeUp .4s ease;white-space:nowrap;`;
    t.textContent = message;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity='0'; t.style.transition='opacity .4s'; setTimeout(() => t.remove(), 400); }, 3200);
  };

});

/* ── Page Transition Loader ── */
(function() {
  // Inject progress bar styles
  const s = document.createElement('style');
  s.textContent = `
    #mg-loader {
      position: fixed; top: 0; left: 0; right: 0;
      height: 3px; z-index: 99999;
      background: linear-gradient(90deg, #C9A84C, #E8C97A, #C9A84C);
      background-size: 200% 100%;
      transform: scaleX(0); transform-origin: left;
      transition: transform 0.3s ease;
      animation: loaderShimmer 1.5s linear infinite;
    }
    @keyframes loaderShimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    #mg-loader.loading { transform: scaleX(0.7); }
    #mg-loader.done    { transform: scaleX(1); opacity: 0; transition: transform 0.2s ease, opacity 0.3s ease 0.1s; }
  `;
  document.head.appendChild(s);

  const bar = document.createElement('div');
  bar.id = 'mg-loader';
  document.body.appendChild(bar);

  // Show on navigation clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    // Only trigger for internal page links
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    bar.classList.remove('done');
    bar.classList.add('loading');
  });

  // Complete on page load
  window.addEventListener('load', () => {
    bar.classList.remove('loading');
    bar.classList.add('done');
    setTimeout(() => { bar.classList.remove('done'); }, 500);
  });
})();

/* ── Smooth scroll for anchor links ── */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

/* ── Back to top on logo click when already at top ── */
document.addEventListener('click', (e) => {
  if (e.target.closest('.logo') && window.scrollY < 100) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});