<?php
namespace CryptoDonate;
require_once __DIR__.'/../vendor/autoload.php';
require_once __DIR__.'/../config.php';

use \Error;
use Coinbase\Wallet\Client;
use Coinbase\Wallet\Configuration;
use Coinbase\Wallet\Enum\CurrencyCode;
use Coinbase\Wallet\Resource\Address;


class CryptoCoin
{
    public static function getFreshAddress($currency)
    {
        if ($currency !== 'BTC') {
            throw new Error('Only BTC is working now.');
        }

        $configuration = Configuration::apiKey(COINBASE_API_KEY, COINBASE_API_KEY_SECRET);
        $client = Client::create($configuration);

        $primaryAccount = $client->getPrimaryAccount();
        $address = new Address();
        $client->createAccountAddress($primaryAccount, $address);

        return ($address->getAddress());
    }


    public static function getAddrressBallance($currency, $address,$startTime=0)
    {
        if ($currency !== 'BTC') {
            throw new Error('Only BTC is working now.');
        }

        $yearAgo =  (time() - (3600 * 24 * 365)) * 1000;

        if($startTime<$yearAgo){
            $startTime =$yearAgo;//todo there are only 1 yaer old transactions
        }

        $plain = file_get_contents("https://blockchain.info/q/getreceivedbyaddress/$address?start_time=$startTime&format=plain");//todo is it possible via Coinbase API?
        return floatval($plain)/10e7;
    }
}