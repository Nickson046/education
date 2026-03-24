/* =============================================
   MARINGLOBAL SCHOLARS — SHARED COMPONENTS
   Auto-detects path depth so nav/footer links
   work whether the page is at root (index.html)
   or inside pages/ subfolder (about.html etc.)
   ============================================= */

// Detect if current page is inside pages/ subfolder
const IS_SUBPAGE = window.location.pathname.includes('/pages/');

// Prefix for links back to root-level files
const ROOT = IS_SUBPAGE ? '../' : '';

// All pages except index live in pages/ — same-folder links need no prefix from pages/
// From root index.html, pages/ links need pages/ prefix
const PAGE = IS_SUBPAGE ? '' : 'pages/';

const NAV_HTML = `
<nav class="navbar">
  <div class="navbar-inner">
    <a href="${ROOT}index.html" class="logo">
      <div class="logo-mark">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="#0D1B3E" stroke-width="1.5" fill="none"/>
          <path d="M12 6l5 2.8v5.4L12 17 7 14.2V8.8L12 6z" fill="#0D1B3E" opacity=".5"/>
        </svg>
      </div>
      <div class="logo-text">
        MarinGlobal Scholars
        <span>Study Abroad Consultancy</span>
      </div>
    </a>

    <div class="nav-links">
      <a href="${ROOT}index.html">Home</a>
      <a href="${PAGE}about.html">About</a>
      <a href="${PAGE}programs.html">Programs</a>
      <a href="${PAGE}scholarships.html">Scholarships</a>
      <a href="${PAGE}how-it-works.html">How It Works</a>
      <a href="${PAGE}blog.html">Resources</a>
      <a href="${PAGE}faq.html">FAQ</a>
    </div>

    <div class="nav-cta">
      <a href="${PAGE}testimonials.html" class="btn btn-ghost" style="padding:.65rem 1.2rem;font-size:.85rem;">Success Stories</a>
      <a href="${PAGE}contact.html" class="btn btn-primary" style="padding:.65rem 1.4rem;font-size:.85rem;">Get Started</a>
    </div>

    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${ROOT}index.html" class="logo" style="margin-bottom:1rem;display:inline-flex">
          <div class="logo-mark">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="#0D1B3E" stroke-width="1.5" fill="none"/>
              <path d="M12 6l5 2.8v5.4L12 17 7 14.2V8.8L12 6z" fill="#0D1B3E" opacity=".5"/>
            </svg>
          </div>
          <div class="logo-text">MarinGlobal Scholars<span>Study Abroad Consultancy</span></div>
        </a>
        <p>Empowering East African students to access world-class education at leading European universities in Latvia, Lithuania, and Estonia.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">in</a>
          <a href="#" aria-label="LinkedIn">li</a>
          <a href="https://wa.me/255000000000" aria-label="WhatsApp">w</a>
        </div>
      </div>

      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${PAGE}about.html">About Us</a></li>
          <li><a href="${PAGE}programs.html">Programs</a></li>
          <li><a href="${PAGE}scholarships.html">Scholarships</a></li>
          <li><a href="${PAGE}how-it-works.html">How It Works</a></li>
          <li><a href="${PAGE}testimonials.html">Success Stories</a></li>
        </ul>
      </div>

      <div>
        <h4>Countries</h4>
        <ul>
          <li><a href="${PAGE}programs.html?country=latvia">🇱🇻 Latvia</a></li>
          <li><a href="${PAGE}programs.html?country=lithuania">🇱🇹 Lithuania</a></li>
          <li><a href="${PAGE}programs.html?country=estonia">🇪🇪 Estonia</a></li>
        </ul>
        <h4 style="margin-top:1.5rem">Support</h4>
        <ul>
          <li><a href="${PAGE}faq.html">FAQ</a></li>
          <li><a href="${PAGE}blog.html">Resources</a></li>
          <li><a href="${PAGE}contact.html">Contact Us</a></li>
          <li><a href="${PAGE}privacy.html">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="footer-newsletter">
        <h4>Stay Updated</h4>
        <p style="font-size:.85rem;margin-bottom:1rem;color:rgba(255,255,255,.5)">Get scholarship alerts and study tips delivered to your inbox.</p>
        <input type="email" placeholder="Your email address" id="footer-email">
        <button class="btn btn-primary" onclick="handleNewsletterSignup()">Subscribe →</button>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 MarinGlobal Scholars. All rights reserved.</p>
      <div style="display:flex;gap:1.5rem">
        <a href="${PAGE}privacy.html">Privacy Policy</a>
        <a href="${PAGE}privacy.html#terms">Terms of Service</a>
        <a href="${PAGE}privacy.html#gdpr">GDPR Compliance</a>
      </div>
    </div>
  </div>
</footer>

<a href="https://wa.me/255000000000" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>`;

function handleNewsletterSignup() {
  const email = document.getElementById('footer-email')?.value;
  if (!email || !email.includes('@')) {
    window.showToast('Please enter a valid email address.', 'error');
    return;
  }
  window.showToast("Thank you for subscribing! We'll be in touch soon.");
  const el = document.getElementById('footer-email');
  if (el) el.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // Active nav link highlight
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop().split('?')[0];
    if (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    }
  });
});