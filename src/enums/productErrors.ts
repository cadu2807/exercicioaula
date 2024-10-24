export enum ProductError {
  DescriptionInvalid = "A descrição deve ter no mínimo 10 caracteres.",
  StockInvalid = "A quantidade em estoque deve estar entre 0 e 99.",
  PriceInvalid = "O preço deve ser no mínimo 1.",
  CodeInvalid = "O código deve estar no formato AAA-0000.",
  EntryDateInvalid = "A data de entrada não pode ser uma data futura.",
}
