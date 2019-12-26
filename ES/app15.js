function clickevent() {
  var e = $.Event("keydown");
  e.which = 13;
  e.keyCode = 13;
  $(document).trigger(e);
}
