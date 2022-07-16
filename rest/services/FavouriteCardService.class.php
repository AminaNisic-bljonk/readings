<?php
require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/FavouriteCardDao.class.php';

class FavouriteCardService extends BaseService {

  public function __construct() {
    parent::__construct(new FavouriteCardDao());
  }

  public function getFavouriteById($id){
    return $this->dao->getFavouriteById($id);
  }

  public function getIdAndCard($user_id,$card_id){
    return $this->dao->getIdAndCard($user_id,$card_id);
  }
}
