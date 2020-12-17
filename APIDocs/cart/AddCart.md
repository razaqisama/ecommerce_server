# Add Cart

Used to add new Cart Data.

**URL** : `/cart/`

**Method** : `POST`

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
    "ProductId": 1
}
```

## Success Response

**Code** : `201 OK`

**Content example**

```json
{
    "message": "Product Added to your cart"
}
```

## Error Response

**Condition** : If product out of stock

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    {
      "message": "Out of Stock"
    }
}
```

**Condition** : If amount after adding exceeds inventory stock limit

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    {
      "message": "Quantity exceeds inventory stock limit"
    }
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