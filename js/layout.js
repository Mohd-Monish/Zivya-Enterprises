function getHeader(activePage) {
  const brandLogo = 'assets/logos/Zivya%20Logo%20%28no%20bg%29.png';
  const links = [
    { label: 'HOME', href: 'index.html' },
    { label: 'ABOUT', href: 'about.html' },
    { label: 'PRODUCTS', href: 'products.html' },
    { label: 'SERVICES', href: 'services.html' },
    { label: 'PORTFOLIO', href: 'portfolio.html' },
    { label: 'BLOG', href: 'blog.html' },
    { label: 'FAQ', href: 'faq.html' },
    { label: 'TESTIMONIALS', href: 'testimonials.html' },
    { label: 'CONTACT', href: 'contact.html' },
  ];
  const navLinksHTML = links.map(l => `<a href="${l.href}" class="nav-link${l.href === activePage ? ' active' : ''}">${l.label}</a>`).join('');
  const mobileLinksHTML = links.map(l => `<a href="${l.href}"${l.href === activePage ? ' class="active"' : ''}>${l.label}</a>`).join('');
  return `
  <div class="top-bar"><div class="container top-bar-inner" style="display:flex;align-items:center;justify-content:space-between">
    <div class="top-bar-left"><span>Sustainable</span><span class="top-bar-dot">•</span><span>Handcrafted</span><span class="top-bar-dot">•</span><span>Export Quality</span></div>
    <a href="https://instagram.com/zivyaenterprises" target="_blank" class="top-bar-ig">${icon('instagram',13)} @zivyaenterprises</a>
  </div></div>
  <header class="header" id="site-header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="${brandLogo}" class="logo-img" alt="Zivya Enterprises logo" loading="eager" decoding="async">
      </a>
      <nav class="nav-desktop">${navLinksHTML}</nav>
      <div class="header-actions">
        <button class="header-btn">${icon('search',18)}</button>
        <button class="header-btn" style="position:relative">${icon('shoppingCart',18)}<span class="cart-badge">2</span></button>
        <a href="contact.html" class="cta-btn">Get In Touch</a>
        <button class="hamburger" id="hamburger">${icon('menu',22)}</button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu">${mobileLinksHTML}<a href="contact.html" class="mobile-cta">Get In Touch</a></div>
  </header>`;
}

function getFooter() {
  const brandLogo = 'assets/logos/Zivya%20Logo%20%28no%20bg%29.png';
  const qlinks = [
    {label:'Home',href:'index.html'},{label:'About',href:'about.html'},{label:'Services',href:'services.html'},{label:'Portfolio',href:'portfolio.html'},{label:'Blog',href:'blog.html'},{label:'Faq',href:'faq.html'},{label:'Testimonials',href:'testimonials.html'},{label:'Contact',href:'contact.html'}
  ];
  const prods = ['Pendant Lights','Floor Lamps','Wall Sconces','Storage Décor','Woven Planters','Bamboo Lanterns','Table Lamps','Custom Orders'];
  return `
  <footer class="footer">
    <div class="footer-grid container">
      <div>
        <a href="index.html" class="footer-logo-wrap"><img src="${brandLogo}" class="footer-logo-img" alt="Zivya Enterprises logo" loading="lazy" decoding="async"></a>
        <p class="footer-desc">Crafting heritage-inspired lighting and décor with sustainable materials and skilled artisan hands.</p>
        <div class="footer-socials">
          <a href="https://instagram.com/zivyaenterprises" target="_blank" class="footer-social">${icon('instagram',14)}</a>
          <a href="https://facebook.com/zivyaenterprises" target="_blank" class="footer-social">${icon('facebook',14)}</a>
          <a href="https://twitter.com/zivyaenterprises" target="_blank" class="footer-social">${icon('twitter',14)}</a>
          <a href="https://linkedin.com/company/zivyaenterprises" target="_blank" class="footer-social">${icon('linkedin',14)}</a>
        </div>
      </div>
      <div><h4>Quick Links</h4><ul class="space-y-3">${qlinks.map(l=>`<li><a href="${l.href}" class="footer-link">${icon('chevronRight',12)}${l.label}</a></li>`).join('')}</ul></div>
      <div><h4>Our Products</h4><ul class="space-y-3">${prods.map(p=>`<li><a href="products.html" class="footer-link">${icon('chevronRight',12)}${p}</a></li>`).join('')}</ul></div>
      <div>
        <h4>Contact Us</h4>
        <ul class="space-y-4">
          <li class="footer-contact-item">${icon('mail',15)} info@zivyaenterprises.com</li>
          <li class="footer-contact-item">${icon('phone',15)} +91 82660 66297</li>
          <li class="footer-contact-item">${icon('mapPin',15)} Moradabad, Uttar Pradesh, India</li>
        </ul>
        <div style="margin-top:1.5rem">
          <p class="footer-newsletter-label">Newsletter</p>
          <div class="footer-newsletter"><input type="email" placeholder="Your email"><button>→</button></div>
        </div>
      </div>
    </div>
    <div class="footer-bottom"><div class="footer-bottom-inner">
      <p class="footer-copy">© 2026 Zivya Enterprises Pvt. Ltd. All rights reserved.</p>
      <div class="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a></div>
    </div></div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', function() {
  const page = document.body.dataset.page || 'index.html';
  const hdr = document.getElementById('header-placeholder');
  const ftr = document.getElementById('footer-placeholder');
  if (hdr) hdr.outerHTML = getHeader(page);
  if (ftr) ftr.outerHTML = getFooter();

  // header scroll
  const header = document.querySelector('.header');
  if (header) window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50));

  // mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.innerHTML = isOpen ? icon('x',22) : icon('menu',22);
    });
  }
});
