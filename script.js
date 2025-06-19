function mostrarVista(servicio) {
  // Ocultar todo
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
    sec.style.display = "none";
  });

  // Mostrar la vista del servicio correspondiente
  const vista = document.getElementById(`vista-${servicio}`);
  vista.style.display = "block";
  setTimeout(() => {
    vista.classList.add("active");
  }, 50);
}

function volver() {
  // Ocultar todas las vistas detalle
  document.querySelectorAll(".vista-detalle").forEach(v => {
    v.classList.remove("active");
    v.style.display = "none";
  });

  // Mostrar la vista principal
  const principal = document.getElementById("vista-principal");
  principal.style.display = "grid";
  setTimeout(() => {
    principal.classList.add("active");
  }, 50);
}
