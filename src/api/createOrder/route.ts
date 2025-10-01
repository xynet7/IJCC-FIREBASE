
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: NextRequest) {
  const { amount, currency } = await request.json();

  if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error("Razorpay keys not configured in .env file");
    return NextResponse.json(
      { error: "Razorpay keys not configured on the server." },
      { status: 500 }
    );
  }

  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: amount,
    currency: currency,
    receipt: "receipt_" + Math.random().toString(36).substring(7),
  };

  try {
    const order = await razorpay.orders.create(options);
    if (!order) {
        console.error("Razorpay order creation returned null or undefined.");
        return NextResponse.json({ error: "Order creation failed on Razorpay's end." }, { status: 500 });
    }
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Error creating order. Check server logs for details." },
      { status: 500 }
    );
  }
}
