# Get Cart

Used to show all Cart Data.

**URL** : `/cart/`

**Method** : `GET`

**Auth required** : No

**Permission required** : NO

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "id": 25,
        "UserId": 2,
        "ProductId": 1,
        "amount": 1,
        "isPaid": false,
        "createdAt": "2020-12-17T04:12:38.406Z",
        "updatedAt": "2020-12-17T04:12:38.406Z",
        "Product": {
            "id": 1,
            "name": "Product A",
            "image_url": "Image A",
            "price": 1000,
            "stock": 5,
            "createdAt": "2020-12-12T11:28:28.109Z",
            "updatedAt": "2020-12-12T11:28:28.109Z"
        }
    },
    {
        "id": 26,
        "UserId": 2,
        "ProductId": 3,
        "amount": 1,
        "isPaid": false,
        "createdAt": "2020-12-17T04:13:16.743Z",
        "updatedAt": "2020-12-17T04:13:16.743Z",
        "Product": {
            "id": 3,
            "name": "Product C",
            "image_url": "Image C",
            "price": 1500,
            "stock": 10,
            "createdAt": "2020-12-12T11:28:28.109Z",
            "updatedAt": "2020-12-12T11:28:28.109Z"
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