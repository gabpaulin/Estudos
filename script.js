import { SpeedInsights } from "@vercel/speed-insights/next"

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
