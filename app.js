document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const objetivo = document.getElementById("objetivo").value;
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseInt(document.getElementById("altura").value);
  const peso = parseInt(document.getElementById("peso").value);

  calcularAjusteDificultad();

  const rutina = generarRutina(objetivo, edad, altura, peso);
  mostrarRutina(rutina);
});

function generarRutina(objetivo, edad, altura, peso) {

  // ===== PERFIL POR EDAD =====
  let perfilEdad;

  if (edad <= 15) {
    perfilEdad = "adolescente";
  } else if (edad <= 50) {
    perfilEdad = "adulto";
  } else {
    perfilEdad = "mayor";
  }

  // ===== PERFIL POR PESO =====
  let perfilPeso;

  if (peso <= 58) {
    perfilPeso = "ligero";
  } else if (peso <= 85) {
    perfilPeso = "medio";
  } else {
    perfilPeso = "alto";
  }

  // ==============================
  // FUERZA
  // ==============================
  if (objetivo === "fuerza") {

    // 👦 ADOLESCENTE
    if (perfilEdad === "adolescente") {
      return {
        lunes: {
          titulo: "Flexiones",
          explicacion: `4x${ajustarReps(12)} flexiones con peso corporal.`
        },
        martes: {
          titulo: "Sentadillas",
          explicacion: `4x${ajustarReps(15)} sentadillas sin peso.`
        },
        miercoles: { titulo: "Descanso", explicacion: "Recuperación." },
        jueves: {
          titulo: "Dominadas asistidas",
          explicacion: `4x${ajustarReps(8)} dominadas con ayuda.`
        },
        viernes: {
          titulo: "Plancha",
          explicacion: `4x${ajustarReps(30)} segundos.`
        },
        sabado: { titulo: "Descanso activo", explicacion: "Movilidad." },
        domingo: { titulo: "Descanso", explicacion: "Recuperación." }
      };
    }

    // 👨 ADULTO
    if (perfilEdad === "adulto") {

if (perfilPeso === "ligero") {
  return rutinaFuerzaAdulto(5, "peso moderado", 8, perfilPeso);
}

if (perfilPeso === "medio") {
  return rutinaFuerzaAdulto(5, "peso alto", 10, perfilPeso);
}

if (perfilPeso === "alto") {
  return rutinaFuerzaAdulto(4, "peso progresivo controlado", 12, perfilPeso);
}
    }

    // 👴 MAYOR
    if (perfilEdad === "mayor") {
      return {
        lunes: {
          titulo: "Press con mancuernas ligeras",
          explicacion: `3x${ajustarReps(12)} peso ligero y controlado.`
        },
        martes: {
          titulo: "Sentadilla asistida",
          explicacion: `3x${ajustarReps(15)} con apoyo.`
        },
        miercoles: { titulo: "Descanso", explicacion: "Recuperación." },
        jueves: {
          titulo: "Remo con banda",
          explicacion: `3x${ajustarReps(12)} controlando movimiento.`
        },
        viernes: {
          titulo: "Elevaciones laterales",
          explicacion: `3x${ajustarReps(12)} ligero.`
        },
        sabado: { titulo: "Movilidad", explicacion: "Estiramientos." },
        domingo: { titulo: "Descanso", explicacion: "Recuperación." }
      };
    }
  }

  // ==============================
  // VOLUMEN
  // ==============================
  if (objetivo === "volumen") {

    if (perfilEdad === "adolescente") {
      return {
        lunes: { titulo: "Flexiones", explicacion: `4x${ajustarReps(15)}.` },
        martes: { titulo: "Sentadilla", explicacion: `4x${ajustarReps(20)}.` },
        miercoles: { titulo: "Descanso", explicacion: "Recuperación." },
        jueves: { titulo: "Dominadas asistidas", explicacion: `4x${ajustarReps(10)}.` },
        viernes: { titulo: "Fondos en banco", explicacion: `4x${ajustarReps(12)}.` },
        sabado: { titulo: "Cardio ligero", explicacion: "20 minutos." },
        domingo: { titulo: "Descanso", explicacion: "Recuperación." }
      };
    }

if (perfilEdad === "adulto") {

  let repsBase = 12;

  if (perfilPeso === "ligero") repsBase = 10;
  if (perfilPeso === "medio") repsBase = 12;
  if (perfilPeso === "alto") repsBase = 15;

  return {
    lunes: { titulo: "Press banca", explicacion: `4x${ajustarReps(repsBase)} peso moderado.` },
    martes: { titulo: "Sentadilla", explicacion: `4x${ajustarReps(repsBase)} peso moderado.` },
    miercoles: { titulo: "Abdomen", explicacion: `4x${ajustarReps(20)}.` },
    jueves: { titulo: "Remo con barra", explicacion: `4x${ajustarReps(repsBase)}.` },
    viernes: { titulo: "Hombro y bíceps", explicacion: `4x${ajustarReps(repsBase)}.` },
    sabado: { titulo: "Pierna ligera", explicacion: `3x${ajustarReps(15)}.` },
    domingo: { titulo: "Descanso", explicacion: "Recuperación." }
  };
}

    if (perfilEdad === "mayor") {
      return {
        lunes: { titulo: "Mancuernas ligeras", explicacion: `3x${ajustarReps(15)}.` },
        martes: { titulo: "Sentadilla asistida", explicacion: `3x${ajustarReps(15)}.` },
        miercoles: { titulo: "Descanso", explicacion: "Recuperación." },
        jueves: { titulo: "Bandas elásticas", explicacion: `3x${ajustarReps(15)}.` },
        viernes: { titulo: "Elevaciones suaves", explicacion: `3x${ajustarReps(15)}.` },
        sabado: { titulo: "Movilidad", explicacion: "Estiramientos." },
        domingo: { titulo: "Descanso", explicacion: "Recuperación." }
      };
    }
  }

  // ==============================
  // DEFINICIÓN
  // ==============================
  if (objetivo === "definicion") {

    if (perfilEdad === "adolescente") {
      return rutinaDefinicion("HIIT intenso", ajustarTiempo(35) + " minutos");
    }

    if (perfilEdad === "adulto") {
      return rutinaDefinicion("HIIT intenso", ajustarTiempo(30) + " minutos");
    }

    if (perfilEdad === "mayor") {
      return rutinaDefinicion("Cardio moderado", ajustarTiempo(25) + " minutos");
    }
  }

  return {};
}


