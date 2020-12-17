# Get Cart

Used to show all Cart Data.

**URL** : `/cart/history`

**Method** : `GET`

**Auth required** : Yes

**Permission required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "id": 1,
        "UserId": 2,
        "ProductId": 4,
        "amount": 3,
        "isPaid": true,
        "createdAt": "2020-12-17T00:46:11.794Z",
        "updatedAt": "2020-12-17T01:14:05.643Z",
        "Product": {
            "id": 4,
            "name": "Ochako",
            "image_url": "https://bbts1.azureedge.net/images/p/full/2019/06/c05a1043-1b54-4055-9ea4-c56087c2fe47.jpg",
            "price": 325000,
            "stock": 303,
            "createdAt": "2020-12-16T14:34:43.244Z",
            "updatedAt": "2020-12-17T03:29:56.624Z"
        }
    },
    {
        "id": 2,
        "UserId": 2,
        "ProductId": 5,
        "amount": 3,
        "isPaid": true,
        "createdAt": "2020-12-17T00:46:12.288Z",
        "updatedAt": "2020-12-17T01:14:05.656Z",
        "Product": {
            "id": 5,
            "name": "L",
            "image_url": "https://images-na.ssl-images-amazon.com/images/I/61DToIYDHZL._AC_SL1448_.jpg",
            "price": 325000,
            "stock": 10,
            "createdAt": "2020-12-16T14:35:32.568Z",
            "updatedAt": "2020-12-17T03:09:48.749Z"
        }
    }
]
```

## Error Response

**Condition** : If there is an error request from server

**Code** : `500 Internal Server Error`

**Content** : 
```json
{
    "error": "Internal Server Error"
}
```