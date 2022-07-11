<?php


Flight::route("POST /addFavourite",  function(){
    $data = Flight::request()->data->getData();
    $card_id = $data['card_id'];
    $user_id = $data['user_id'];
    $checked = Flight::favouriteCardService()->getIdAndCard($user_id, $card_id);
    if(!isset($checked['user_id'])){
    $favourite = Flight::favouriteCardService()->add($data);
    Flight::json($favourite);}
 });




 Flight::route("POST /favourites", function(){

  $user = Flight::request()->data->getData();
  $id = $user['id'];
  $favourites = Flight::favouriteCardService()->getFavouriteById($id);
  Flight::json($favourites);
 });
