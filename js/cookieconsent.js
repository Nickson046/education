/* =============================================
   MARINGLOBAL SCHOLARS — Cookie Consent Banner
   GDPR compliant. Drop <script src="cookie-consent.js">
   into every page before </body>.
   ============================================= */

(function() {
  const COOKIE_KEY = 'mg_cookie_consent';

  // If already consented, init analytics and exit
  if (localStorage.getItem(COOKIE_KEY) === 'accepted') {
    initAnalytics();
    return;
  }
  if (localStorage.getItem(COOKIE_KEY) === 'declined') return;

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #mg-cookie-banner {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      background: #0D1B3E;
      color: rgba(255,255,255,0.85);
      padding: 1.25rem 2rem;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      flex-wrap: wrap;
      box-shadow: 0 -4px 24px rgba(0,0,0,0.3);
      border-top: 2px solid rgba(201,168,76,0.4);
      font-family: 'DM Sans', sans-serif;
      font-size: 0.875rem;
      line-height: 1.6;
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    #mg-cookie-banner.visible { transform: translateY(0); }
    #mg-cookie-banner p { margin: 0; max-width: 680px; color: rgba(255,255,255,0.75); }
    #mg-cookie-banner a { color: #C9A84C; text-decoration: underline; }
    #mg-cookie-banner .mg-cookie-btns { display: flex; gap: 0.75rem; flex-shrink: 0; }
    .mg-cookie-accept {
      background: #C9A84C; color: #0D1B3E;
      border: none; padding: 0.6rem 1.4rem;
      border-radius: 4px; font-weight: 700;
      font-size: 0.85rem; cursor: pointer;
      font-family: inherit; transition: all 0.2s;
    }
    .mg-cookie-accept:hover { background: #E8C97A; }
    .mg-cookie-decline {
      background: transparent; color: rgba(255,255,255,0.5);
      border: 1px solid rgba(255,255,255,0.2);
      padding: 0.6rem 1.2rem; border-radius: 4px;
      font-size: 0.85rem; cursor: pointer;
      font-family: inherit; transition: all 0.2s;
    }
    .mg-cookie-decline:hover { color: white; border-color: rgba(255,255,255,0.4); }
  `;
  document.head.appendChild(style);

  // Detect path depth for privacy link
  const isSubpage = window.location.pathname.includes('/pages/');
  const privacyPath = isSubpage ? 'privacy.html' : 'pages/privacy.html';

  // Build banner
  const banner = document.createElement('div');
  banner.id = 'mg-cookie-banner';
  banner.innerHTML = `
    <p>
      🍪 We use cookies to improve your experience and analyse site traffic.
      By clicking <strong>Accept</strong>, you consent to our use of cookies as described in our
      <a href="${privacyPath}">Privacy Policy</a>.
    </p>
    <div class="mg-cookie-btns">
      <button class="mg-cookie-decline" onclick="mgCookieDecline()">Decline</button>
      <button class="mg-cookie-accept" onclick="mgCookieAccept()">Accept Cookies</button>
    </div>
  `;
  document.body.appendChild(banner);

  // Animate in after short delay
  setTimeout(() => banner.classList.add('visible'), 600);

  window.mgCookieAccept = function() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => banner.remove(), 400);
    initAnalytics();
  };

  window.mgCookieDecline = function() {
    localStorage.setItem(COOKIE_KEY, 'declined');
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => banner.remove(), 400);
  };

  function initAnalytics() {
    // Only load Google Analytics after consent
    if (window.gaLoaded) return;
    window.gaLoaded = true;
    const s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-5J89LNVCB9';
    s.async = true;
    document.head.appendChild(s);
    s.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-5J89LNVCB9');
    };
  }
})();