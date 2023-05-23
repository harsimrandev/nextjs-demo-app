import React from 'react';
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/components/elements/Logo';
import Navlinks from '@/components/elements/Navlinks';

type MobileNavProps = {
    mobileMenuOpen: boolean,
    links: {
        name: string,
        href: string
    }[],
    setMobileMenuOpen: (val: boolean) => void
};

export default function MobileNav(props: MobileNavProps) {
    const { mobileMenuOpen, setMobileMenuOpen, links } = props;

    return (
        <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <Image
                src={`/images/close.svg`}
                alt="close"
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Navlinks />
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  My Account
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    )
}