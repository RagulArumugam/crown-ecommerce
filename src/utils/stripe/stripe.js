import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51Me9vgSB0i9hwJ0RN9KKEjhcUliTQgegZAkfvb0xBmkzT82FBSN8Ob7KuuQbhqdl7Byx5KTrMnIR5B1bMQ9NsTfa00LCjQFEDm"
);

// export const stripeOptions = {
//   // passing the client secret obtained from the server
//   clientSecret:
//     "sk_secret_51Me9vgSB0i9hwJ0RneYCL0JeiStLDPfJLyy5btEdun3VsQ0lMngUmdNkrBkwHpqRnA2Pe3ryseBLPA2QZC8WqHtI00fgcWnTRj",
// };
