import { CustomError } from "../errors/customError";
import { Product } from "../models/product";
import { ProductError } from "../enums/productErrors";

describe("Product Model", () => {
  test("should create a product with valid values", () => {
    const product = new Product(
      "Produto Teste",
      10,
      50,
      "ABC-1234",
      new Date("2023-10-01")
    );
    expect(product).toBeInstanceOf(Product);
  });

  test("should throw an error for invalid description", () => {
    expect(
      () => new Product("Short", 10, 50, "ABC-1234", new Date("2023-10-01"))
    ).toThrow(CustomError);
    expect(
      () => new Product("Short", 10, 50, "ABC-1234", new Date("2023-10-01"))
    ).toThrow(ProductError.DescriptionInvalid);
  });

  test("should throw an error for invalid stock", () => {
    expect(
      () =>
        new Product("Produto Teste", -1, 50, "ABC-1234", new Date("2023-10-01"))
    ).toThrow(CustomError);
    expect(
      () =>
        new Product(
          "Produto Teste",
          100,
          50,
          "ABC-1234",
          new Date("2023-10-01")
        )
    ).toThrow(CustomError);
  });

  test("should throw an error for invalid price", () => {
    expect(
      () =>
        new Product("Produto Teste", 10, 0, "ABC-1234", new Date("2023-10-01"))
    ).toThrow(CustomError);
  });

  test("should throw an error for invalid code format", () => {
    expect(
      () =>
        new Product("Produto Teste", 10, 50, "INVALID", new Date("2023-10-01"))
    ).toThrow(CustomError);
    expect(
      () =>
        new Product("Produto Teste", 10, 50, "AB1-1234", new Date("2023-10-01"))
    ).toThrow(CustomError);
  });

  test("should throw an error for future entry date", () => {
    expect(
      () =>
        new Product("Produto Teste", 10, 50, "ABC-1234", new Date("2050-01-01"))
    ).toThrow(CustomError);
    expect(
      () =>
        new Product(
          "Produto Teste",
          10,
          50,
          "ABC-1234",
          new Date(Date.now() + 1000000000)
        )
    ).toThrow(CustomError);
  });
});
