<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  $method = $_SERVER['REQUEST_METHOD'];
  if($method == "OPTIONS") {
      die();
  }

  // header('Access-Control-Allow-Origin: *');
  // header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select d.idDocumento, d.nombreDocumento, f.nombreArchivo, f.codigo, f.ruta, f.fechaCarga, f.id from documentos d LEFT JOIN finalista_documentos f on d.idDocumento = f.idDocumento and f.codigo = '$_GET[idf]' order by d.idDocumento");

  while ($reg=mysqli_fetch_array($registros))
  {
    $vec[]=$reg;
  }

  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>
