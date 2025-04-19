import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  {
    name: "Resources",
    dropdown: true,
    current: false,
    items: [
      { name: "Docs", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Community", href: "#" },
    ],
  },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      <div
        style={{ fontFamily: "var(--font-geist-sans)" }}
        className="mx-20 max-w-7xl px-2 sm:px-6 lg:px-8"
      >
        <div className="relative flex h-16 items-center justify-between antialiased font-bold">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-between rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <Menu as="div" className="relative" key={item.name}>
                      <MenuButton className="rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 flex items-center bg-white">
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </MenuButton>
                      <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                        {item.items.map((subItem) => (
                          <MenuItem key={subItem.name}>
                            <a
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </a>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "font-weight: 900"
                          : "text-gray-500 bg-white hover:bg-gray-100",
                        "rounded-md px-3 py-2 text-sm"
                      )}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
