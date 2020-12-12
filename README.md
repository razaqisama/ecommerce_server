# FANCY E - Commerce

## Link Deploy:
### Server
  Belum
### Client
  Belum
## REST API DOCUMENTATION

## Open Endpoints

Open endpoints require no Authentication.

* [Login](./APIDocs/user/login.md) : `POST /login`

## Closed Endpoints

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above. 

Every endpoints below require a valid Token to get an access:

Note: 
* ( * ) Sign: Could Be Accessible By Any User Logged In
* ( + ) Sign: Could Be Accessible If User Logged In Role is an Admin. 

## Product Related

* [*Show Product List](./APIDocs/product/GetProduct.md) : `GET /product/`
* [+Add New Product](./APIDocs/product/AddProduct.md) : `POST /product/`
* [+Edit Product](./APIDocs/product/EditProduct.md) : `PUT /product/:id/`
* [+Remove Product](./APIDocs/product/RemoveProduct.md) : `DELETE /product/:id/`