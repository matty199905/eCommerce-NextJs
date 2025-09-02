"use client";
import { useEffect } from "react";

type BtnProps = {
    price: number
    children: string | React.ReactNode,
}

const MPBtn: React.FC<BtnProps> = ({price}) => {
  useEffect(() => {
    // cargar SDK de MercadoPago
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePago = async () => {
    const res = await fetch("/api/create-preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Total de la orden",
        price: price,
        quantity: 1,
      }),
    });

    const data = await res.json();

    if (!data.id) {
      alert("Error creando preferencia");
      return;
    }

    // @ts-ignore
    const mp = new MercadoPago("APP_USR-8ce6d426-3ae5-4848-8128-4cbc8847f3da", { locale: "es-AR" });
    // @ts-ignore
    mp.checkout({
      preference: {
        id: data.id,
      },
      autoOpen: true,
    });
  };

  return (
      <button
        onClick={handlePago}
      >
        Pagar con Mercado Pago
      </button>
  );
}


export default MPBtn