<?php
  class HoroscopeService {
    function aztro($sign, $day) {
      $aztro = curl_init('https://aztro.sameerkumar.website/?sign='.$sign.'&day='.$day);
      curl_setopt_array($aztro, array(
          CURLOPT_POST => TRUE,
          CURLOPT_RETURNTRANSFER => TRUE,
          CURLOPT_HTTPHEADER => array(
              'Content-Type: application/json'
          )
      ));
      $response = curl_exec($aztro);
      if($response === FALSE){
          die(curl_error($aztro));
      }
      $responseData = json_decode($response, TRUE);
      return $responseData;
  }


    }

?>
