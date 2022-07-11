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

  public function getIdAndCard($user_id, $card_id){
    return $this->query_unique("SELECT * FROM favouritecards WHERE user_id = :user_id and card_id = :card_id", ['user_id' => $user_id, 'card_id' => $card_id]);
  }
}
