<!DOCTYPE html>
<htmllang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible"content="IE=edge">
        <meta name="viewport"content="width=device-width, initial-scale=1.0">
<title>Personas</title>

</head>
<body>
    <h1 class="page-header">Personas</h1>
    <div class="well well-sm text-right">
        <a class="btn btn-primary" href="?m=nuevo">Agregar Persona</a>
    </div>
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Numero Identificación</th>
                <th>Nombres</th>
                <th>Apellido</th>
                <th>Correo Electronico</th>
                <th>Telefono</th>
                <th>Acción</th>
                <th>
                </th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($dato as $key=> $value)
                foreach($value as $va): ?>
             <tr>
                <td><?php echo $va["documento_identidad"];?></td>
                <td><?php echo $va["nombre"];?></td>
                <td><?php echo $va["apellido"];?></td>
                <td><?php echo $va["email"]; ?></td>
                <td><?php echo $va["telefono"]; ?></td>
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

</body>
</html>