<?php


Flight::route("POST /addFavourite",  function(){
    $data = Flight::request()->data->getData();
    $favourite = Flight::favouriteCardService()->add($data);
    Flight::json($favourite);}
 );




 Flight::route("POST /favourites", function(){

  $user = Flight::request()->data->getData();
  $id = $user['id'];
  $favourites = Flight::favouriteCardService()->getFavouriteById($id);
  Flight::json($favourites);
 });
