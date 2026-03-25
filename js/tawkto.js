/* =============================================
   MARINGLOBAL SCHOLARS — Tawk.to Live Chat
   
   SETUP (takes 5 minutes):
   1. Go to https://www.tawk.to and sign up free
   2. Add your site: https://nickson046.github.io/education
   3. Copy the two IDs from your embed code:
      s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID'
   4. Replace the two values below with your real IDs
   5. Save and push to GitHub — chat bubble appears instantly
   ============================================= */

var TAWK_PROPERTY_ID = 'YOUR_PROPERTY_ID'; // e.g. '64a1234567890'
var TAWK_WIDGET_ID   = 'YOUR_WIDGET_ID';   // e.g. '1h4abcdef'

// Only load if IDs are configured
if (TAWK_PROPERTY_ID !== 'YOUR_PROPERTY_ID') {

  // Customise the widget to match MarinGlobal brand
  var Tawk_API = window.Tawk_API || {};
  var Tawk_LoadStart = new Date();

  Tawk_API.onLoad = function() {
    // Set visitor info if available from contact form
    Tawk_API.setAttributes({
      'name':  localStorage.getItem('mg_visitor_name') || '',
      'email': localStorage.getItem('mg_visitor_email') || ''
    }, function(error){});
  };

  // Custom welcome message based on page
  Tawk_API.customStyle = {
    visibility: {
      desktop: { position: 'br', xOffset: 20, yOffset: 20 },
      mobile:  { position: 'br', xOffset: 10, yOffset: 80 }
    }
  };

  // Load Tawk.to script
  (function(){
    var s1 = document.createElement('script');
    var s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/' + TAWK_PROPERTY_ID + '/' + TAWK_WIDGET_ID;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();

} else {
  console.info('Tawk.to: Add your Property ID and Widget ID to js/tawkto.js to enable live chat.');
}