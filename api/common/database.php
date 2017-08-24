<?php
namespace CryptoDonate;
require_once __DIR__.'/../vendor/autoload.php';
require_once __DIR__.'/../config.php';

use \PDO;
use Ramsey\Uuid\Uuid;


class Database
{

    function __construct(){
        $this->db = new PDO('mysql:host='.MYSQL_SERVER.';dbname='.MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING));
    }


    function createDonate($name,$message,$currency,$address){

        $uuid =  Uuid::uuid4()->toString();

        $sql = "INSERT INTO `donates` (`uuid`, `name`, `message`, `currency`, `address`) VALUES (:uuid, :name, :message, :currency, :address);";
        $query = $this->db->prepare( $sql );
        $query->execute(array(

            'uuid'=>$uuid,
            'name'=>$name,
            'message'=>$message,
            'currency'=>$currency,
            'address'=>$address,

        ));


        $lastId = $query;
        return($this->getDonate($uuid));
    }


    function getDonates()
    {
        $query = $this->db->prepare("SELECT * FROM `donates`");
        $query->execute();

        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    function getDonate($uuid)
    {
        $query = $this->db->prepare("SELECT * FROM `donates` WHERE `uuid` = ?");
        $query->execute(array($uuid));

        return $query->fetch(PDO::FETCH_ASSOC);
    }


}