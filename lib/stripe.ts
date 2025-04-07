/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe";
const  apiVersion:any = "2024-10-28.acacia";
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is missing in environment variables");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion,
});
