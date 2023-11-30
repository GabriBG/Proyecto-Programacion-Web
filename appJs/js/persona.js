class Persona {
    constructor(nombre, cedula, correo, asignatura, grupo, solicitud) {
        this._nombre = nombre;
        this._cedula = cedula;
        this._correo = correo;
        this._asignatura = asignatura;
        this._grupo = grupo;
        this._solicitud = solicitud;
    }

    get cedula() {
        return this._cedula;
    }
    set cedula(cedula) {
        return this._cedula = cedula;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }
    get correo() {
        return this._correo;
    }
    set correo(correo) {
        return this._correo = correo;
    }
    get asignatura() {
        return this._asignatura;
    }
    set asignatura(asignatura) {
        return this._asignatura = asignatura;
    }
    get grupo() {
        return this._grupo;
    }
    set grupo(grupo) {
        return this._grupo = grupo;
    }
    get solicitud() {
        return this._solicitud;
    }
    set solicitud(solicitud) {
        return this._solicitud = solicitud;
    }

}