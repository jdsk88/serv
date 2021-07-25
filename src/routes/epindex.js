import getUsers from "../services/users.js";
import getEmployers from "../services/employers.js";
import getLocations from "../services/locations.js";
import getProducts from "../services/products.js";
import getCarts from "../services/cart.js";
import getCategory from "../services/category.js";
import getRoads from "../services/roads.js";
import getOrders from "../services/order.js";


export const {
    searchProducts:getProducts,
    searchOrders:getOrders,
    searchLocations:getLocations,
    serarchCarts:getCarts,
  }
  