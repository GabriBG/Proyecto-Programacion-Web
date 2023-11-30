<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    <link href="css/estilo.css" rel="stylesheet">

    <title>Editar Docentes</title>
</head>

<body>
    <h1>Editar Docentes</h1>
    <hr>

    <form action="">

        <?php foreach ($dato as $key => $value)
            foreach ($value as $v) : ?>

            <div class="form-group">
                <div class="form-group">
                    <label>Nombre</label><input type="text" name="nombre" value="<?php echo $v['nombre'] ?>" class="form-control" placeholder="Ingrese su Nombre" data-validacion-tipo="requerido|min:7" />
                </div>

                <div class="form-group"><label>Apellido</label>
                    <input type="text" name="apellido" value="<?php echo $v['apellidos'] ?>" class="form-control" placeholder="Ingrese sus Apellidos" data-validacion-tipo="requerido|date" />
                </div>

                <label>Documento de Identidad</label>
                <input type="text" name="documento_identidad" value="<?php echo
                                                                        $v['numero_identificacion'] ?>" class="form-control" placeholder="Ingrese su numero de Indentificación" data-validacion-tipo="requerido|min:3" />
            </div>

            <div class="form-group"><label>Genero</label>
                <input type="text" name="genero" value="<?php echo $v['genero'] ?>" class="form-control" placeholder="Ingrese su genero" data-validacion-tipo="requerido|min:8" />
            </div>

            <div class="form-group"><label>Telefono</label>
                <input type="text" name="telefono" value="<?php echo $v['telefono'] ?>" class="form-control" placeholder="Ingrese su Telefono" data-validacion-tipo="requerido|min:8" />
            </div>

            <div class="form-group"><label>Direccion</label>
                <input type="text" name="direccion" value="<?php echo $v['direccion'] ?>" class="form-control" placeholder="Ingrese su direccion" data-validacion-tipo="requerido|min:8" />
            </div>

            <div class="form-group"><label>Email</label>
                <input type="text" name="email" value="<?php echo $v['email'] ?>" class="form-control" placeholder="Ingrese su Email" data-validacion-tipo="requerido|min:8" />
            </div>

            <input type="hidden" name="id" value="<?php echo $v['id'] ?>">
            <input type="hidden" name="m" value="update">
            <hr />
            <div class="text-right">
                <button class="btn btn-success">Guardar</button>
            </div>
            <input type="hidden" name="n" value="atras">
            <br>
            <div class="text-right">
                <button class="btn btn-success">Atrás</button>
            </div><?php endforeach ?>
    </form>
    <hr />
</body>

</html>