const personas = [
    new Persona('Gabriel', '1005896465', 'gabrielbg2218@gmail.com', 'Matematicas', 'B1201', 'Aprobada')
];

function mostrarPersonas() {
    let texto = '';

    for (let persona of personas) {
        texto += `<li> Nombre: ${persona.nombre}   Cedula: ${persona.cedula}    Correo: ${persona.correo}    Asignatura: ${persona.asignatura}              
                Grupo: ${persona.grupo}    Solicitud: ${persona.solicitud}</li>`;
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    const formu = document.forms['form1'];
    const nombre = formu['nombre'];
    const cedula = formu['cedula'];
    const correo = formu['correo'];
    const asignatura = formu['asignatura'];
    const grupo = formu['grupo'];
    const solictud = formu['solictud'];

    const persona = new Persona(nombre.value, cedula.value, correo.value, asignatura.value, grupo.value, solicitud.value);
    personas.push(persona);
    mostrarPersonas();
}