/* Auto-inject header & footer */
document.body.insertAdjacentHTML('afterbegin', `
<header>
  <div class="header-content">
    <div class="logo-container" onclick="window.scrollTo({top:0,behavior:'smooth'})">
      <img src="Logo.png" alt="Logo" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="logo-text" style="display:none;">CHOWORKER</span>
    </div>
    <div class="center-title"><span>YOUR CHOWORKER</span></div>
    <div class="desktop-nav-container">
      <button class="desktop-nav-trigger" id="desktopNavTrigger">Menu <i class="fas fa-chevron-down"></i></button>
      <div class="desktop-nav-dropdown" id="desktopNavDropdown">
        <a href="https://thekachoo.github.io/CHODATE/">Home</a>
        <a href="MoU.html">MoU Templates</a>
        <a href="Convert.html">Convert File</a>
        <a href="Ratio.html">Ratio Editor</a>
      </div>
    </div>
    <button class="mobile-menu-btn" id="mobileMenuBtn"><i class="fas fa-bars"></i></button>
  </div>
</header>
<div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
<div class="mobile-menu" id="mobileMenu">
  <a href="https://thekachoo.github.io/CHODATE/" class="mobile-menu-link">Home</a>
  <a href="MoU.html" class="mobile-menu-link">MoU Templates</a>
  <a href="Convert.html" class="mobile-menu-link">Convert File</a>
  <a href="Ratio.html" class="mobile-menu-link">Ratio Editor</a>
</div>
`);

document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="footer-grid">
    <div class="footer-section footer-brand">
      <h3>CHODATE</h3>
      <p>CHODATE is a feature developed by Kachoo for social media content updates, intended for roleplay purposes.</p>
      <div class="social-links">
        <a href="mailto:ohkachoo@gmail.com" class="social-link"><i class="fas fa-envelope"></i></a>
        <a href="https://twitter.com/thekachoo" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
    <div class="footer-section">
      <h3>Explore</h3>
      <ul class="footer-links">
        <li><a href="https://thekachoo.github.io/Home/">The Kachoo</a></li>
        <li><a href="https://thekachoo.github.io/Home/kafkapages.html">Kafkapages</a></li>
        <li><a href="https://thekachoo.github.io/KAZINE/COLLECTION.html">Kazine</a></li>
        <li><a href="https://thekachoo.github.io/KABOOM/">Kaboom</a></li>
        <li><a href="#">Kadio</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>More</h3>
      <ul class="footer-links">
        <li><a href="https://thekachoo.github.io/CHOBANK/">Chobank</a></li>
        <li><a href="https://thekachoo.github.io/CHONNECT/">Chonnect</a></li>
        <li><a href="https://thekachoo.github.io/CHOSONG/">Chosong</a></li>
        <li><a href="https://thekachoo.github.io/CHODATE/">Chodate</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Meet Us</h3>
      <ul class="footer-links">
        <li><a href="https://x.com/thekachoo" target="_blank">X</a></li>
        <li><a href="mailto:ohkachoo@gmail.com">Email</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="copyright">© 2026 CHODATE by The Kachoo. All rights reserved.</div>
  </div>
</footer>
`);

/* Logic menu */
window.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn=document.getElementById('mobileMenuBtn');
  const mobileMenu=document.getElementById('mobileMenu');
  const mobileOverlay=document.getElementById('mobileMenuOverlay');
  if(mobileMenuBtn){
    mobileMenuBtn.addEventListener('click',()=>{
      mobileMenu.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      document.body.style.overflow=mobileMenu.classList.contains('active')?'hidden':'';
    });
    mobileOverlay.addEventListener('click',()=>{
      mobileMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow='';
    });
  }
  const trigger=document.getElementById('desktopNavTrigger');
  const dropdown=document.getElementById('desktopNavDropdown');
  if(trigger){
    trigger.addEventListener('click', e=>{e.stopPropagation(); dropdown.classList.toggle('active');});
    document.addEventListener('click', e=>{
      if(!trigger.contains(e.target) && !dropdown.contains(e.target)) dropdown.classList.remove('active');
    });
  }
});
