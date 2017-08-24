<?php
require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/common/database.php';



$router = new AltoRouter();


//$router->setBasePath('/crypto-donate/api/');
$router->setBasePath('/crypto-donate/api');



$router->map('GET', '/donates', function( ) {
    echo('ddddd');
});



$router->map('POST', '/donates', function() {
    $data = json_decode( file_get_contents('php://input'),true);
    //todo maybe check POST JSON

    require_once __DIR__.'/common/bitcoin.php';
    $address = getFreshAddress($data['currency']);

    $database = new CryptoDonate\Database();
    $database->createDonate($data['name'],$data['message'],$data['currency'],$address);

    echo(json_encode(array(
        'id'=>$id
    )));



});




$router->map('GET', '/donates/[:id]', function($id) {
    echo('donates');
});





$match = $router->match();



// call closure or throw 404 status
if( $match && is_callable( $match['target'] ) ) {
    try{

        call_user_func_array( $match['target'], $match['params'] );

    }catch (Error $error){

        header('HTTP/1.1 500 Internal Server Error');
        var_dump($error);//todo error_reporting
    }

} else {
    // no route was matched
    header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}

