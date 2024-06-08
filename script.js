const toggle_btn = document.querySelector("#checkbox");
toggle_btn.addEventListener("change", () => {
  if (toggle_byn.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
