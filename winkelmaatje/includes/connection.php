<?php
// General settings
$host = "localhost";
$database = "cle3_webservice_ouderen";
$user = "root";
$password = "";

$db = mysqli_connect($host, $user, $password, $database)
or die("Error: " . mysqli_connect_error());;