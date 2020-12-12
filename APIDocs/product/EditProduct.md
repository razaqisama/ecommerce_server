# Edit Product

Used to Edit Product Data.

**URL** : `/product/:id`

**Method** : `PUT`

**Auth required** : YES

**Permission required** : YES

**Data constraints**

```json
{
    "name": "[Not Empty]",
    "image_url": "[Not Empty]",
    "stock": "[Not Empty, Greater Than Or Equal 0, Is Integer]",
    "price": "[Not Empty, Greater Than Or Equal 0, Is Integer]"
}
```

**Data example**

```json
{
    "name": "Edit Product Sample",
    "image_url": "Url Sample",
    "stock": "123",
    "price": "123"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "name": "Edit Product Sample",
    "image_url": "Url Sample",
    "stock": "123",
    "price": "123"
}
```

## Error Response

**Condition** : If user input triger error validation

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    {
      "message": "Validation Error",
      "error" : ["Every Validation List Error Will Be Stored Here, such as 'Name Required' or 'Stock must be an Integer' etc"]
    }
}
```

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
    "message": "Internal Server Error"
}
```