import {Product} from "../../shared/product";

export interface CartItem {
  product: Product;
  counts: number;
}
