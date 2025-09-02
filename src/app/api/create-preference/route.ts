import { log } from "console";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, price, quantity } = await req.json();

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            title,
            unit_price: Number(price),
            quantity: Number(quantity),
          },
        ],
        back_urls: {
    success: "https://bottcherstore-ten.vercel.app/success",
    failure: "https://bottcherstore-ten.vercel.app/failure",
    pending: "https://bottcherstore-ten.vercel.app/pending",
  },
  auto_return: "approved",
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error: any) {
  console.error("Error creando preferencia:", error);
  return NextResponse.json(
    { error: error.message || error },
    { status: 500 }
  );
}
}
