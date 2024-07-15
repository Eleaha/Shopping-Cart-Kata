import basketData from "../src/data/basket-data.json";
import { findSubtotal } from "../src/find-subtotal";
import { BasketItem } from "../src/interfaces";

const basket = <BasketItem[]>basketData;

console.log(`Your total is £${findSubtotal(basket)}`);
