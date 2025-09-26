import { Dialog, DialogPanel } from "@headlessui/react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import onlyLogo from "../assets/only-logo.png";

import { useState } from "react";

export const Dia = () => {
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
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
      
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-white">
          {/* sidebar starts from here */}

          {/* side bar ends here */}
        </a>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-200 w-full overflow-y-auto bg-gray-900 p-5 pt-12 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-2.5 p-1.5">
              <span className="flex flex-row items-center text-2xl font-bold tracking-tighter text-gray-300">
                <img alt="" src={onlyLogo} className="h-15 w-auto" />
                Subidha Electronics
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <IoCloseOutline aria-hidden="true" className="size-9" />
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
  );
};
