<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible"content="IE=edge">
        <meta name="viewport"content="width=device-width, initial-scale=1.0">
        <title>Editar Persona</title>
    </head>
    
    <body>
        <h1>Editar Persona</h1>
        <hr>

        <form action="">
            
        <?php foreach($dato as $key=> $value)
            foreach($value as $v): ?>
            
        <div class="form-group">
            <label>Documento Identidad</label>
            <input type="text"name="documento_identidad"value="<?php echo 
            $v['documento_identidad'] ?>"class="form-control"placeholder="Ingrese su numero de Indentificación"data-validacion-tipo="requerido|min:3"/></div>
            <div class="form-group"><label>nombre</label><input type="text"name="nombre"value="<?php echo $v['nombre'] ?>"class="form-control"placeholder="Ingrese su Nombre"data-validacion-tipo="requerido|min:7"/>
        </div>
        <div class="form-group"><label>Apellido</label>
        <input type="text"name="apellido"value="<?php echo $v['apellido'] ?>"class="form-control"placeholder="Ingrese sus Apellidos"data-validacion-tipo="requerido|date"/></div>
        <div class="form-group"><label>Email</label><input type="text"name="email"value="<?php echo $v['email'] ?>"class="form-control"placeholder="Ingrese su Email"data-validacion-tipo="requerido|min:8"/></div>
        <div class="form-group">Telefono<label>T</label><input type="text"name="telefono"value="<?php echo$v['telefono'] ?>"class="form-control"placeholder="Ingrese su Telefono"data-validacion-tipo="requerido|min:8"/></div>
        <input type="hidden"name="id"value="<?php echo $v['id'] ?>"><input type="hidden"name="m"value="update"><hr/><div class="text-right">
            <button class="btn btn-success">Guardar</button>
        </div><?php endforeach?>
    </form>
    <hr/>
</body>
</html>