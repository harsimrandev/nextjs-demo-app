import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";

export default function MobileProductsSlider() {
  const imagesArray:string[] = ["1", "2", "3", "4", "5"];

  return (
    <section className="lg:hidden">
      <div className="relative right-0 top-0 z-10" style={{ direction: "rtl" }}>
        <Image src="/images/heart.svg" alt="product1" width={20} height={18} />
      </div>
      <div className="-mt-5">
      <Carousel infiniteLoop showStatus={false}>
        {imagesArray.map(i => (
          <div key={i}>
            <Image
              src={`/images/product/product${i}.png`}
              alt="product1"
              width={300}
              height={400}
              style={{ objectFit: "fill" }}
            />
        </div>
        ))}
      </Carousel>
      </div>
     
    </section>
  );
}
