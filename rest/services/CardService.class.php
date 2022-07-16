<?php
require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/CardDao.class.php';

class CardService extends BaseService {

  public function __construct() {
    parent::__construct(new CardDao());
  }
  public function getRandomCard($number){
    return $this->dao->getRandomCard($number);
  }

}
