function mostrarVista(servicio) {
    const secciones = document.querySelectorAll('section');
    secciones.forEach(sec => sec.classList.remove('active'));
  
    setTimeout(() => {
      document.getElementById('vista-principal').style.display = 'none';
      document.getElementById(`vista-${servicio}`).classList.add('active');
    }, 200);
  }
  
  function volver() {
    const vistas = document.querySelectorAll('.vista-detalle');
    vistas.forEach(v => {
      v.classList.remove('active');
      setTimeout(() => {
        v.style.display = 'none';
      }, 200);
    });
  
    setTimeout(() => {
      document.getElementById('vista-principal').style.display = 'flex';
      document.getElementById('vista-principal').classList.add('active');
    }, 200);
  }
  