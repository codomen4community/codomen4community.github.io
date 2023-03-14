export const navScroll = () => {
  let codomenNav = document.getElementById("codomen");
  if (window.scrollY > 0) {
    codomenNav.classList.add("scrolled");
  }

  if (window.scrollY <= 0) codomenNav.classList.remove("scrolled");
};
window.onscroll = () => {
  navScroll();
};
