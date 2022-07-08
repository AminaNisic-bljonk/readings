<?php
require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/SignDao.class.php';

class SignService extends BaseService {

  public function __construct() {
    parent::__construct(new SignDao());
  }
  public function getSignByName($sign){
    return $this->dao->getSignByName($sign);
  }

}
