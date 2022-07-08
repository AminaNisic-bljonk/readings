<?php
require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/CompatibilityDao.class.php';

class CompatibilityService extends BaseService {

  public function __construct() {
    parent::__construct(new CompatibilityDao());
  }
  public function getCompatibility($sign1,$sign2){
    return $this->dao->getCompatibility($sign1,$sign2);
  }

}