// FUNCIONES AUXILIARES

function rutinaFuerzaAdulto(series, intensidad, repsBase, perfilPeso) {

  if (perfilPeso === "ligero") repsBase -= 2;
  if (perfilPeso === "alto") repsBase += 3;

  return {
    lunes: { titulo: "Press banca", explicacion: `${series}x${ajustarReps(repsBase)} ${intensidad}.` },
    martes: { titulo: "Sentadilla", explicacion: `${series}x${ajustarReps(repsBase)} ${intensidad}.` },
    miercoles: { titulo: "Descanso", explicacion: "Recuperación." },
    jueves: { titulo: "Peso muerto", explicacion: `${series}x${ajustarReps(repsBase)} ${intensidad}.` },
    viernes: { titulo: "Press militar", explicacion: `${series}x${ajustarReps(repsBase)} ${intensidad}.` },
    sabado: { titulo: "Descanso activo", explicacion: "Movilidad." },
    domingo: { titulo: "Descanso", explicacion: "Recuperación." }
  };
}

function rutinaDefinicion(tipo, duracion) {
  return {
    lunes: { titulo: tipo, explicacion: duracion },
    martes: { titulo: "Cardio", explicacion: duracion },
    miercoles: { titulo: "Pierna dinámica", explicacion: duracion },
    jueves: { titulo: "HIIT + Abdomen", explicacion: duracion },
    viernes: { titulo: "Circuito completo", explicacion: duracion },
    sabado: { titulo: "Cardio largo", explicacion: duracion },
    domingo: { titulo: "Descanso activo", explicacion: "Movilidad." }
  };
}

function mostrarRutina(rutina) {
  const contenedor = document.getElementById("rutina");
contenedor.innerHTML = `
  <h2>Tu Rutina Semanal</h2>

  <div class="progreso-container">
    <div class="progreso-barra">
      <div id="barra-progreso"></div>
    </div>
    <p id="porcentaje-texto">Progreso semanal: 0%</p>
  </div>

  <div class="calendario"></div>
`;
  const calendario = document.querySelector(".calendario");

  for (let dia in rutina) {
    calendario.innerHTML += `
      <div class="card">
        <h3>${dia.toUpperCase()}</h3>
        <p onclick="mostrarExplicacion('${dia}')">
  ${rutina[dia].titulo}
</p>
<p class="explicacion oculto" id="exp-${dia}">
  ${rutina[dia].explicacion}
</p>
        <div class="botones">
          <button onclick="marcar('${dia}', 'completado')">✔</button>
          <button onclick="marcar('${dia}', 'fallado')">❌</button>
        </div>
        <p id="estado-${dia}"></p>
      </div>
    `;

    const estadoGuardado = localStorage.getItem(`estado-${dia}`);
    if (estadoGuardado) {
      actualizarEstadoVisual(dia, estadoGuardado);
      actualizarProgreso();
    }
  }

  localStorage.setItem("rutinaGuardada", JSON.stringify(rutina));
}


function marcar(dia, estado) {
  localStorage.setItem(`estado-${dia}`, estado);
  actualizarEstadoVisual(dia, estado);
  actualizarProgreso(); // 👈 ESTA LÍNEA ES NUEVA
}

function actualizarEstadoVisual(dia, estado) {
  const elemento = document.getElementById(`estado-${dia}`);
  if (elemento) {
    elemento.innerText =
      estado === "completado" ? "✅ Completado" : "❌ No completado";
  }
}
function actualizarProgreso() {
 const dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"
];
  let completados = 0;

  dias.forEach(dia => {
    const estado = localStorage.getItem(`estado-${dia}`);
    if (estado === "completado") {
      completados++;
    }
  });

