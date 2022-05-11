<?php
require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/UserDao.class.php';

class UserService extends BaseService {

/*check this later*/
  public function __construct() {
    parent::__construct(new UserDao());
  }
  public static function register() {
          // get data from request
          $data = Flight::request()->data->getData();

          // validate data maybe?

          // Create a user
          $user = Flight::userService()->add($data);

          // return user as JSON
          Flight::json($user);
      }

      /**
       * Login user.
       */
      public static function login() {
          // get data from request
          $data = Flight::request()->data->getData();

          // validate data maybe? - username required, password required

          // Get user from database - if not ok return error

          // Check credentials - if not ok return error

          // Start sessioon

          // return user as JSON
          Flight::json($user);
      }
}
