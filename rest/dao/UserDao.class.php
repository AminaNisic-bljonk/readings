<?php
require_once __DIR__.'/BaseDao.class.php';

class UserDao extends BaseDao {

  /**
  * constructor of dao class
  */
  public function __construct(){
    parent::__construct("users");
  }
  public function getUserByEmail($email){
    return $this->query_unique("SELECT * FROM users WHERE email = :email", ['email' => $email]);
  }
}
