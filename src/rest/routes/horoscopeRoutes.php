<?php
Flight::route("GET /DailyHoroscope/@StarSign/@day",  function($StarSign, $day){
   Flight::json(Flight::HoroscopeService()->getDailyHoroscope($StarSign, $day));
});
 ?>
