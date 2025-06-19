function mostrarVista(servicio) {
  // Oculta TODAS las secciones
  document.querySelectorAll("section").forEach(s => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  // Muestra la sección del servicio
  const vista = document.getElementById(`vista-${servicio}`);
  if (vista) {
    vista.style.display = "block";
    setTimeout(() => {
      vista.classList.add("active");
    }, 10);
  }
}

function volver() {
  // Oculta todas las vistas detalle
  document.querySelectorAll(".vista-detalle").forEach(v => {
    v.classList.remove("active");
    v.style.display = "none";
  });

  // Muestra la vista principal
  const principal = document.getElementById("vista-principal");
  if (principal) {
    principal.style.display = "grid";
    setTimeout(() => {
      principal.classList.add("active");
    }, 10);
  }
}
