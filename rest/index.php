<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__.'../../vendor/autoload.php';
require_once __DIR__.'/services/UserService.class.php';
require_once __DIR__.'/services/CompatibilityService.class.php';
require_once __DIR__.'/services/SignService.class.php';
require_once __DIR__.'/services/HoroscopeService.class.php';
require_once __DIR__.'/services/CardService.class.php';
require_once __DIR__.'/services/FavouriteCardService.class.php';
require_once __DIR__.'/dao/BaseDao.class.php';
require_once __DIR__.'/dao/CompatibilityDao.class.php';
require_once __DIR__.'/dao/SignDao.class.php';
require_once __DIR__.'/dao/UserDao.class.php';
require_once __DIR__.'/dao/CardDao.class.php';
require_once __DIR__.'/dao/FavouriteCardDao.class.php';

Flight::set('flight.log_errors', true);
Flight::register('userDao', 'UserDao');
Flight::register('compatibilityDao', 'CompattibilityDao');
Flight::register('signDao', 'SignDao');
Flight::register('cardDao', 'CardDao');
Flight::register('favouriteCardDao', 'FavouriteCardDao');
Flight::register('userService', 'UserService');
Flight::register('compatibilityService', 'CompatibilityService');
Flight::register('signService', 'SignService');
Flight::register('horoscopeService', 'HoroscopeService');
Flight::register('cardService', 'CardService');
Flight::register('favouriteCardService', 'FavouriteCardService');

/*Flight::route('/*', function(){

    //return TRUE;
    //perform JWT decode
    $path = Flight::request()->url;
    if ($path == '/login' || $path == '/register' || $path == '/docs.json') return TRUE;
    $headers = getallheaders();
    if (@!$headers['Authorization']){
        Flight::json(["message" => $path], 403);
        Flight::json(["message" => "Authorization is missing"], 403);
        return FALSE;
    }else{
        try {
            $decoded = (array)JWT::decode($headers['Authorization'], new Key(Config::JWT_SECRET(), 'HS256'));
            Flight::set('user', $decoded);
            return TRUE;
        } catch (\Exception $e) {
            Flight::json(["message" => "Authorization token is not valid"], 403);
            return FALSE;
        }
    }
  });

  Flight::route('GET /docs.json', function(){
    $openapi = \OpenApi\scan('routes');
    header('Content-Type: application/json');
    echo $openapi->toJson();
  });*/

require_once __DIR__.'/routes/userRoutes.php';
require_once __DIR__.'/routes/CompatibilityRoutes.php';
require_once __DIR__.'/routes/SignRoutes.php';
require_once __DIR__.'/routes/horoscopeRoutes.php';
require_once __DIR__.'/routes/cardRoutes.php';
require_once __DIR__.'/routes/FavouriteCardRoutes.php';



Flight::start();
