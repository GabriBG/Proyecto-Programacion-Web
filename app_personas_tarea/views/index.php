<!DOCTYPE html>
<htmllang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
        <link href="css/estilo.css" rel="stylesheet">
        <title>Docentes</title>

    </head>

    <body>
        <h1 class="page-header">Docentes</h1>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Numero de identificación</th>
                    <th>Genero</th>
                    <th>Télefono</th>
                    <th>Dirección</th>
                    <th>Email</th>
                    <th>Acción</th>
                    <th>
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($dato as $key => $value)
                    foreach ($value as $va) : ?>
                    <tr>
                        <td><?php echo $va["nombre"]; ?></td>
                        <td><?php echo $va["apellidos"]; ?></td>
                        <td><?php echo $va["numero_identificacion"]; ?></td>
                        <td><?php echo $va["genero"]; ?></td>
                        <td><?php echo $va["telefono"]; ?></td>
                        <td><?php echo $va["direccion"]; ?></td>
                        <td><?php echo $va["email"]; ?></td>
                        <td>
                            <i class="glyphicon glyphicon-edit"><a href="?m=editar&id= <?php echo $va["id"]; ?>">Editar</a></i>
                        </td>
                        <td>
                            <i class="glyphicon glyphicon-remove"><a href="?m=eliminar&id=<?php echo $va["id"]; ?>">Eliminar</a></i>
                        </td>
                    </tr>
                <?php endforeach; ?>

            </tbody>
        </table>
        <div class="well well-sm text-right, buttom">
            <a class="btn btn-primary" href="?m=nuevo">Agregar Docente</a>
        </div>

    </body>

    </html>