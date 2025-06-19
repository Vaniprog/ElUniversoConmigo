function mostrarVista(servicio) {
  document.querySelectorAll("section").forEach(s => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  const vista = document.getElementById(`vista-${servicio}`);
  vista.style.display = "block";
  setTimeout(() => {
    vista.classList.add("active");
  }, 10);
}

function volver() {
  document.querySelectorAll(".vista-detalle").forEach(s => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  const principal = document.getElementById("vista-principal");
  principal.style.display = "grid";
  setTimeout(() => {
    principal.classList.add("active");
  }, 10);
}
