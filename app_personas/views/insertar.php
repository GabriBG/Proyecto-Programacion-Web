<!DOCTYPE html>
 <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible"content="IE=edge">
        <meta name="viewport"content="width=device-width, initial-scale=1.0">
        <title>Insertar Personas</title>
    </head>
    
    <body>
        <h1>NUEVO</h1>
        <hr>
        <form action="">
            <div class="form-group">
                <label>Documento Identidad</label>
                <input type="text" name="documento_identidad" value="" class="form-control" placeholder= "Ingrese su documento de identidad" data-validacion-tipo="requerido|min:3"/></div>
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text"name="nombre"value=""class="form-control"placeholder="Ingrese sus Nombres"data-validacion-tipo="requerido|min:7"/></div>
                    <div class="form-group"><label>Apellido</label>
                    <input type="text"name="apellido"value=""class="form-control"placeholder="Ingrese sus apellidos"data-validacion-tipo="requerido|date"/></div>

                    <div class="form-group"><label>Email</label>
                    <input type="text"name="email"value=""class="form-control"placeholder="Ingrese su email"data-validacion-tipo="requerido|min:8"/></div>

                    <div class="form-group">Telefono<label>T</label>
                    <input type="text"name="telefono"value=""class="form-control"placeholder="Ingrese su telefono"data-validacion-tipo="requerido|min:8"/>

                    </div>
                    
                    <input type="hidden"name="m"value="guardar">
                    
                    <hr/>
                    <div class="text-right">
                        <button class="btn btn-success">Guardar</button>
                    </div>
                </form>
                <hr/>
            </body>
            </html>