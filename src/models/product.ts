import { CustomError } from "../errors/customError";
import { ProductError } from "../enums/productErrors";

export class Product {
  private description: string;
  private stock: number;
  private price: number;
  private code: string;
  private entryDate: Date;

  constructor(
    description: string,
    stock: number,
    price: number,
    code: string,
    entryDate: Date
  ) {
    this.setDescription(description);
    this.setStock(stock);
    this.setPrice(price);
    this.setCode(code);
    this.setEntryDate(entryDate);
  }

  private setDescription(description: string) {
    if (description.length < 10) {
      throw new CustomError(ProductError.DescriptionInvalid);
    }
    this.description = description;
  }

  private setStock(stock: number) {
    if (stock < 0 || stock > 99) {
      throw new CustomError(ProductError.StockInvalid);
    }
    this.stock = stock;
  }

  private setPrice(price: number) {
    if (price < 1) {
      throw new CustomError(ProductError.PriceInvalid);
    }
    this.price = price;
  }

  private setCode(code: string) {
    const codePattern = /^[A-Z]{3}-\d{4}$/;
    if (!codePattern.test(code)) {
      throw new CustomError(ProductError.CodeInvalid);
    }
    this.code = code;
  }

  private setEntryDate(entryDate: Date) {
    const today = new Date();
    if (entryDate > today) {
      throw new CustomError(ProductError.EntryDateInvalid);
    }
    this.entryDate = entryDate;
  }
}
