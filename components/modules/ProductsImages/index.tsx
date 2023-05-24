import Image from "next/image";

export default function ProductsImages() {
  return (
    <section className="hidden lg:block">
      <div className="sticky right-0 top-10" style={{ direction: 'rtl' }}>
        <Image src="/images/heart.svg" alt="product1" width={20} height={18} />
      </div>
      <div className="flex-column -mt-5">
        <div className="w-full flex justify-center mb-2">
          <Image
            src="/images/product/product1.png"
            alt="product1"
            width={300}
            height={400}
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className="flex mb-2">
          <Image
            src="/images/product/product2.png"
            alt="product1"
            width={200}
            height={200}
          />
          <Image
            src="/images/product/product3.png"
            alt="product2"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full flex justify-center mb-2">
          <Image
            src="/images/product/product4.png"
            alt="product1"
            width={300}
            height={400}
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className="w-full flex justify-center mb-2">
          <Image
            src="/images/product/product5.png"
            alt="product1"
            width={300}
            height={400}
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>
    </section>
  );
}
