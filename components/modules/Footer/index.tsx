import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto w-2/3 text-center flex-col mt-[100px] mb-10">
      <p className="uppercase text-sm font-bold mb-2">a note from the editor</p>
      <p className="font-normal	text-[32px] mb-2">
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
