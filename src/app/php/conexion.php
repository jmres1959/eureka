<?php
function retornarConexion() {
  $con=mysqli_connect("www.iprofesional.com.pe","iprofesi_jose","pepito1995","iprofesi_eureka2019");
  // $con=mysqli_connect("localhost","root","","eureka2019");
  return $con;
}
?>
