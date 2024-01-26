export function getPlanFromPriceId(priceId: string) {
  const env =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "production" : "test";
  return PLANS.find(
    (plan) =>
      plan.price.monthly.priceIds[env] === priceId ||
      plan.price.yearly.priceIds[env] === priceId,
  )!;
}

// custom type coercion because Stripe's types are wrong
export function isNewCustomer(
  previousAttributes:
    | {
        default_payment_method?: string;
        items?: {
          data?: {
            price?: {
              id?: string;
            }[];
          };
        };
      }
    | undefined,
) {
  let isNewCustomer = false;
  try {
    if (
      // if the project is upgrading from free to pro
      previousAttributes?.default_payment_method === null
    ) {
      isNewCustomer = true;
    } else {
      // if the project is upgrading from pro to enterprise
      const oldPriceId =
        previousAttributes?.items?.data &&
        previousAttributes?.items?.data[0].price.id;
      if (oldPriceId && getPlanFromPriceId(oldPriceId).slug === "pro") {
        isNewCustomer = true;
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
  return isNewCustomer;
}

export const PLANS = [
  {
    name: "Pro",
    slug: "pro",
    quota: 50000,
    price: {
      monthly: {
        amount: 9,
        priceIds: {
          test: "price_1OcsciHraseApd8ID7d6NtOY",
          production: "price_1OcsciHraseApd8ID7d6NtOY",
        },
      },
      yearly: {
        amount: 90,
        priceIds: {
          test: "price_1OcsUfHraseApd8IW6MKAXoF",
          production: "price_1OcsUfHraseApd8IW6MKAXoF",
        },
      },
    },
  },
  {
    name: "Business",
    slug: "business",
    quota: 500000,
    price: {
      monthly: {
        amount: 40,
        priceIds: {
          test: "price_1Ocsc9HraseApd8IKRy21cpt",
          production: "price_1Ocsc9HraseApd8IKRy21cpt",
        },
      },
      yearly: {
        amount: 480,
        priceIds: {
          test: "price_1Ocsc9HraseApd8IeobvxtQE",
          production: "price_1Ocsc9HraseApd8IeobvxtQE",
        },
      },
    },
  },
];
