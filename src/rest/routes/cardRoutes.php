<?php
Flight::route('GET /cards', function(){
  Flight::json(Flight::cardService()->get_all());
});

/**
* @OA\Get(path="/card", tags={"get random card"}, security={{"ApiKeyAuth": {}}},
*     @OA\Response(response="200", description="Gets random card id")
* )
*/

Flight::route('GET /random', function(){
  Flight::json(Flight::cardService()->getRandomCard(1));
});
/**
* @OA\Get(path="/card/{id}", tags={"get card by id"}, security={{"ApiKeyAuth": {}}},
*     @OA\Parameter(in="path", name="id", example="7", description="Get 7th card from table"),
*     @OA\Response(response="200", description="Gets card that matches the id that was randomly picked")
* )
*/
Flight::route('GET /card/@id', function($id){
  Flight::json(Flight::cardService()->get_by_id($id));
});

 ?>
