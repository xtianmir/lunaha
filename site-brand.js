// One logo/wordmark for every page and both footer layouts.
(function () {
  function injectCss() {
    if (document.getElementById('site-brand-css')) return;
    var s = document.createElement('style');
    s.id = 'site-brand-css';
    s.textContent = '.sbrand{display:inline-flex;align-items:center;gap:9px;color:var(--text-strong);text-decoration:none;line-height:1}'
      + '.sbrand:hover{color:var(--text-strong);text-decoration:none}'
      + '.sbrand-mark{position:relative;display:inline-block;flex:0 0 auto;width:26px;height:26px;contain:layout style;will-change:transform;transition:transform .24s ease}'
      + '.sbrand-mark i{position:absolute;inset:0;display:block;background:var(--accent);mask:url(brand-mark.webp) center/contain no-repeat}'
      + '.sbrand-mark .sbrand-highlight{background:white;mask-image:url(brand-highlight.webp)}'
      + '.sbrand:hover .sbrand-mark,.sbrand:focus-visible .sbrand-mark{transform:translateY(-1px) rotate(-4deg) scale(1.06)}'
      + '.sbrand-word{font-family:var(--font-display);text-transform:none;font-weight:400;font-size:17px;line-height:1;letter-spacing:.005em}'
      + '.sbrand--lg .sbrand-mark,.sbrand--mark .sbrand-mark{width:34px;height:34px}'
      + '.sbrand--lg .sbrand-word{font-size:24px}'
      + '@media(prefers-reduced-motion:reduce){.sbrand .sbrand-mark{transition:none;transform:none;will-change:auto}}';
    document.head.appendChild(s);
  }
  function render(el) {
    var size = el.getAttribute('data-brand');
    el.classList.add('sbrand');
    if (size) el.classList.add('sbrand--' + size);
    if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', 'lunaha home');
    el.innerHTML = '<span class="sbrand-mark" aria-hidden="true"><i></i><i class="sbrand-highlight"></i></span>'
      + (size === 'mark' ? '' : '<span class="sbrand-word">lunaha</span>');
  }
  function init() { injectCss(); document.querySelectorAll('[data-brand]').forEach(render); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.lunahaBrand = { render: init };
})();
