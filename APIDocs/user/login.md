# Login

Used to collect a Token for a registered User.

**URL** : `/login/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "email": "mail@mail.com",
    "password": "iniPassword"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYWlsZUBtYWlsLmNvbSIsImlhdCI6MTYwNzA2MTYyNX0.BIBMI8JfacOnfLH7x6FtYa_OOzweEv5eJ_FFQV7vGwY"
}
```

## Error Response

**Condition** : If 'email' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": {
        "Email or Password Incorrect"
    }
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