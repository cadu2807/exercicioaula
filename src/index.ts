import { Product } from "../src/models/product";
import { CustomError } from "../src/errors/customError";

const product = new Product();

try {
  // Acessa o setter de  _name
  product.description = "Sid";
} catch (err) {
  console.log(err);
}

// Acessa o getter de _name
const productName = product.description;
console.log(productName);
console.log("Mal feito desfeito");