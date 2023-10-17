export function formatPriceInEUR(price) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(price);
}