import { Product } from "../models/product";

export class ProductController {
  createProduct(
    description: string,
    stock: number,
    price: number,
    code: string,
    entryDate: Date
  ): Product {
    return new Product(description, stock, price, code, entryDate);
  }
}
