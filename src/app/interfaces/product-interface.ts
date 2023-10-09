export interface ProductData {
  id: number,
  name: string;
  description: string;
  price: string;
  priceOff?: string;
  stock: number;
  image: string[];
  sku: string;
  category_id: string;
}

export interface ProductResponse {
  message: string;
  data: ProductData[];
}
