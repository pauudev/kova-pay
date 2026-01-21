$(document).ready(function () {
  // Escuchar envío del formulario usando jQuery
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    // Obtener valores de los campos usando jQuery
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();

    // Credenciales válidas (simuladas)
    const validEmail = "admin@admin.cl";
    const validPassword = "1234";

    // Verificar credenciales
    if (email === validEmail && password === validPassword) {
      mostrarAlertaBootstrap(
        "Inicio de sesión exitoso. Redirigiendo...",
        "success",
      );

      // Redirigir con retraso de 1.5s
      setTimeout(() => {
        window.location.href = "menu.html";
      }, 1500);
    } else {
      mostrarAlertaBootstrap(
        "Credenciales incorrectas. Intenta de nuevo.",
        "danger",
      );
    }
  });

  // Función para mostrar alertas tipo Bootstrap
  function mostrarAlertaBootstrap(mensaje, tipo = "danger") {
    const alerta = `
      <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>`;
    $("#alert-container").html(alerta);
  }
});
