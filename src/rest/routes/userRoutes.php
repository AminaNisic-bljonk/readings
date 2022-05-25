<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
Flight::route('GET /users', function(){
  Flight::json(Flight::userService()->get_all());
});
Flight::route('POST /register', function(){
$data = Flight::request()->data->getData();
$data['password'] = md5($data['password']);
$user = Flight::userService()->add($data);
Flight::json($user);}
);
