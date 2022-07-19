<?php
require_once __DIR__.'/BaseDao.class.php';

class CardDao extends BaseDao {

  /**
  * constructor of dao class
  */
  public function __construct(){
    parent::__construct("cards");
  }

 public function getRandomCard($number){
   //return $this->query_unique("SELECT * FROM cards ORDER BY RAND() LIMIT number= :number",['number'=>$number]);
   $results = $this-> query2("SELECT * FROM cards ORDER BY RAND() LIMIT 1");
   return reset($results);
 }
 
}
