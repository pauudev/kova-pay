$(document).ready(function () {
  let contactoSeleccionado = null;

  // Mostrar contactos al cargar
  renderizarContactos();

  // Guardar nuevo contacto
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    const nombre = $("#contactName").val().trim();
    const cuenta = $("#contactNumber").val().trim();
    const alias = $("#contactAlias").val().trim();
    const banco = $("#contactBank").val().trim();

    if (!nombre || !cuenta || !alias || !banco) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevoContacto = { nombre, cuenta, alias, banco };

    const contactos = getContacts();
    contactos.push(nuevoContacto);
    setContacts(contactos);

    // Cerrar modal
    $("#agregarcontactomodal").modal("hide");

    // Resetear formulario
    $("#contactForm")[0].reset();

    // Volver a mostrar contactos
    renderizarContactos();
  });

  // Evento click en contactos para seleccionar
  $(document).on("click", ".list-group-item", function () {
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");

    const index = $(this).data("index");
    const contactos = getContacts();
    contactoSeleccionado = contactos[index];

    $("#nombreContactoEnvio").text(contactoSeleccionado.nombre);
    $("#saldoDisponibleEnvio").text(`$${getBalance().toLocaleString("es-CL")}`);

    $("#btnAbrirModalEnvio").show();
  });

  // Envío de dinero
  $("#formEnviarDinero").submit(function (e) {
    e.preventDefault();

    const monto = parseInt($("#montoEnvio").val());

    if (isNaN(monto) || monto <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }

    const saldoActual = getBalance();

    if (monto > saldoActual) {
      alert("Saldo insuficiente.");
      return;
    }

    // Descontar saldo
    const nuevoSaldo = saldoActual - monto;
    setBalance(nuevoSaldo);

    // Registrar movimiento
    addMovement(`Envío a ${contactoSeleccionado.nombre}`, monto);

    // Cerrar modal
    $("#modalEnviarDinero").modal("hide");

    // Resetear
    $("#formEnviarDinero")[0].reset();
    $("#btnAbrirModalEnvio").hide();
    $(".list-group-item").removeClass("active");

    // Confirmación
    alert(
      `Has enviado $${monto.toLocaleString("es-CL")} a ${contactoSeleccionado.nombre}`,
    );
  });

  function getContacts() {
    return JSON.parse(localStorage.getItem("kova_contacts")) || [];
  }

  function setContacts(lista) {
    localStorage.setItem("kova_contacts", JSON.stringify(lista));
  }

  function renderizarContactos() {
    const contactos = getContacts();
    const contenedor = $(".list-group");
    contenedor.empty();

    if (contactos.length === 0) {
      contenedor.append(`<div class="text-muted">No hay contactos aún.</div>`);
      $("#btnAbrirModalEnvio").hide();
      return;
    }

    contactos.forEach((contacto, index) => {
      contenedor.append(`
        <button type="button" class="list-group-item list-group-item-action d-flex align-items-center gap-3" data-index="${index}">
          <span class="fs-4">👤</span>
          <div>
            <p class="mb-0 fw-semibold">${contacto.nombre}</p>
            <small class="text-muted">${contacto.alias} – ${contacto.banco}</small>
          </div>
        </button>
      `);
    });
  }
});
