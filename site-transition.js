// Temporary, explicit download transition. Remove the config boundary when
// the first approved lunaha payloads are live; notices then hide automatically.
(function () {
  var COPY = {
    en: 'Sonara is becoming lunaha. Until the first lunaha release, downloads provide the current Sonara beta.',
    bg: 'Sonara става lunaha. До първия lunaha релийз можеш да изтеглиш текущата бета версия на Sonara.',
    de: 'Sonara wird zu lunaha. Bis zur ersten lunaha-Veröffentlichung erhältst du hier die aktuelle Sonara-Beta.',
    es: 'Sonara pasa a llamarse lunaha. Hasta el primer lanzamiento de lunaha, las descargas ofrecen la beta actual de Sonara.',
    fr: 'Sonara devient lunaha. En attendant la première version de lunaha, les téléchargements proposent la bêta actuelle de Sonara.',
    ru: 'Sonara становится lunaha. До первого выпуска lunaha здесь доступна текущая бета-версия Sonara.',
    zh: 'Sonara 即将更名为 lunaha。在 lunaha 首次发布之前，这里提供当前 Sonara 测试版的下载。'
  };
  function paint(lang) {
    var cfg = window.LUNAHA_CONFIG;
    var active = cfg.downloadRepository && cfg.downloadRepository !== cfg.repository;
    document.querySelectorAll('[data-download-transition]').forEach(function (el) {
      el.hidden = !active;
      el.textContent = active ? (COPY[lang] || COPY.en) : '';
    });
  }
  window.lunahaDownloadTransition = paint;
  function ready() { paint(document.documentElement.lang.slice(0, 2)); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
