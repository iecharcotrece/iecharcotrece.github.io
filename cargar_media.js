(function () {
  const assets = window.__CHARCO_ASSETS__ || {};
  const replaceAssets = (value) => {
    if (!value || value.indexOf('asset://') === -1) return value;
    return value.replace(/asset:\/\/(A\d{4})/g, function(match, key) {
      return assets[key] || match;
    });
  };

  // Restaurar recursos incluidos dentro de bloques <style>.
  document.querySelectorAll('style').forEach(function(style) {
    if (style.textContent.indexOf('asset://') !== -1) {
      style.textContent = replaceAssets(style.textContent);
    }
  });

  // Restaurar src, poster, style y cualquier otro atributo con recursos.
  document.querySelectorAll('*').forEach(function(el) {
    Array.from(el.attributes || []).forEach(function(attr) {
      if (attr.value.indexOf('asset://') !== -1) {
        el.setAttribute(attr.name, replaceAssets(attr.value));
      }
    });
  });

  // Forzar recarga de videos después de restaurar sus fuentes.
  document.querySelectorAll('video').forEach(function(video) {
    try { video.load(); } catch (e) {}
  });
})();
