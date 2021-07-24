<?php
$destino = "luismoralesv.96@gmail.com";
$nombre = $_Post["Nombre"];
$correo = $_Post["Correo"];
$mensaje = $_Post["mensaje"];
$contenido = "Nombre: " . $nombre . "\nCorreo: " , $correo;
mail($destino,"Contacto", $contenido);
header("Location: contacto.html");
?>