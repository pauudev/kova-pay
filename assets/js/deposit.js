$(document).ready(function () {
  // Mostrar el balance actual usando storage.js
  const balance = getBalance();
  $("#current-balance").text(`$${balance.toLocaleString("es-CL")}`);

  // Manejar envío del formulario
  $("#depositForm").submit(function (e) {
    e.preventDefault();

    // Obtener valores de los campos usando jQuery
    const amount = parseInt($("#amount").val());

    // Validación básica
    if (isNaN(amount) || amount <= 0 || amount > 100000000) {
      mostrarAlerta("Monto inválido. Máximo permitido: $100.000.000", "danger");
      return;
    }

    // Actualizar saldo
    const newBalance = getBalance() + amount;
    setBalance(newBalance);

    // Mostrar leyenda del monto depositado
    $("#deposit-info").text(
      `Monto depositado: $${amount.toLocaleString("es-CL")}`,
    );

    // Alerta Bootstrap de éxito
    mostrarAlerta("Depósito realizado con éxito", "success");

    // Redirigir luego de 2 segundos
    setTimeout(() => {
      window.location.href = "menu.html";
    }, 2000);
  });

  // Función alerta
  function mostrarAlerta(mensaje, tipo) {
    const alerta = `
      <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;
    $("#alert-container").html(alerta);
  }
});
