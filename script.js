function toggleMode() {
  const html = document.documentElement;
  const isLightMode = html.classList.toggle("light");
  const imgSrc = isLightMode ? "./assets/avatar2.png" : "./assets/avatar1.png";
  document.querySelector("#profile img").setAttribute("src", imgSrc);
}
