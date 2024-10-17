document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    

    // Llamar a la función para agregar los datos a la tabla
    agregarFilaATabla(nombre, email,telefono);

    // Limpiar el formulario
    document.getElementById('userForm').reset();
});

function agregarFilaATabla(nombre, email,telefono) {
    // Obtener la tabla y su cuerpo (tbody)
    const tableBody = document.getElementById('Table').getElementsByTagName('tbody')[0];

    // Crear una nueva fila
    const newRow = tableBody.insertRow();

    // Insertar celdas y asignar valores
    const nombreCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const telefonoCell = newRow.insertCell(1);


    nombreCell.textContent = nombre;
    emailCell.textContent = email;
    telefonoCell.textContent = telefono;
}