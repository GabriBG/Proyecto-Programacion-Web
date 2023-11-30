<?php
require_once("models/persona.php");

class personaController{
    private $model;
    function __construct(){
        $this->model=new Modelo();
    }
        // MOSTRAR PERSONA
        function index(){
            $dato= $this->model->mostrar("docente","1");
            require_once("views/index.php");
        }

// Método que llama la vista views/insertar.php
function nuevo(){
    require_once("views/insertar.php");
 }
 
 //Método que llama al modelo para insertar datos
 function guardar(){
    $nombre= $_REQUEST['nombre'];
    $apellido= $_REQUEST['apellido'];
    $documento_identidad= $_REQUEST['numero_identificacion'];
    $genero= $_REQUEST['genero'];
    $telefono= $_REQUEST['telefono'];
    $direccion= $_REQUEST['direccion'];
    $email= $_REQUEST['email'];
    $data= "'".$nombre."','".$apellido."','".$documento_identidad."','".$genero."','".$telefono."','".$direccion."',".$email."";
    $dato= $this->model->insertar("docente",$data);
    header("location: index.php");
}

function editar(){
    $id=$_REQUEST['id'];
    $dato=$this->model->mostrar("docente","id=".$id);
    require_once("views/editar.php");
}

function update(){
    $id= $_REQUEST['id'];
    $nombre= $_REQUEST['nombre'];
    $apellido= $_REQUEST['apellido'];
    $documento_identidad= $_REQUEST['numero_identificacion'];
    $genero= $_REQUEST['genero'];
    $telefono= $_REQUEST['telefono'];
    $direccion= $_REQUEST['direccion'];
    $email= $_REQUEST['email'];
    $data= "nombre='".$nombre."',apellidos='".$apellido."', numero_identificacion='".$documento_identidad."',genero='".$genero."',telefono=".$telefono."',direccion='".$direccion."',email='".$email."";$condicion= "id=".$id;
    $dato= $this->model->actualizar("docente",$data,$condicion);
    header("location: index.php");
}

function atras(){
    header("location: index.php");
}

// ELIMINAR
function eliminar(){
     $id= $_REQUEST['id'];
      $condicion= "id=".$id;$dato= $this->model->eliminar("docente",$condicion);
      header("location: index.php");
    }

    }
?>