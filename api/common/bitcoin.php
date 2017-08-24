<?php
namespace CryptoDonate;
require_once __DIR__.'/../vendor/autoload.php';
require_once __DIR__.'/../config.php';

use \Error;
use Coinbase\Wallet\Client;
use Coinbase\Wallet\Configuration;
use Coinbase\Wallet\Enum\CurrencyCode;
use Coinbase\Wallet\Resource\Address;


function getFreshAddress($currency)
{
    if($currency!=='BTC'){
        throw new Error('Only BTC is working now.');
    }

    $configuration = Configuration::apiKey(COINBASE_API_KEY, COINBASE_API_KEY_SECRET);
    $client = Client::create($configuration);

    $primaryAccount = $client->getPrimaryAccount();
    $address = new Address(CurrencyCode::BTC);
    $client->createAccountAddress($primaryAccount, $address);

    return ($address->getAddress());
}
