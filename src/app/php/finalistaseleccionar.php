<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  $method = $_SERVER['REQUEST_METHOD'];
  if($method == "OPTIONS") {
      die();
  }

  require("conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select * from finalistas where codigo = '$_GET[id]'");

  if ($reg=mysqli_fetch_array($registros))
  {
    $vec[]=$reg;
  } 
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>
