<?php
require 'vendor/autoload.php';

Flight::route( '/', function()){
  echo 'Henlo World';
});

Flight::start();

?>
