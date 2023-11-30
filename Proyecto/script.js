const cars = [
    { id: 1, marca: 'Ford', modelo: 'Fiesta', color:'Rojo', año:'2023', combustible:'Gasolina', tipo:'Deportivo', capacidad:'5 pasajeros', seguridad:'Frenos ABS', transmision:'Automatica', infoentretenimiento:'Pantalla tactil'},
    { id: 2, marca: 'Chevrolet', modelo: 'Equinox', color:'Gris metálico', año:'2023', combustible:'Gasolina', tipo:'Deportivo', capacidad:'5 pasajeros', seguridad:'Cámara de visión trasera', transmision:'Automatica', infoentretenimiento:'Pantalla tactil con Bluetooth'},
    { id: 3, marca: 'BMW', modelo: 'M4', color:'Negro mate', año:'2023', combustible:'Gasolina', tipo:'Deportivo', capacidad:'4 pasajeros', seguridad:'Sistema de frenos de alto rendimiento', transmision:'Automática de doble embrague', infoentretenimiento:'Pantalla táctil con sistema de navegación integrado'},
    { id: 4, marca: 'Volkswagen', modelo: 'Beetle', color:'Amarillo brillante', año:'2022', combustible:'Gasolina', tipo:'Clásico', capacidad:'4 pasajeros', seguridad:'Airbags frontales y laterales', transmision:'Manual', infoentretenimiento:'Sistema de audio con pantalla táctil '},
    { id: 5, marca: 'Toyota', modelo: 'Rav4', color: 'Azul metálico', año: '2022', combustible: 'Híbrido', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Sistema de asistencia de frenado', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 8 pulgadas' },
    { id: 6, marca: 'Honda', modelo: 'Civic', color: 'Plateado', año: '2023', combustible: 'Gasolina', tipo: 'Sedán', capacidad: '5 pasajeros', seguridad: 'Sistema de alerta de colisión frontal', transmision: 'CVT', infoentretenimiento: 'Pantalla táctil de 7 pulgadas' },
    { id: 7, marca: 'Nissan', modelo: 'Altima', color: 'Blanco perla', año: '2022', combustible: 'Gasolina', tipo: 'Sedán', capacidad: '5 pasajeros', seguridad: 'Control de tracción', transmision: 'Automática', infoentretenimiento: 'Sistema de sonido premium' },
    { id: 8, marca: 'Ford', modelo: 'Escape', color: 'Verde oscuro', año: '2023', combustible: 'Híbrido', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Sistema de monitoreo de punto ciego', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 10 pulgadas' },
    { id: 9, marca: 'Hyundai', modelo: 'Tucson', color: 'Gris plata', año: '2022', combustible: 'Gasolina', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Asistente de mantenimiento de carril', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 8 pulgadas con Apple CarPlay y Android Auto' },
    { id: 10, marca: 'Mazda', modelo: 'CX-5', color: 'Rojo vino', año: '2023', combustible: 'Gasolina', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Frenos de disco en las cuatro ruedas', transmision: 'Automática', infoentretenimiento: 'Sistema de sonido Bose' },
    { id: 11, marca: 'Kia', modelo: 'Soul', color: 'Amarillo brillante', año: '2022', combustible: 'Eléctrico', tipo: 'Crossover', capacidad: '5 pasajeros', seguridad: 'Cámara de retroceso', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 10 pulgadas' },
    { id: 12, marca: 'Audi', modelo: 'A4', color: 'Negro', año: '2023', combustible: 'Gasolina', tipo: 'Sedán', capacidad: '5 pasajeros', seguridad: 'Sistema de alerta de cambio de carril', transmision: 'Automática', infoentretenimiento: 'Sistema de sonido Bang & Olufsen' },
    { id: 13, marca: 'Subaru', modelo: 'Outback', color: 'Verde bosque', año: '2022', combustible: 'Gasolina', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Control de crucero adaptativo', transmision: 'CVT', infoentretenimiento: 'Pantalla táctil de 11 pulgadas' },
    { id: 14, marca: 'Mercedes-Benz', modelo: 'GLE', color: 'Plata diamante', año: '2023', combustible: 'Híbrido enchufable', tipo: 'SUV', capacidad: '7 pasajeros', seguridad: 'Asistente de estacionamiento automático', transmision: 'Automática', infoentretenimiento: 'Sistema de navegación 3D' },
    { id: 15, marca: 'Jeep', modelo: 'Wrangler', color: 'Azul oscuro', año: '2022', combustible: 'Gasolina', tipo: 'Todo terreno', capacidad: '4 pasajeros', seguridad: 'Barra de estabilidad lateral', transmision: 'Manual', infoentretenimiento: 'Pantalla táctil resistente al agua' },
    { id: 16, marca: 'Lexus', modelo: 'RX', color: 'Blanco perlado', año: '2023', combustible: 'Híbrido', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Sistema de mitigación de colisión', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 12.3 pulgadas' },
    { id: 17, marca: 'Ford', modelo: 'Mustang', color: 'Rojo racing', año: '2022', combustible: 'Gasolina', tipo: 'Deportivo', capacidad: '4 pasajeros', seguridad: 'Frenos de alto rendimiento Brembo', transmision: 'Manual', infoentretenimiento: 'Pantalla táctil de 8 pulgadas' },
    { id: 18, marca: 'Tesla', modelo: 'Model Y', color: 'Plata metálico', año: '2023', combustible: 'Eléctrico', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Autopilot con capacidad de conducción autónoma', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 15 pulgadas' },
    { id: 19, marca: 'Mitsubishi', modelo: 'Outlander', color: 'Gris perla', año: '2022', combustible: 'Híbrido enchufable', tipo: 'SUV', capacidad: '7 pasajeros', seguridad: 'Alerta de colisión trasera', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 9 pulgadas' },
    { id: 20, marca: 'Chrysler', modelo: 'Pacifica', color: 'Azul pacífico', año: '2023', combustible: 'Híbrido', tipo: 'Minivan', capacidad: '7 pasajeros', seguridad: 'Cámara de visión surround', transmision: 'Automática', infoentretenimiento: 'Pantallas táctiles en los asientos traseros' },
    { id: 21, marca: 'Volvo', modelo: 'XC40', color: 'Azul eléctrico', año: '2023', combustible: 'Híbrido', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Sistema de frenado automático de emergencia', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 9 pulgadas' },
    { id: 22, marca: 'Acura', modelo: 'MDX', color: 'Gris grafito', año: '2022', combustible: 'Gasolina', tipo: 'SUV', capacidad: '7 pasajeros', seguridad: 'Asistente de mantenimiento de carril', transmision: 'Automática', infoentretenimiento: 'Sistema de sonido premium' },
    { id: 23, marca: 'Porsche', modelo: '911', color: 'Negro clásico', año: '2023', combustible: 'Gasolina', tipo: 'Deportivo', capacidad: '2 pasajeros', seguridad: 'Sistema de control de tracción', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 10 pulgadas' },
    { id: 24, marca: 'Jaguar', modelo: 'F-PACE', color: 'Rojo fuego', año: '2022', combustible: 'Híbrido', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Monitoreo de punto ciego', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 11 pulgadas' },
    { id: 25, marca: 'Ram', modelo: '1500', color: 'Blanco brillante', año: '2023', combustible: 'Gasolina', tipo: 'Camioneta', capacidad: '6 pasajeros', seguridad: 'Control de estabilidad electrónico', transmision: 'Automática', infoentretenimiento: 'Sistema Uconnect con pantalla táctil' },
    { id: 26, marca: 'Infiniti', modelo: 'Q50', color: 'Plata lunar', año: '2022', combustible: 'Gasolina', tipo: 'Sedán', capacidad: '5 pasajeros', seguridad: 'Cámara de visión periférica', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 8 pulgadas' },
    { id: 27, marca: 'Land Rover', modelo: 'Discovery', color: 'Verde safari', año: '2023', combustible: 'Híbrido enchufable', tipo: 'SUV', capacidad: '7 pasajeros', seguridad: 'Asistente de descenso de colina', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 10 pulgadas' },
    { id: 28, marca: 'Buick', modelo: 'Encore', color: 'Dorado metálico', año: '2022', combustible: 'Gasolina', tipo: 'Crossover', capacidad: '5 pasajeros', seguridad: 'Alerta de colisión frontal', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 7 pulgadas' },
    { id: 29, marca: 'Cadillac', modelo: 'XT6', color: 'Plata cromada', año: '2023', combustible: 'Híbrido', tipo: 'SUV', capacidad: '6 pasajeros', seguridad: 'Sistema de advertencia de cambio de carril', transmision: 'Automática', infoentretenimiento: 'Sistema de entretenimiento trasero con pantallas táctiles' },
    { id: 30, marca: 'Maserati', modelo: 'Levante', color: 'Azul profundo', año: '2022', combustible: 'Gasolina', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Frenos carbono-cerámicos', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 12 pulgadas' },
    { id: 31, marca: 'Hyundai', modelo: 'Santa Fe', color: 'Rojo pasión', año: '2023', combustible: 'Híbrido', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Sistema de alerta de colisión trasera', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 10 pulgadas' },
    { id: 32, marca: 'Lamborghini', modelo: 'Huracán', color: 'Amarillo intenso', año: '2022', combustible: 'Gasolina', tipo: 'Deportivo', capacidad: '2 pasajeros', seguridad: 'Sistema de control de tracción avanzado', transmision: 'Automática de doble embrague', infoentretenimiento: 'Pantalla táctil de 8 pulgadas' },
    { id: 33, marca: 'Subaru', modelo: 'Impreza', color: 'Azul zafiro', año: '2023', combustible: 'Gasolina', tipo: 'Sedán', capacidad: '5 pasajeros', seguridad: 'Sistema de frenado precolisión', transmision: 'Manual', infoentretenimiento: 'Pantalla táctil de 6.5 pulgadas' },
    { id: 34, marca: 'Audi', modelo: 'Q7', color: 'Gris oscuro', año: '2022', combustible: 'Híbrido enchufable', tipo: 'SUV', capacidad: '7 pasajeros', seguridad: 'Asistente de estacionamiento', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 12.3 pulgadas' },
    { id: 35, marca: 'Ford', modelo: 'Explorer', color: 'Verde esmeralda', año: '2023', combustible: 'Gasolina', tipo: 'SUV', capacidad: '6 pasajeros', seguridad: 'Sistema de monitoreo de punto ciego con alerta de tráfico cruzado', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 10.1 pulgadas' },
    { id: 36, marca: 'Mazda', modelo: 'MX-5 Miata', color: 'Rojo cereza', año: '2022', combustible: 'Gasolina', tipo: 'Deportivo', capacidad: '2 pasajeros', seguridad: 'Airbags laterales integrados en los asientos', transmision: 'Manual', infoentretenimiento: 'Sistema de audio Bose' },
    { id: 37, marca: 'Tesla', modelo: 'Model S', color: 'Blanco perlado', año: '2023', combustible: 'Eléctrico', tipo: 'Sedán', capacidad: '5 pasajeros', seguridad: 'Autopilot mejorado con reconocimiento de señales de tráfico', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 17 pulgadas' },
    { id: 38, marca: 'GMC', modelo: 'Terrain', color: 'Negro onyx', año: '2022', combustible: 'Gasolina', tipo: 'Crossover', capacidad: '5 pasajeros', seguridad: 'Cámara de visión frontal', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 7 pulgadas' },
    { id: 39, marca: 'Nissan', modelo: '370Z', color: 'Plata relámpago', año: '2023', combustible: 'Gasolina', tipo: 'Deportivo', capacidad: '2 pasajeros', seguridad: 'Control de tracción y estabilidad', transmision: 'Automática', infoentretenimiento: 'Sistema de sonido Bose' },
    { id: 40, marca: 'Jeep', modelo: 'Cherokee', color: 'Azul marino', año: '2022', combustible: 'Gasolina', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Sistema de frenado automático de emergencia con detección de peatones', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 8.4 pulgadas' },
    { id: 41, marca: 'Chevrolet', modelo: 'Traverse', color: 'Blanco nácar', año: '2023', combustible: 'Híbrido enchufable', tipo: 'SUV', capacidad: '7 pasajeros', seguridad: 'Alerta de colisión con frenado automático de emergencia', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 9 pulgadas' },
    { id: 42, marca: 'Mercedes-Benz', modelo: 'CLA', color: 'Gris plata', año: '2022', combustible: 'Gasolina', tipo: 'Coupé', capacidad: '5 pasajeros', seguridad: 'Asistente de cambio de carril', transmision: 'Automática', infoentretenimiento: 'Sistema de navegación MBUX' },
    { id: 43, marca: 'Toyota', modelo: 'Highlander', color: 'Verde oliva', año: '2023', combustible: 'Híbrido', tipo: 'SUV', capacidad: '8 pasajeros', seguridad: 'Asistente de mantenimiento de carril con dirección asistida', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 12.3 pulgadas' },
    { id: 44, marca: 'Acura', modelo: 'TLX', color: 'Azul cielo', año: '2022', combustible: 'Gasolina', tipo: 'Sedán', capacidad: '5 pasajeros', seguridad: 'Sistema de mitigación de colisión frontal', transmision: 'Automática', infoentretenimiento: 'Sistema de sonido premium ELS Studio' },
    { id: 45, marca: 'Volkswagen', modelo: 'Tiguan', color: 'Naranja atardecer', año: '2023', combustible: 'Gasolina', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Sistema de alerta de tráfico cruzado trasero', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 8 pulgadas' },
    { id: 46, marca: 'Ford', modelo: 'Ranger', color: 'Negro sólido', año: '2022', combustible: 'Gasolina', tipo: 'Camioneta', capacidad: '5 pasajeros', seguridad: 'Control de descenso en pendientes', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 8 pulgadas con Ford Sync' },
    { id: 47, marca: 'Lexus', modelo: 'ES', color: 'Plata cromo', año: '2023', combustible: 'Híbrido', tipo: 'Sedán', capacidad: '5 pasajeros', seguridad: 'Sistema de alerta de salida de carril', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 10.2 pulgadas' },
    { id: 48, marca: 'Jeep', modelo: 'Grand Cherokee', color: 'Gris granito', año: '2022', combustible: 'Gasolina', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Control de velocidad crucero adaptativo', transmision: 'Automática', infoentretenimiento: 'Sistema de navegación Uconnect' },
    { id: 49, marca: 'Nissan', modelo: 'Sentra', color: 'Rojo rubí', año: '2023', combustible: 'Gasolina', tipo: 'Sedán', capacidad: '5 pasajeros', seguridad: 'Frenos de disco en las cuatro ruedas', transmision: 'CVT', infoentretenimiento: 'Pantalla táctil de 7 pulgadas' },
    { id: 50, marca: 'Subaru', modelo: 'Forester', color: 'Verde musgo', año: '2022', combustible: 'Gasolina', tipo: 'SUV', capacidad: '5 pasajeros', seguridad: 'Asistente de frenado precolisión', transmision: 'Automática', infoentretenimiento: 'Pantalla táctil de 8 pulgadas' }
];




function createCarRow(car, table) {
  if (table && table.insertRow) {
function crearFilaCarros(car, table) {
  const row = table.insertRow();

  const idCell = row.insertCell();
  const marcaCell = row.insertCell();
  const modeloCell = row.insertCell();
  const colorCell = row.insertCell();
  const anoCell = row.insertCell();
  const tipoCell = row.insertCell();
  const actionsCell = row.insertCell();

  idCell.textContent = car.id;
  marcaCell.textContent = car.marca;
  modeloCell.textContent = car.modelo;
  colorCell.textContent = car.color;
  anoCell.textContent = car.año;
  tipoCell.textContent = car.tipo;

  const editButton = document.createElement('button');
  const editIcon = document.createElement('i');
  editIcon.className = 'fas fa-pencil-alt';
  editButton.appendChild(editIcon);
  actionsCell.appendChild(editButton);

  const deleteButton = document.createElement('button');
  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fas fa-trash-alt';
  deleteButton.appendChild(deleteIcon);
  actionsCell.appendChild(deleteButton);


  editButton.addEventListener('click', function () {
    editarCarro(car.id);
  });

  deleteButton.addEventListener('click', function () {
    eliminarCarro(car.id);
  });

}} else {
  console.error("La tabla no es un objeto válido o no tiene el método insertRow.");
}
  };

function editarCarro(carId) {
  const table = document.getElementById('carsTable');

  if (table) {
      location.href = "edit.html";
      llenarCampos(carId);
      console.log('Editar carro con ID:', carId);
  } else {
      console.error("No se encontró el elemento de la tabla (carsTable).");
  }
}


function eliminarCarro(carId) {
  console.log('Eliminar carro con ID:', carId);
}

const carroXPagina = 10;
let paginaActual = 1;

function actualizarTabla() {
  const table = document.getElementById('carsTable');
  table.innerHTML = '';

  const startIndex = (paginaActual - 1) * carroXPagina;
  const endIndex = startIndex + carroXPagina;

  cars.slice(startIndex, endIndex).forEach(car => {
    crearFilaCarros(car, table);
  });
}

function actualizarBotonesPaginacion() {
  const anteriorBtn = document.getElementById('Anterior');
  const siguienteBtn = document.getElementById('Siguiente');
  const actualSpan = document.getElementById('Actual');

  anteriorBtn.disabled = paginaActual === 1;
  siguienteBtn.disabled = paginaActual === Math.ceil(cars.length / carroXPagina);

  actualSpan.textContent = paginaActual;
}

document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById('carsTable');

  cars.forEach(car => {
    crearFilaCarros(car, table);
  });

  actualizarTabla();
  actualizarBotonesPaginacion();

  document.getElementById('Anterior').addEventListener('click', function () {
    if (paginaActual > 1) {
      paginaActual--;
        actualizarTabla();
        actualizarBotonesPaginacion();
    }
});

document.getElementById('Siguiente').addEventListener('click', function () {
    if (paginaActual < Math.ceil(cars.length / carroXPagina)) {
      paginaActual++;
        actualizarTabla();
        actualizarBotonesPaginacion();
    }
});

}); 

const crearCarroForm = document.getElementById("crearCarroForm");
const limpiarCamposBtn = document.getElementById("limpiarCampos");
const atrasBtn = document.getElementById("atras");

crearCarroForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

limpiarCamposBtn.addEventListener("click", function () {
  crearCarroForm.reset();
});

atrasBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});


function vistaCrear() {
location.href = "create.html";
}

