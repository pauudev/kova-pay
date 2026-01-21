$(document).ready(function () {
  // Obtener valores de los campos usando jQuery
  const $lista = $("#listaMovimientos");
  const $filtro = $("#filtroTipo");
  const $balance = $("#balance-actual");

  // Mostrar balance actual
  const saldo = getBalance();
  $balance.text(`$${saldo.toLocaleString("es-CL")}`);

  // Mostrar todos los movimientos al inicio
  mostrarMovimientos("Todos");

  // Escucha acción de cambio en el filtro
  $filtro.change(function () {
    const tipoSeleccionado = $(this).val();
    mostrarMovimientos(tipoSeleccionado);
  });

  // Mostrar movimientos filtrados
  function mostrarMovimientos(filtro) {
    const movimientos = getMovements().slice().reverse();
    $lista.empty();

    const filtrados = movimientos.filter((mov) => {
      if (filtro === "Todos") return true;
      return mov.type === filtro || mov.type.startsWith(filtro);
    });

    if (filtrados.length === 0) {
      $lista.append(`
        <li class="list-group-item text-center text-muted">
          No hay movimientos registrados con ese nombre.
        </li>
      `);
      return;
    }

    filtrados.forEach((mov) => {
      const esDeposito = mov.type === "Depósito";
      const clase = esDeposito ? "success" : "warning";
      const signo = esDeposito ? "+" : "-";
      const emoji = esDeposito ? "🟢" : "🟡";

      $lista.append(`
        <li class="list-group-item">
          <div class="row align-items-center g-2">
            <div class="col-auto">
              <div class="fw-semibold">${mov.type}</div>
              <small class="text-muted">${mov.date}</small>
            </div>
            <div class="col ms-auto text-end">
              <span class="badge bg-success">Completado</span>
              <span class="badge bg-${clase}">
                ${emoji} ${signo}$${mov.amount.toLocaleString("es-CL")}
              </span>
            </div>
          </div>
        </li>
      `);
    });
  }
});
