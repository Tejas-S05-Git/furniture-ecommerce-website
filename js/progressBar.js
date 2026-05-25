
// SCROLL PROGRESS BAR



window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";
});