<?php

Flight::route("GET /compatibility/@sign1/@sign2",  function($sign1,$sign2){
  $sign1=Flight::signService()->getIdByName($sign1);
  $sign1=$sign1["idSigns"];
  $sign2=Flight::signService()->getIdByName($sign2);
  $sign2=$sign2["idSigns"];

    if($sign1>$sign2) {
  $temp = $sign1;
  $sign1 = $sign2;
  $sign2 = $temp;
  }
   Flight::json(Flight::compatibilityService()->getCompatibility($sign1,$sign2));

});

 ?>
