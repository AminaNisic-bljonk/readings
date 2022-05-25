<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

Flight::route('POST /register', function(){
  $data = Flight::request()->data->getData();
  $data['password'] = md5($data['password']);
  $user = Flight::userService()->add($data);
  Flight::json($user);}
);

Flight::route('POST /login', function(){
  $login = Flight::request()->data->getData();
  $user = Flight::userDao()->getUserByEmail($login['emailLogIn']);
  if (isset($user['id'])){
    if($user['password'] == md5($login['passwordLogIn'])){
      unset($user['password']);
      $jwt = JWT::encode($user, Config::JWT_SECRET(), 'HS256');
      Flight::json(['token' => $jwt]);
    }else{
      Flight::json(["message" => "Wrong password"], 404);
    }
  }else{
    Flight::json(["message" => "User doesn't exist"], 404);
  }
});
