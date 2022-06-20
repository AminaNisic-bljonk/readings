<?php
Flight::route("GET /DailyHoroscope/@StarSign/@day",  function($StarSign, $day){
   Flight::json(Flight::horoscopeService()->aztro($StarSign, $day));
});
 ?>
