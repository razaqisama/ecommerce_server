# Remove Product

Used to add remove Cart Data.

**URL** : `/cart/:id`

**Method** : `DELETE`

**Auth required** : YES

**Permission required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "message": "Product removed from your cart"
}
```

## Error Response

**Condition** : If there is no item in database

**Code** : `404 Not Found Error`

**Content** : 
```json
{
    "message": "Item Not Found"
}
```

**Condition** : If there is an error request from server

**Code** : `500 Internal Server Error`

**Content** : 
```json
{
    "error": "Internal Server Error"
}
```