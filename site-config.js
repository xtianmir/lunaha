// Shared, cross-page config for the lunaha site - the SINGLE SOURCE OF TRUTH
// for values that appear on more than one page (index + legal pages). Loaded
// before each page's own script.
//
// PRICE: change it HERE ONLY. Every page prints the price from this file into
// its `[data-lunaha-price]` element(s), so a price change or a promo can never
// leave a stale number behind on some page you forgot. The displayed number
// must always match the real charged price in the Polar product "lunaha
// Premium" (Polar is the actual billing source of truth).
//
// NOTE: the word "one-time" is localized per page (index uses the `t2.once`
// i18n key); this file owns the NUMBER + currency symbol only.
(function () {
  var CONFIG = {
    repository: 'xtianmir/lunaha',
    // Temporary distribution boundary until the first approved lunaha release.
    downloadRepository: 'xtianmir/Sonara',
    priceUSD: '$9.99', // must match the Polar "lunaha Premium" USD price
    priceEUR: '€9.99', // EUR price shown to eurozone buyers by Polar
    // Set to a string (e.g. '$4.99') during a promo to flip every page at once;
    // leave null when there is no promo.
    promoPriceUSD: null,
  };
  window.LUNAHA_CONFIG = CONFIG;

  function priceFor(currency) {
    if (currency === 'eur') return CONFIG.priceEUR;
    return CONFIG.promoPriceUSD || CONFIG.priceUSD;
  }

  function fill() {
    var nodes = document.querySelectorAll('[data-lunaha-price]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      el.textContent = priceFor(el.getAttribute('data-lunaha-price') || 'usd');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fill);
  } else {
    fill();
  }
})();
