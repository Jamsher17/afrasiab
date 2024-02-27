"use client";
//package imports
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
//local imports
import Logo from "public/logo_alt.png";
import { PopMenu } from "./components/Popupmenu";
import HeaderInfo from "./components/HeaderInfo";

export function Header() {
  const pathName = usePathname();

  return (
    <nav className="sticky w-full z-10 bg-white text-sm px-4 lg:px-6 py-2.5 ">
      <div className="flex items-center mx-auto justify-between">
        <div className="flex items-center lg:hidden z-1 absolute left-0">
          <PopMenu />
        </div>
        <Link href="/" className="flex flex-1 items-center justify-center">
          <Image src={Logo} className="h-[50px] w-auto" alt="Logo" />
        </Link>

        <div
          className="hidden flex-1 justify-between items-center w-full ml-30 lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 min-w-[390px] lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                href="/"
                style={
                  pathName === "/"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block py-2 pr-4 pl-3 font-body font-semibold  text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
                aria-current="page"
              >
                ГЛАВНАЯ
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={
                  pathName === "/about"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block whitespace-nowrap font-body font-semibold  hover:text-darkBlue  py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                О НАС
              </Link>
            </li>
            <li>
              <Link
                href="/tours"
                style={
                  pathName === "/tours"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block whitespace-nowrap font-body font-semibold hover:text-darkBlue py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                АВТОРСКИЕ ТУРЫ
              </Link>
            </li>
            <li>
              <Link
                href="/cities"
                style={
                  pathName === "/cities"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block hover:text-darkBlue font-body font-semibold py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                ГОРОДА
              </Link>
            </li>
            {/* <li>
              <Link
                href="/sights"
                style={
                  pathName === "/sights"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block hover:text-darkBlue py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                Достопримечательности
              </Link>
            </li> */}
            <li>
              <Link
                href="/contacts"
                style={
                  pathName === "/contacts"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block hover:text-darkBlue font-body font-semibold py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="hidden flex-1 lg:flex items-center w-auto justify-end lg:order-1"
          id="mobile-menu-2"
        >
          <HeaderInfo />
        </div>
      </div>
    </nav>
  );
}
