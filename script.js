function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.png")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
  }
}

function toggleMode() {
  let theme = localStorage.getItem('theme');
  theme = (theme === 'dark') ? 'light' : 'dark';
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

window.onload = () => {
  document.body.className = localStorage.getItem('theme') || 'light';
};
