// Obtener referencias a los elementos del DOM
const itemInput = document.getElementById('item');
const addBtn = document.getElementById('agregar');
const clearBtn = document.getElementById('limpiar');
const container = document.getElementById('contenedor');

// Función para cargar los ítems desde localStorage y actualizar la vista
function uploadItems() {
  const items = JSON.parse(localStorage.getItem('listadoItems')) || [];
  container.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.className = 'list-group-item';
    container.appendChild(li);
  });
}

// Función para agregar un nuevo ítem
function addItem() {
  const nuevoItem = itemInput.value.trim();
  if (nuevoItem) {
    const items = JSON.parse(localStorage.getItem('listadoItems')) || [];
    items.push(nuevoItem);
    localStorage.setItem('listadoItems', JSON.stringify(items));
    uploadItems();
    itemInput.value = ''; // Limpiar el campo de entrada
  }
}

// Función para limpiar el listado
function clearItems() {
  localStorage.removeItem('listadoItems');
  uploadItems();
}

// Asignar eventos a los botones
addBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearItems);

// Cargar los ítems al cargar la página
window.addEventListener('load', uploadItems);
