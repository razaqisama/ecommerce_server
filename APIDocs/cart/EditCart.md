# Edit Cart

Used to Edit Amount of Cart Data.

**URL** : `/cart/:id`

**Method** : `PUT`

**Auth required** : YES

**Permission required** : YES

**Data constraints**

```json
{
    "amount": "[Greater Than Or Equal 0, Is Integer]"
}
```

**Data example**

```json
{
    "amount": 3,
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id": 25,
    "UserId": 2,
    "ProductId": 1,
    "amount": 3,
    "isPaid": false,
    "createdAt": "2020-12-17T04:12:38.406Z",
    "updatedAt": "2020-12-17T04:24:53.583Z"
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

**Condition** : If user input exceeds product stock

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    {
      "message": "Quantity exceeds inventory stock limit",
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