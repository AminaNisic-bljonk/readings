<?php
require_once __DIR__.'/BaseDao.class.php';

class FavouriteCardDao extends BaseDao {

  /**
  * constructor of dao class
  */
  public function __construct(){
    parent::__construct("favouritecards");
  }

  public function getFavouriteById($id){
    return $this->query2("SELECT f.favourite_id, f.user_id, f.card_id, c.CardName, c.CardDescription FROM favouritecards as f JOIN cards as c ON f.card_id=c.id WHERE user_id = $id", ['id' => $id]);
  }
}
