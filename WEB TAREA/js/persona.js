class Persona {
    constructor(cedula, nombre, apellido, fecha, edad, sexo, estado, correo, telefono, celular, comentario){
    this._cedula=cedula;
    this._nombre=nombre;
    this._apellido=apellido;
    this._fecha=fecha;
    this._edad=edad;
    this._sexo=sexo;
    this._estado=estado;
    this._correo=correo;
    this._telefono=telefono;
    this._celular=celular;
    this._comentario=comentario;
}

    get cedula(){
        return this._cedula;
    }
    set cedula(cedula){
        return this._cedula=cedula;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        return this._apellido=apellido;
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(fecha){
        return this._fecha=fecha;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        return this._edad=edad;
    }
    get sexo(){
        return this._sexo;
    }
    set sexo(sexo){
        return this._sexo=sexo;
    }
    get estado(){
        return this._estado;
    }
    set estado(estado){
        return this._estado=estado;
    }
    get correo(){
        return this._correo;
    }
    set correo(correo){
        return this._correo=correo;
    }
    get telefono(){
        return this._telefono;
    }
    set telefono(telefono){
        return this._telefono=telefono;
    }
    get celular(){
        return this._celular;
    }
    set celular(celular){
        return this._celular=celular;
    }
    get comentario(){
        return this._comentario;
    }
    set comentario(comentario){
        return this._comentario=comentario;
    }

}