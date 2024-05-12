export interface ProductRating  {
  rate: number;
  count: number;
}

export interface Product  {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

export interface CartProduct extends Product {
  quantity: number;
}
export interface CartState {
  products: CartProduct[];
  cartItemCount: number;
}

