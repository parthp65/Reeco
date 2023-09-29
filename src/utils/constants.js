const LOGO = "https://reeco.io/assets/logo.44b75468.svg";
const REASON_DATA = [
  {
    id: 1,
    reason: "Missing product",
  },
  {
    id: 2,
    reason: "Quanity is not the same",
  },
  {
    id: 3,
    reason: "Price is not the same",
  },
  {
    id: 4,
    reason: "Other",
  },
];

const STATUS = {
  APPROVED: "Approved",
  PRICE_UPDATED: "Price updated",
  QUANTITY_UPDATED: "Quantity updated",
  QUANTITY_AND_PRICE_UPDATED: "Quantity and Price updated",
  MISSING: "Missing",
  MISSING_URGENT: "Missing-Urgent",
};
export { LOGO, REASON_DATA, STATUS };
