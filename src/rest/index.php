<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/services/UserService.class.php';
require_once __DIR__.'/services/HoroscopeService.class.php';
require_once __DIR__.'/services/CardService.class.php';
require_once __DIR__.'/dao/BaseDao.class.php';
require_once __DIR__.'/dao/UserDao.class.php';
require_once __DIR__.'/dao/CardDao.class.php';


Flight::set('flight.log_errors', true);
Flight::register('userDao', 'UserDao');
Flight::register('cardDao', 'CardDao');
Flight::register('userService', 'UserService');
Flight::register('horoscopeService', 'HoroscopeService');
Flight::register('cardService', 'CardService');


require_once __DIR__.'/routes/userRoutes.php';
require_once __DIR__.'/routes/horoscopeRoutes.php';
require_once __DIR__.'/routes/cardRoutes.php';



Flight::start();
