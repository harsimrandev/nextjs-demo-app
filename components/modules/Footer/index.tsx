import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto w-2/3 flex-col mt-10 mb-10">
      <div className="flex justify-center mb-20 text-center ">
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
      <p className="uppercase text-sm font-bold mb-2 text-center ">a note from the editor</p>
      <p className="font-normal	text-xl	lg:text-[32px] mb-2 text-center leading-[140%] lg:leading-[44.8px]">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
      </p>
      <div className="flex justify-center items-center">
        <div className="w-[28px] h-0 border border-black"></div>
        <p className="text-sm ml-2">
          By{" "}
          <Link href="/" className="underline">
            MINNA SHIM,
          </Link>{" "}
          Fashion Editor
        </p>
      </div>
    </div>
  );
}
