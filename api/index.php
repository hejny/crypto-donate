<?php
require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/common/database.php';
require_once __DIR__.'/common/cryptocoin.php';


header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header('Access-Control-Allow-Headers: Origin, Content-Type');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS')exit;


$router = new AltoRouter();


//$router->setBasePath('/crypto-donate/api/');
$router->setBasePath('/crypto-donate/api');

//todo routes should be in separate files
//=================================================================================GET /donates
$router->map('GET', '/donates', function( ) {
    $database = new CryptoDonate\Database();
    return $database->getDonates();
});


//=================================================================================POST /donates
$router->map('POST', '/donates', function() {
    $data = json_decode( file_get_contents('php://input'),true);
    //todo maybe check POST JSON


    $address = CryptoDonate\CryptoCoin::getFreshAddress($data['currency']);

    $database = new CryptoDonate\Database();
    return $database->createDonate($data['name'],$data['message'],$data['currency'],$address);

});



//=================================================================================GET /donates/[:uuid]
$router->map('GET', '/donates/[:uuid]', function($uuid) {
    $database = new CryptoDonate\Database();
    $donate = $database->getDonate($uuid);
    if($donate){
        $donate['received'] = \CryptoDonate\CryptoCoin::getAddrressBallance($donate['currency'],$donate['address']);
        //$donate['received'] = 1;//for testing
    }
    return $donate;
});



//=================================================================================GET /donates-payed
$router->map('GET', '/donates-payed', function() {

    /*  todo maybe should be this
    if(!isset($_GET['start_time'])){
        throw new Error('You should set GET param start_time - timestamp[ms].');
    }
    */

    if(isset($_GET['start_time'])){
        $startTime = intval($_GET['start_time']);
    }else{
        $startTime = 0;
    }

    $database = new CryptoDonate\Database();
    $donates = $database->getDonates();
    foreach($donates as &$donate){
        $donate['amount'] = \CryptoDonate\CryptoCoin::getAddrressBallance($donate['currency'],$donate['address'],$startTime);
    }

    $donates = array_values(array_filter($donates,function($donate){
        return($donate['amount']>0);
    }));

    return $donates;
});
//=================================================================================



$match = $router->match();



// call closure or throw 404 status
if( $match && is_callable( $match['target'] ) ) {
    try{

        $result = call_user_func_array( $match['target'], $match['params'] );

        if($result !== false){
            echo(json_encode($result,JSON_PRETTY_PRINT));
        }else{
            echo('This asset not found.');
            header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
        }


    }catch (Error $error){

        header('HTTP/1.1 500 Internal Server Error');
        echo($error);//todo error_reporting
    }

} else {
    // no route was matched
    echo('This API endpoind do not exists.');
    header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}

