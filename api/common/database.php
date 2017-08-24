<?php
namespace CryptoDonate;
require_once __DIR__.'/../config.php';

use \PDO;

class Database
{

    function __construct(){
        $this->db = new PDO('mysql:host='.MYSQL_SERVER.';dbname='.MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING));
    }


    function createDonate($name,$message,$currency,$address){

        $sql = "INSERT INTO `donates` (`name`, `message`, `currency`, `address`) VALUES (:name, :message, :currency, :address);";
        $query = $this->db->prepare( $sql );
        $query->execute(array(

            'name'=>$name,
            'message'=>$message,
            'currency'=>$currency,
            'address'=>$address,

        ));
        //print_r($this->db>errorInfo());
        $id = $this->db->lastInsertId();
        return($id);
    }

}