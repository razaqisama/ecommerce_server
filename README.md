# FANCY E - Commerce

## Link Deploy:
### Server
    https://fancyecome.herokuapp.com/
### Client
    https://fanceyecome.web.app/
## REST API DOCUMENTATION

## Open Endpoints

Open endpoints require no Authentication.

* [Login](./APIDocs/user/login.md) : `POST /login`
* [Show Product List](./APIDocs/product/GetProduct.md) : `GET /product/`

## Closed Endpoints

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above. 

Every endpoints below require a valid Token to get an access:

Note: 
* ( * ) Sign: Could Be Accessible By Any User Logged In
* ( + ) Sign: Could Be Accessible If User Logged In Role is an Admin. 
* ( ^ ) Sign: Could Be Accessible If User Logged In Role is an Customer. 

## Product Related

* [+Add New Product](./APIDocs/product/AddProduct.md) : `POST /product/`
* [+Edit Product](./APIDocs/product/EditProduct.md) : `PUT /product/:id/`
* [+Remove Product](./APIDocs/product/RemoveProduct.md) : `DELETE /product/:id/`

## Cart Related

* [^Get Cart List](./APIDocs/cart/CartList.md) : `GET /cart/`
* [^Get Checkout History](./APIDocs/cart/History.md) : `GET /cart/history`
* [^Add New Cart](./APIDocs/cart/AddCart.md) : `PATCH /cart`
* [^Edit Cart](./APIDocs/cart/EditCart.md) : `PATCH /cart/:id`
* [^Remove Cart](./APIDocs/cart/RemoveCart.md) : `DELETE /cart/:id`