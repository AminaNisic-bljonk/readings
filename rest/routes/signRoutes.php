<?php

Flight::route("GET /sign/@sign",  function($sign){
   Flight::json(Flight::signService()->getSignByName($sign));
});

 ?>
