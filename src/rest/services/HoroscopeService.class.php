<?php
  class HoroscopeService {
    private function setCurlOptions($ch, $url){
      curl_setopt($ch, CURLOPT_HTTPHEADER, $this->headers);
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    }
    public function getDailyHoroscope($StarSign,$day){


      $ch = curl_init(); // initialize cURL_PHP connection
      $url = 'https://aztro.sameerkumar.website/?sign='.$StarSign.'&day='.$day;


      $this->setCurlOptions($ch, $url);

      $response = curl_exec($ch); // get results

      curl_close($ch); // close connection

      $json = json_decode($response, true); // transform result from JSON (or whatever) into array
      return $json;

    }
}
?>
