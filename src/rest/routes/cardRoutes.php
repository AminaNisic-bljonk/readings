<?php
Flight::route('GET /cards', function(){
  Flight::json(Flight::cardService()->get_all());
});

Flight::route('GET /random', function(){
  Flight::json(Flight::cardService()->getRandomCard(1));
});

Flight::route('GET /card/@id', function($id){
  Flight::json(Flight::cardService()->get_by_id($id));
});

 ?>
