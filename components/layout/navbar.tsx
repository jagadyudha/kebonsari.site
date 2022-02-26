import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Infografis", href: "/#infografis" },
  { name: "UMKM", href: "/#" },
  { name: "Kontak", href: "/#" },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <Popover>
        <div>
          <div className="flex sm:mx-20 mx-2 text-center sm:text-right sm:py-6 py-3 items-center justify-between px-5">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="flex items-center">
                  <img src="/assets/images/logo.png" />
                </div>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-300 hove:bg-opacity-80">
                    <GiHamburgerMenu className="text-lg text-black" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  {item.href === router.asPath ? (
                    <a className="font-medium text-sky-500">{item.name}</a>
                  ) : (
                    <a className="font-medium text-gray-600">{item.name}</a>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 overflow-hidden">
              <div className="float-right px-5 pt-4 flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center">
                    <VscChromeClose className="text-lg text-white" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    {item.href === router.asPath ? (
                      <a
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-normal text-sky-500"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-normal text-gray-800"
                      >
                        {item.name}
                      </a>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </nav>
  );
};

export default Navbar;
