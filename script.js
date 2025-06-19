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
function mostrarVista(servicio) {
  // Oculta todo
  document.querySelectorAll(".galeria-servicios, .vista-detalle").forEach(seccion => {
    seccion.style.display = "none";
    seccion.classList.remove("active");
  });

  // Muestra la sección correspondiente
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
    v.style.display = "none";
    v.classList.remove("active");
  });

  // Vuelve a mostrar la galería
  const galeria = document.getElementById("vista-principal");
  galeria.style.display = "grid";
  setTimeout(() => {
    galeria.classList.add("active");
  }, 10);
}

