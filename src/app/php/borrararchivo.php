<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    echo $_GET[cod];
    echo $_GET[id];
    echo $_GET[rut];

    $filePath = $_GET[rut];
    unlink($filePath);
    
    require("conexion.php");
    $con=retornarConexion();

    $sql = "delete from finalista_documentos where codigo = '$_GET[cod]' and idDocumento = $_GET[id]";
    echo $sql;

    mysqli_query($con,"delete from finalista_documentos where codigo = '$_GET[cod]' and idDocumento = $_GET[id]");


    class Result {}
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
    
    $response->resultado = 'OK';
    $response->mensaje = 'SE BORRO EXITOSAMENTE';
    
    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO */
    
?>