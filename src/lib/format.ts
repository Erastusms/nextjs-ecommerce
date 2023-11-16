export function formatPrice(price: number) {
  return (price / 15000).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
