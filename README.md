# 💸 Crypto donate

`This project was not finished and also not maintained for a long time. So expect not very updated stuff.`


# API

## GET /donates

List all created donates

### Response
```json
{
    "data": [
        {
            "uuid": "1de0ab2c-0b4e-4fe3-85e9-8f92ae4c64ec",
            "name": "Irma",
            "message": "Hi",
            "currency": "BTC",
            "address": "1CwHxeRP156GBgPDoKPWqYTQdExiX4xRBs",
            "created": "2017-10-01 14:32:32"
        }
    ]
}
```

## POST /donates
Creates new donate.

### Request
```json
{
    "name":"Irma",
    "message":"Hi",
    "currency":"BTC"
}
```

### Response
```json
{
    "data": {
        "uuid": "1de0ab2c-0b4e-4fe3-85e9-8f92ae4c64ec",
        "name": "Irma",
        "message": "Hi",
        "currency": "BTC",
        "address": "1CwHxeRP156GBgPDoKPWqYTQdExiX4xRBs",
        "created": "2017-10-01 14:32:32"
    }
}
```

## GET /donates/[:uuid]

Get information + received ammount of 1 donate.

### Response
```json
{
    "uuid": "1de0ab2c-0b4e-4fe3-85e9-8f92ae4c64ec",
    "name": "Irma",
    "message": "Hi",
    "currency": "BTC",
    "address": "1CwHxeRP156GBgPDoKPWqYTQdExiX4xRBs",
    "created": "2017-10-01 14:32:32",
    "received": 0
}
```

## GET /donates-payed

List all payed donates.

### Request

You can add these GET parameters to modify request:

**start_time**
Timestamp of begining.
Minimum value is 1. year ago maximum is now.
Default value is 1. year ago.

### Response
```json
{
    "data": [
        {
            "uuid": "1de0ab2c-0b4e-4fe3-85e9-8f92ae4c64ec",
            "name": "Irma",
            "message": "Hi",
            "currency": "BTC",
            "address": "1CwHxeRP156GBgPDoKPWqYTQdExiX4xRBs",
            "created": "2017-10-01 14:32:32",
            "amount": 0.123
        }
    ]
}
```
