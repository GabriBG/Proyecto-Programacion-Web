<?php
//Lamado al Controlador
require_once("controller/personaController.php");

$controller= new personaController;

//Condicion para establecer el metodo
if(isset($_GET['m'])):
    $metodo = $_GET['m'];

    if(method_exists( $controller,$metodo)):
        $controller->{$metodo}();
    endif;
else:
    $controller->index();
endif;

?>