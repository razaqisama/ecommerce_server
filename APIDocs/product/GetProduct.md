# Get Product

Used to show all Product Data.

**URL** : `/product/`

**Method** : `GET`

**Auth required** : YES

**Permission required** : NO

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    [
        {
            "id": 1,
            "name": "Product Sample A",
            "image_url": "Url Sample A",
            "stock": "123",
            "price": "123",
            "createdAt": "2020-12-01T17:51:38.129Z",
            "updatedAt": "2020-12-01T17:51:38.129Z"
        },
        {
            "id": 2,
            "name": "Product Sample B",
            "image_url": "Url Sample B",
            "stock": "321",
            "price": "321",
            "createdAt": "2020-12-01T17:51:38.129Z",
            "updatedAt": "2020-12-01T17:51:38.129Z"
        }
    ]
}
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