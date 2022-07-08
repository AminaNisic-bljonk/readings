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
}
