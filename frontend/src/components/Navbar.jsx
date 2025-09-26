"use client";

import { useState } from "react";

import { FaShoppingCart, FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Dialog, DialogPanel } from "@headlessui/react";

import onlyLogo from "../assets/only-logo.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="absolute inset-x-0 top-4 z-1">
        <div className="">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8  shadow-indigo-500 shadow backdrop-blur-2xl border-2 rounded-2xl" // this is the navbar fill area
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="flex flex-row items-center text-2xl font-bold tracking-tighter text-gray-300">
                  <img alt="" src={onlyLogo} className="h-15 w-auto" /> Subidha
                  Electronics{" "}
                </span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <FaBars aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold text-white border-b-indigo-500 p-3 hover:shadow-inner transition-all ease-in-out hover:shadow-indigo-100 rounded-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-white">
                <div>
                  {/* sidebar starts from here */}
                  <div className="drawer drawer-end">
                    <input
                      id="my-drawer-4"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content">
                      {/* Page content here */}
                      <label
                        htmlFor="my-drawer-4"
                        className="drawer-button btn btn-primary flex flex-row items-center-safe gap-2 rounded-md p-2"
                      >
                        View Cart <FaShoppingCart />
                      </label>
                    </div>
                    <div className="drawer-side">
                      <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      ></label>
                      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li>
                          <a>Sidebar Item 1</a>
                        </li>
                        <li>
                          <a>Sidebar Item 2</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* side bar ends here */}
              </a>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="flex flex-row items-center tracking-tighter text-gray-300 font-bold">
                    <img alt="" src={onlyLogo} className="h-15 w-auto" />{" "}
                    Subidha Electronics
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-200"
                >
                  <span className="sr-only">Close menu</span>
                  <IoCloseOutline aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      <span className="flex flex-row items-center-safe gap-2">
                        {" "}
                        View Cart <FaShoppingCart />{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </header>
    </>
  );
};

export default Navbar;
