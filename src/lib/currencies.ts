export const Currencies = [
  { value: "DZD", label: "د.ج Dinnar", locale: "ar-AL" },
  { value: "SAR", label: "﷼  Riyal", locale: "ar-SA" },
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "JPY", label: "¥ YEN", locale: "ja-JP" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
]

export type Currency = (typeof Currencies)[0]
