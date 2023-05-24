import React from "react";
import Image from "next/image";

export default function CartSection() {
  return (
    <section>
      <div className="sticky top-0 flex flex-1 justify-end">
        <Image
          src="/images/ShoppingDetails.png"
          alt="shoping cart"
          width={300}
          height={500}
        />
      </div>
    </section>
  );
}