const porcentaje = Math.round((completados / dias.length) * 100);

const barra = document.getElementById("barra-progreso");
const texto = document.getElementById("porcentaje-texto");

if (barra && texto) {
  barra.style.width = porcentaje + "%";
  texto.textContent = "Progreso semanal: " + porcentaje + "%";
}
}
function mostrarExplicacion(dia) {
  const elemento = document.getElementById(`exp-${dia}`);
  elemento.classList.toggle("oculto");
}
window.addEventListener("DOMContentLoaded", function() {

  const rutinaGuardada = localStorage.getItem("rutinaGuardada");

  if (rutinaGuardada) {
    document.querySelector(".calendario").innerHTML = rutinaGuardada;
  }

});

window.addEventListener("DOMContentLoaded", function() {

  const rutinaGuardada = localStorage.getItem("rutinaGuardada");

  if (rutinaGuardada) {
    const rutina = JSON.parse(rutinaGuardada);
    mostrarRutina(rutina);
  }

});

// ===== CALCULAR PROGRESO =====
function calcularProgreso() {

  const completados = JSON.parse(localStorage.getItem("ejerciciosCompletados")) || [];
  const total = document.querySelectorAll(".card").length;

  const progreso = (completados.length / total) * 100;

  return progreso;
}


// ===== CALCULAR AJUSTE DE DIFICULTAD =====
function calcularAjusteDificultad() {

  const progreso = calcularProgreso();

  let ajuste = 0;

  if (progreso >= 90) {
    ajuste = 5;
  }
  else if (progreso >= 75) {
    ajuste = -5;
  }
  else if (progreso >= 50) {
    ajuste = -10;
  }
  else {
    ajuste = -15;
  }

  localStorage.setItem("ajusteDificultad", ajuste);

  return ajuste;
}


// ===== AJUSTAR REPETICIONES =====
function ajustarReps(repsBase){

  const ajuste = parseInt(localStorage.getItem("ajusteDificultad")) || 0;

  let nuevasReps = Math.floor(repsBase * (1 + ajuste/100));

  // 🔥 mínimo dinámico (más bajo)
  let minimo = Math.floor(repsBase * 0.4); // ahora puede bajar mucho más

  if (minimo < 2) minimo = 2;

  if (nuevasReps < minimo) {
    nuevasReps = minimo;
  }

  return nuevasReps;
}

function ajustarTiempo(minutosBase){

  const ajuste = parseInt(localStorage.getItem("ajusteDificultad")) || 0;

  let nuevoTiempo = Math.floor(minutosBase * (1 + ajuste/100));

  let minimo = Math.floor(minutosBase * 0.5);

  if (minimo < 5) minimo = 5;

  if (nuevoTiempo < minimo) {
    nuevoTiempo = minimo;
  }

  return nuevoTiempo;
}

function terminarSemana() {

  const dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
  ];

  let completados = 0;

  dias.forEach(dia => {
    const estado = localStorage.getItem(`estado-${dia}`);
    if (estado === "completado") {
      completados++;
    }
  });

  const progreso = Math.round((completados / dias.length) * 100);

  let ajuste = 0;

  if (progreso >= 90) {
    ajuste = 5;
  } 
  else if (progreso >= 75) {
    ajuste = -5;
  } 
  else if (progreso >= 50) {
    ajuste = -10;
  } 
  else {
    ajuste = -15;
  }

  // guardar dificultad
  localStorage.setItem("ajusteDificultad", ajuste);

  alert("🔥 Semana completada\nProgreso: " + progreso + "%\nAjuste dificultad: " + ajuste + "%");

  // reiniciar estados
  dias.forEach(dia => {

    localStorage.removeItem(`estado-${dia}`);

    const estadoElemento = document.getElementById(`estado-${dia}`);
    if (estadoElemento) {
      estadoElemento.innerText = "";
    }

  });

  actualizarProgreso();

  // 👇 regenerar rutina con nueva dificultad
  const objetivo = document.getElementById("objetivo").value;
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseInt(document.getElementById("altura").value);
  const peso = parseInt(document.getElementById("peso").value);

  const nuevaRutina = generarRutina(objetivo, edad, altura, peso);
  mostrarRutina(nuevaRutina);

}

function mostrarLogin(){

  const nombre = prompt("Ingresa tu nombre");

  if(!nombre) return;

  localStorage.setItem("usuario", nombre);

  actualizarPerfilUI();
}

function cerrarSesion(){

  localStorage.removeItem("usuario");

  actualizarPerfilUI();
}

function actualizarPerfilUI(){

  const area = document.getElementById("perfil-area");

  const usuario = localStorage.getItem("usuario");

  if(usuario){

    area.innerHTML = `
      👤 ${usuario}
      <button onclick="cerrarSesion()">Salir</button>
    `;

  }else{

    area.innerHTML = `
      <button onclick="mostrarLogin()">Iniciar sesión</button>
    `;
  }

}

window.addEventListener("DOMContentLoaded", actualizarPerfilUI);