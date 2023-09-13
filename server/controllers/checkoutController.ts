const dotenv = require("dotenv");

dotenv.config();

const stripe = require("stripe")(process.env["STRIPE_SECRET_KEY"]);

exports.createCheckoutSession = async (req: any, res: any, next: any) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["CA", "US"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "cad",
            },
            display_name: "Free Shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "cad",
            },
            display_name: "Express Shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 2,
              },
              maximum: {
                unit: "business_day",
                value: 3,
              },
            },
          },
        },
      ],
      line_items: req.body.items.map((item: any) => ({
        price_data: {
          currency: "cad",
          product_data: {
            name: item.name,
            images: [item.product],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: process.env["API_URL"] + "/success.html",
      cancel_url: process.env["API_URL"] + "/cancel.html",
    });
    res.status(200).json(session);
  } catch (err) {
    next(err);
  }
};
