function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const label = document.querySelector(".switch-label")
  
  if (html.classList.contains("light")) {
    label.textContent = "Claro"
  } else {
    label.textContent = "Escuro"
  }
}