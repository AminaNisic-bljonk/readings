<?php
/**
* @OA\Get(path="/DailyHoroscope/{StarSign}/{day}", tags={"aztro"}, security={{"ApiKeyAuth": {}}},
*     @OA\Parameter(in="path", name="StarSign", example="Cancer", description="Horoscope reading for selected star sign"),
*     @OA\Parameter(in="path", name="day", example="yesterday", description="Horoscope reading for selected day"),
*     @OA\Response(response="200", description="Get horoscope reading")
* )
*/

Flight::route("GET /DailyHoroscope/@StarSign/@day",  function($StarSign, $day){
   Flight::json(Flight::horoscopeService()->aztro($StarSign, $day));
});
 ?>
