$(function () {
  let win = $(window);

  function onScroll() {
    let scrollPosition = win.scrollTop();

    //console.log(scrollPosition);
    let menu = $("#menu");
    let info = menu.prev();

    let triggerOffset = info.innerHeight();
    let menuHeight = menu.innerHeight();

    let isFixed = scrollPosition > triggerOffset;
    menu.toggleClass("fixed-menu", isFixed);

    if (isFixed) {
      info.css("margin-bottom", menuHeight);
    } else {
      info.css("margin-bottom", 0);
    }
  }

  win.scroll(onScroll);
});