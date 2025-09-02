// ===== Util: year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile menu =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// ===== Dark / Light toggle =====
const themeToggle = document.getElementById('themeToggle');
let dark = true;
themeToggle?.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.classList.toggle('light', !dark);
  themeToggle.innerHTML = dark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});

// Light theme (minimal override)
const styleLight = document.createElement('style');
styleLight.textContent = `
  .light {
    --bg:#f4f7ff; --surface:#ffffff; --card:#ffffff; --text:#0b1020; --muted:#4b5577;
    --shadow: 0 12px 28px rgba(0,0,0,.08);
  }
  .light body { background: radial-gradient(1200px 600px at 10% -10%, rgba(77,215,200,.18), transparent 50%), var(--bg);}
  .light .section.alt { background: linear-gradient(180deg, rgba(255,255,255,.8), rgba(255,255,255,.6)); }
  .light .id-card { background: linear-gradient(180deg, #fff, #f4f7ff); }
`;
document.head.appendChild(styleLight);

// ===== 3D tilt effect =====
const tiltElems = document.querySelectorAll('[data-tilt]');
tiltElems.forEach(el => {
  const depth = 20;
  const onMove = (e) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);