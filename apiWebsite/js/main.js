(function(window, document) {

  var OPEN_MENU_ID = "open-menu";
  var CLOSE_MENU_ID = "close-menu";
  var SHIM_ID = "site-main";
  var MENU_ID = "main-nav";
  var EXPANDED_CLASS = "expanded";

  function hasClass(el, name) {
    var re = new RegExp("(?:^|\\s)" + name + "(?!\\S)");
    return el.className.match(re);
  }

  function addClass(el, name) {
    el.className += " " + name;
  }

  function removeClass(el, name) {
    var re = new RegExp("(?:^|\\s)" + name + "(?!\\S)", "g");
    el.className = el.className.replace(re, "");
  }

  function toggleMenu(e) {
    e.preventDefault();
    var menu = document.getElementById(MENU_ID);
    if (hasClass(menu, EXPANDED_CLASS)) {
      removeClass(menu, EXPANDED_CLASS);
      document
        .getElementById(SHIM_ID)
        .removeEventListener("click", toggleMenu, true);
    } else {
      addClass(menu, EXPANDED_CLASS);
      document
        .getElementById(SHIM_ID)
        .addEventListener("click", toggleMenu, true);
    }
  }

  function bootstrap() {
    document.getElementById(OPEN_MENU_ID).addEventListener("click", toggleMenu);
    document
      .getElementById(CLOSE_MENU_ID)
      .addEventListener("click", toggleMenu);
  }

  window.addEventListener("load", bootstrap);

})(window, document);