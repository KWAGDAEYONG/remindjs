import {CartItem} from "../core/cart/cart-item";

export interface Order {
  _id?: string;
  email: string;
  customer: {
    email?: string
    phone_number?: string
    first_name?: string
    last_name?: string
  };
  items: CartItem[];
  order_note: string;
  address: {
    city?: string
    state?: string
    street?: string
    post_code?: string
  };
  payment: {
    card_number?: string
    full_name?: string
    exp_date?: string
    cvc?: string
  };
  total_price: number;
}

