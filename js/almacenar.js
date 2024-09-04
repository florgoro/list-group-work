// Obtener referencias a los elementos del DOM
const itemInput = document.getElementById('item');
const agregarBtn = document.getElementById('agregar');
const limpiarBtn = document.getElementById('limpiar');
const contenedor = document.getElementById('contenedor');

// Función para cargar los ítems desde localStorage y actualizar la vista
function cargarItems() {
  const items = JSON.parse(localStorage.getItem('listadoItems')) || [];
  contenedor.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.className = 'list-group-item';
    contenedor.appendChild(li);
  });
}

// Función para agregar un nuevo ítem
function agregarItem() {
  const nuevoItem = itemInput.value.trim();
  if (nuevoItem) {
    const items = JSON.parse(localStorage.getItem('listadoItems')) || [];
    items.push(nuevoItem);
    localStorage.setItem('listadoItems', JSON.stringify(items));
    cargarItems();
    itemInput.value = ''; // Limpiar el campo de entrada
  }
}

// Función para limpiar el listado
function limpiarItems() {
  localStorage.removeItem('listadoItems');
  cargarItems();
}

// Asignar eventos a los botones
agregarBtn.addEventListener('click', agregarItem);
limpiarBtn.addEventListener('click', limpiarItems);

// Cargar los ítems al cargar la página
window.addEventListener('load', cargarItems);
