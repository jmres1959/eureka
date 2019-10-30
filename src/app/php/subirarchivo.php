<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
    
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARDA EN LA VARIABLE
    
    $codigo = $params->codigo;
    $nombre = $params->nombre;
    $idDocumento = $params->idDocumento;
    $nombreArchivo = $params->nombreArchivo;
    $archivo = $params->base64textString;
    $archivo = base64_decode($archivo);
    $fecha = date();

    $fileDir = $_SERVER['DOCUMENT_ROOT']."/registro/documentos/".$codigo;
    mkdir($fileDir, 0700);
    
    $filePath = $_SERVER['DOCUMENT_ROOT']."/registro/documentos/".$codigo."/".$nombreArchivo;
    file_put_contents($filePath, $archivo);
    
    require("conexion.php");
    $con=retornarConexion();

    $sql = "insert into finalista_documentos(codigo,idDocumento,ruta,nombreArchivo) values
    ('$codigo',$idDocumento,'$filePath','$nombreArchivo')";
    echo $sql;

    mysqli_query($con,"insert into finalista_documentos(codigo,idDocumento,ruta,nombreArchivo) values
    ('$codigo',$idDocumento,'$filePath','$nombreArchivo')");


    class Result {}
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
    
    $response->resultado = 'OK';
    $response->mensaje = 'SE SUBIO EXITOSAMENTE';
    
    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO */
    
?>