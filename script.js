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

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede envio automático

  let hasError = false;

  const inputs = form.querySelectorAll("input, textarea");

  inputs.forEach(input => {
    const errorElement = input.parentElement.querySelector(".error");

    if (!input.checkValidity()) {
      hasError = true;

      input.classList.add("input-error");

      if (errorElement) {
        errorElement.style.display = "flex";
      }
    } else {
      input.classList.remove("input-error");

      if (errorElement) {
        errorElement.style.display = "none";
      }
    }
  });

  if (!hasError) {
    form.submit(); // envia só se estiver tudo válido
  }
});

const inputs = form.querySelectorAll("input, textarea");

inputs.forEach(input => {
  input.addEventListener("input", () => {
    const errorElement = input.parentElement.querySelector(".error");

    if (input.checkValidity()) {
      input.classList.remove("input-error");

      if (errorElement) {
        errorElement.style.display = "none";
      }
    }
  });
});