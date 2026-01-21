$(document).ready(function () {
  // Mostrar el balance actual usando storage.js
  const saldo = getBalance();
  $("#balance-amount").text(`$${saldo.toLocaleString("es-CL")}`);

  // Manejo de redirección con mensaje de transición
  // Seleccionamos todos los botones con clase 'action-btn' (los tres: depositar, enviar dinero, movimientos)
  $(".action-btn").click(function (e) {
    e.preventDefault(); // Evita redirección inmediata

    // Obtenemos el href (el enlace) del botón clickeado
    const href = $(this).attr("href");

    // Variable para guardar el nombre de la pantalla según el enlace
    let destino = "";

    if (href.includes("deposit.html")) destino = "depósito";
    else if (href.includes("sendmoney.html")) destino = "envío de dinero";
    else if (href.includes("transactions.html"))
      destino = "últimos movimientos";
    else destino = "pantalla desconocida";

    // Mostrar mensaje de redirección
    $("#menu-msg").text(`Redirigiendo a ${destino}...`);

    // Redirigir después de 1 segundo
    setTimeout(() => {
      window.location.href = href;
    }, 1000);
  });
});
