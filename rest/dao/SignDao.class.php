<?php
require_once __DIR__.'/BaseDao.class.php';

class SignDao extends BaseDao {

  /**
  * constructor of dao class
  */
  public function __construct(){
    parent::__construct("signs");
  }

  public function getSignByName($sign){
    return $this->query2("select * from signs where sign_name='$sign';", ['sign' => $sign]);
  }
 public function getIdByName($sign_name){
   return $this->query_unique("select idSigns from signs where sign_name=:sign_name;", ['sign_name' => $sign_name]);
 }
}
