
<?php
require_once 'vendor/autoload.php';
require_once 'config.php';
use Coinbase\Wallet\Client;
use Coinbase\Wallet\Configuration;
use Coinbase\Wallet\Enum\CurrencyCode;


$configuration = Configuration::apiKey(COINBASE_API_KEY, COINBASE_API_KEY_SECRET);
$client = Client::create($configuration);




$primaryAccount = $client->getPrimaryAccount();

// Generate a new bitcoin address for your primary account:
use Coinbase\Wallet\Resource\Address;



$address = new Address(CurrencyCode::BTC);
$client->createAccountAddress($primaryAccount, $address);




print_r($address);
print_r($address->getAddress());






/*

$account = $client->getPrimaryAccount();
$address = new Address(['name' => 'New Address']);
$end = $client->createAccountAddress($account, $address);


print_r($account);
echo('<hr>');
print_r($address);
echo('<hr>');
print_r($end);
echo('<hr>');


/*
$rates = $client->getExchangeRates();


print_r($rates);