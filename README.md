# Kova Pay – Wallet Digital

Proyecto Front-End desarrollado como **Proyecto Módulo #2 | ABP**.

Kova Pay es una billetera digital interactiva creada con **HTML, CSS (Bootstrap), JavaScript y jQuery**, cuyo objetivo es practicar lógica frontend, manipulación del DOM y persistencia de datos en el navegador.

---

## Tabla de contenidos

- [Objetivos](#objetivos)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Persistencia (localStorage)](#persistencia-localstorage)
- [Cómo ejecutar](#cómo-ejecutar)
- [Notas](#notas)

---

## Objetivos

- Practicar manipulación del DOM con JavaScript y jQuery.
- Capturar eventos en formularios y botones.
- Validar datos de entrada del usuario.
- Persistir información usando `localStorage`.
- Crear una interfaz responsive con Bootstrap.
- Separar responsabilidades en archivos JavaScript siguiendo buenas prácticas.

---

## Tecnologías

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)
- jQuery
- DOM API
- `localStorage`

---

## Estructura del proyecto

```txt
kova-pay/
├── login.html
├── menu.html
├── deposit.html
├── sendmoney.html
├── transactions.html
└── assets/
   ├── css/
   │  └── styles.css
   └── js/
      ├── storage.js        # Manejo de saldo, movimientos y contactos (backend simulado)
      ├── auth.js           # Lógica de inicio de sesión (simulada)
      ├── menu.js           # Interacción del menú principal
      ├── deposit.js        # Lógica del formulario de depósito
      ├── sendmoney.js      # Contactos y envío de dinero
      └── transactions.js   # Historial de movimientos y balance
```

---

## Funcionalidades

### Login (`login.html`)

- Validación básica de credenciales (simulada).
- Uso de jQuery para capturar el envío del formulario.
- Mensajes de feedback con alertas de Bootstrap.
- Redirección al menú principal en caso de éxito.

---

### Menú principal (`menu.html`)

- Muestra el **saldo actual** de la cuenta.
- Botones para:
  - Depositar dinero
  - Enviar dinero
  - Ver últimos movimientos
- Feedback visual indicando a qué pantalla se está redirigiendo.
- Redirección automática a la pantalla seleccionada.

---

### Depósito (`deposit.html`)

- Muestra el saldo actual al cargar la página.
- Permite ingresar un monto para aumentar el saldo.
- Validación de montos (positivos y con tope máximo).
- Muestra alertas de éxito usando Bootstrap.
- Muestra una leyenda con el monto depositado.
- Registra la operación como **Depósito** en el historial.
- Redirección automática al menú principal tras un breve delay.

---

### Enviar dinero (`sendmoney.html`)

- Permite agregar nuevos contactos mediante un **modal**.
- Validación de todos los campos del contacto.
- Lista dinámica de contactos frecuentes.
- Selección de contacto para habilitar el envío de dinero.
- Envío de dinero mediante un **modal de confirmación**.
- Validación de saldo disponible.
- Actualización del saldo y registro de la operación como **Envío**.
- Mensaje de confirmación visual tras el envío.

---

### Últimos movimientos (`transactions.html`)

- Lista dinámica de movimientos obtenidos desde `localStorage`.
- Muestra:
  - Tipo de movimiento
  - Monto
  - Fecha
  - Indicadores visuales (íconos y colores)
- Filtro por tipo de transacción.
- Balance actual siempre sincronizado con el estado real de la cuenta.

---

## Persistencia (`localStorage`)

La app utiliza `localStorage` como **backend simulado**, manteniendo datos entre recargas:

- **Saldo** → `kova_balance`
- **Movimientos** → `kova_movements` (array de objetos)
- **Contactos** → `kova_contacts` (array de objetos)

---

## Cómo ejecutar

1. Clona o descarga el repositorio.
2. Abre `login.html` en el navegador.
3. (Recomendado) Abrir con **Live Server** en VS Code.

---

## Notas

- Para reiniciar el estado y probar flujos desde cero puedes ejecutar en consola:
  - `localStorage.clear()`
- El proyecto está preparado para escalar a futuro (por ejemplo: autenticación real, backend, reglas de negocio más complejas).
- La separación en archivos JS mejora la mantención y lectura del código.
