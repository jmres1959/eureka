<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  $method = $_SERVER['REQUEST_METHOD'];
  if($method == "OPTIONS") {
      die();
  }

  $json = file_get_contents('php://input');

  $params = json_decode($json);

  require("conexion.php");
  $con=retornarConexion();

  mysqli_query($con,"update finalistas set 
    nombreInstitucionEducativa='$params->nombreInstitucionEducativa',
    direccionInstitucionEducativa='$params->direccionInstitucionEducativa',
    lugarInstitucionEducativa='$params->lugarInstitucionEducativa',
    distritoInstitucionEducativa='$params->distritoInstitucionEducativa',
    provinciaInstitucionEducativa='$params->provinciaInstitucionEducativa',
    regionInstitucionEducativa='$params->regionInstitucionEducativa',
    telefonoInstitucionEducativa='$params->telefonoInstitucionEducativa',
    faxInstitucionEducativa='$params->faxInstitucionEducativa',
    emailInstitucionEducativa='$params->emailInstitucionEducativa',
    publicaPrivada='$params->publicaPrivada',
    nombreDirector='$params->nombreDirector',
    categoriaC='$params->categoriaC',
    categoriaD='$params->categoriaD',
    tituloTrabajo='$params->tituloTrabajo',
    nombreEstudiante1='$params->nombreEstudiante1',
    direccionEstudiante1='$params->direccionEstudiante1',
    lugarEstudiante1='$params->lugarEstudiante1',
    distritoEstudiante1='$params->distritoEstudiante1',
    provinciaEstudiante1='$params->provinciaEstudiante1',
    regionEstudiante1='$params->regionEstudiante1',
    telefonoEstudiante1='$params->telefonoEstudiante1',
    emailEstudiante1='$params->emailEstudiante1',
    fechaNacimientoEstudiante1='$params->fechaNacimientoEstudiante1',
    dniEstudiante1='$params->dniEstudiante1',
    gradoEstudiosEstudiante1='$params->gradoEstudiosEstudiante1',
    nombreEstudiante2='$params->nombreEstudiante2',
    direccionEstudiante2='$params->direccionEstudiante2',
    lugarEstudiante2='$params->lugarEstudiante2',
    distritoEstudiante2='$params->distritoEstudiante2',
    provinciaEstudiante2='$params->provinciaEstudiante2',
    regionEstudiante2='$params->regionEstudiante2',
    telefonoEstudiante2='$params->telefonoEstudiante2',
    emailEstudiante2='$params->emailEstudiante2',
    fechaNacimientoEstudiante2='$params->fechaNacimientoEstudiante2',
    dniEstudiante2='$params->dniEstudiante2',
    gradoEstudiosEstudiante2='$params->gradoEstudiosEstudiante2',
    nombreDocente='$params->nombreDocente',
    direccionDocente='$params->direccionDocente',
    lugarDocente='$params->lugarDocente',
    distritoDocente='$params->distritoDocente',
    provinciaDocente='$params->provinciaDocente',
    regionDocente='$params->regionDocente',
    telefonoDocente='$params->telefonoDocente',
    emailDocente='$params->emailDocente',
    fechaNacimientoDocente='$params->fechaNacimientoDocente',
    dniDocente='$params->dniDocente',
    especialidadDocente='$params->especialidadDocente',
    codigoModularDocente='$params->codigoModularDocente',
    cargoDocente='$params->cargoDocente',
    cursoDocente='$params->cursoDocente',
    estudiosDocente='$params->estudiosDocente',
    gradosDocente='$params->gradosDocente',
    institutoUniversidad='$params->institutoUniversidad',
    titulado='$params->titulado',
    maestria='$params->maestria',
    doctorado='$params->doctorado'
    where codigo='$params->codigo'");

  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos modificados';

  header('Content-Type: application/json');
  echo json_encode($response);
?>