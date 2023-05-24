import Image from "next/image";
import Link from "next/link";

export default function ProductsImages() {
  return (
    <div className="flex-column">
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
      <div className="flex justify-center mt-20">
        <p className="text-sm mr-5">
          <Link href="/" className="underline">
            Jonathan Simkhai
          </Link>
        </p>
        <p className="text-sm  mr-5">
          <Link href="/" className="underline">
            Blazers
          </Link>
        </p>
        <p className="text-sm">
          <Link href="/" className="underline">
            Viscose
          </Link>
        </p>
      </div>
    </div>
  );
}
