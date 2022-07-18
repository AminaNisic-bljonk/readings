<?php
require_once __DIR__.'/BaseDao.class.php';

class CompatibilityDao extends BaseDao {

  /**
  * constructor of dao class
  */
  public function __construct(){
    parent::__construct("compatibility");
  }

  public function getCompatibility($sign1,$sign2){
    return $this->query("select * from compatibility where sign1_name=:sign1 AND sign2_name=:sign2;", ['sign1' => $sign1,'sign2' => $sign2]);
  }

}
