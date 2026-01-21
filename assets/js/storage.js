// storage.js ya que aún no existe un archivo separado para manejo de almacenamiento (backend simulado)
const STORAGE_KEYS = {
  BALANCE: "kova_balance",
  MOVEMENTS: "kova_movements",
  CONTACTS: "kova_contacts",
};

function getBalance() {
  return parseInt(localStorage.getItem(STORAGE_KEYS.BALANCE)) || 0;
}

function setBalance(amount) {
  localStorage.setItem(STORAGE_KEYS.BALANCE, String(amount));
}

function initBalance() {
  if (!localStorage.getItem(STORAGE_KEYS.BALANCE)) {
    setBalance(100000); // saldo inicial
  }
}

function getContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACTS)) || [];
}

function setContacts(contacts) {
  localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
}

function addContact(contact) {
  const contacts = getContacts();
  contacts.push(contact);
  setContacts(contacts);
}

function getMovements() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.MOVEMENTS)) || [];
}

function addMovement(type, amount) {
  const movements = getMovements();

  const newMovement = {
    type, // "Depósito" | "Envío"
    amount,
    date: new Date().toLocaleString("es-CL"),
  };

  movements.push(newMovement);
  localStorage.setItem(STORAGE_KEYS.MOVEMENTS, JSON.stringify(movements));
}

document.addEventListener("DOMContentLoaded", () => {
  initBalance();
});
