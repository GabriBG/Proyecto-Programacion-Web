const personas = [
    new Persona('1005896465', 'Gabriel', 'Bahamon Guerrero', '12/08/2003', '19', 'Masculino', 'Soltero', 'gabrielbg2218@gmail.com', 'telefono', '3126893069', 'Perfecto')
];

function mostrarPersonas() {
    let texto = '';

    for (let persona of personas) {
        textp += `<li>${persona.cedula} ${persona.nombre} ${persona.apellido} ${persona.fecha} ${persona.edad} ${persona.sexo} ${persona.estado} ${persona.correo} ${persona.telefono} ${persona.celular} ${persona.comentario}</li>`;
    }

    document.getElementById('personas').inerHTML = texto;
}

function agregarPersona() {
    const formu = document.forms['form1'];
    const cedula = formu['cedula'];
    const nombre = formu['nombre'];
    const apellido = formu['apellido'];
    const fecha = formu['fecha'];
    const edad = formu['edad'];
    const sexo = formu['sexo'];
    const estado = formu['estado'];
    const correo = formu['correo'];
    const telefono = formu['telefono'];
    const celular = formu['celular'];
    const comentario = formu['comentario'];

        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
}