/**
 * @deprecated Use menace-widget.js. This shim loads the Menace Voice widget for legacy embeds.
 */
(function () {
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var src = scripts[i].getAttribute('src') || '';
    if (src.indexOf('dograh-widget.js') !== -1) {
      var menaceSrc = src.replace('dograh-widget.js', 'menace-widget.js');
      var shim = document.createElement('script');
      shim.src = menaceSrc;
      shim.async = true;
      document.head.appendChild(shim);
      return;
    }
  }
})();
