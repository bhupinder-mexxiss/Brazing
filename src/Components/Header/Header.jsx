import {
  AccountCircleOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo2.png";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";
import helpIcon from "../../assets/icons/help.png";
import supportIcon from "../../assets/icons/support.png"; 

const Header = () => {
  return (
    <>
      <div className="bg-[#fff]">
        <div className="container mx-auto">
          <div className="sm:flex items-center justify-between pt-4 pb-3 hidden">
            <div className="text-white text-xs md:text-sm flex gap-4 md:gap-10">
              <div className="flex items-center gap-1.5 md:gap-2.5 ">
                <img
                  src={emailIcon}
                  alt=""
                  className="w-4 sm:w-5 "
                  style={{
                    filter:
                      "invert(35%) sepia(30%) saturate(1314%) hue-rotate(324deg) brightness(79%) contrast(96%)",
                  }}
                />
                <span className="opacity-80 text-deep_orange-900">
                  sales@mexxiss.com
                </span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img
                  src={phoneIcon}
                  alt=""
                  className="w-4 sm:w-5 "
                  style={{
                    filter:
                      "invert(35%) sepia(30%) saturate(1314%) hue-rotate(324deg) brightness(79%) contrast(96%)",
                  }}
                />
                <span className="opacity-80 text-deep_orange-900">
                  +91 8779043458
                </span>
              </div>
            </div>
            <div className="text-white text-xs md:text-sm flex gap-4 md:gap-10">
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img
                  src={supportIcon}
                  alt=""
                  className="w-4 sm:w-5 "
                  style={{
                    filter:
                      "invert(35%) sepia(30%) saturate(1314%) hue-rotate(324deg) brightness(79%) contrast(96%)",
                  }}
                />
                <span className="opacity-80 text-deep_orange-900">Support</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img
                  src={helpIcon}
                  alt=""
                  className="w-4 sm:w-5 "
                  style={{
                    filter:
                      "invert(35%) sepia(30%) saturate(1314%) hue-rotate(324deg) brightness(79%) contrast(96%)",
                  }}
                />
                <span className="opacity-80 text-deep_orange-900">Help</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="flex items-center bg-white-a700 border-b sticky top-0 z-[9999] shadow-md">
        <div className="max-w-[1392px] mx-auto flex w-full items-center justify-between gap-5 px-5">
          <div className="gap-[38px] w-[44%] flex items-center md:w-full">
            <div className="flex gap-2.5 items-center justify-be">
              <div className="cursor-pointer">
                <img
                  className="min-w-10 w-10"
                  src={Logo2}
                  alt="Header Logo"
                  loading="lazy"
                />
              </div>
              <p className="hidden xl:inline-block sm:text-[24px] md:text-[26px] text-[28px] font-archivo font-normal text-black-900 undefined">
                Cooper Kraft
              </p>
            </div>
            <div className="flex">
              <ul className="flex items-center gap-4">
                <li className="relative">
                  <div className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3  hover:bg-[#bd4110]  group hover:!text-white-a700">
                      <Link to="/" className=" text-[14px] mt-4  px-2">
                        Home
                      </Link>
                      <div className="h-[4px] w-full rounded-sm 900"></div>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3  hover:bg-[#bd4110]  group hover:!text-white-a700">
                      <p className=" text-[14px] mt-4  px-2">Brazing</p>
                      <div className="group-hover:block hidden absolute text-[white] w-fit px-2 py-1 rounded-[0px_8px_8px_8px] top-full bg-[#bd4110] left-0 z-10">
                        <ul className=" fi">
                          <li className="hover:bg-[#972b00] ">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Silver Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Copper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Nickel Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Vacuum Grade Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Active Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Preforms / Rings / LayerMet
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Soldering Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Brazing / Soldering Fluxes
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="h-[4px] w-full rounded-sm"></div>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3  hover:bg-[#bd4110] group hover:!text-white-a700">
                      <p className=" text-[14px] mt-4  px-2">Copper</p>
                      <div className="group-hover:block hidden absolute text-[white] w-fit px-2 py-1 rounded-[0px_8px_8px_8px] top-full bg-[#bd4110] left-0 z-10">
                        <ul className=" fi">
                          <li className="hover:bg-[#972b00] ">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Silver Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Copper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Nickel Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Vacuum Grade Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Active Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Preforms / Rings / LayerMet
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Soldering Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Brazing / Soldering Fluxes
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="h-[4px] w-full rounded-sm bg-transparent"></div>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3  hover:bg-[#bd4110] group hover:!text-white-a700">
                      <p className=" text-[14px] mt-4  px-2">Welding</p>
                      <div className="group-hover:block hidden absolute text-[white] w-fit px-2 py-1 rounded-[0px_8px_8px_8px] top-full bg-[#bd4110] left-0 z-10">
                        <ul className=" fi">
                          <li className="hover:bg-[#972b00] ">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Silver Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Copper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Nickel Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Vacuum Grade Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Active Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Preforms / Rings / LayerMet
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Soldering Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Brazing / Soldering Fluxes
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="h-[4px] w-full rounded-sm bg-transparent"></div>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3  hover:bg-[#bd4110] group hover:!text-white-a700">
                      <p className=" text-[14px] mt-4  px-2">Metallizing</p>
                      <div className="group-hover:block hidden absolute text-[white] w-fit px-2 py-1 rounded-[0px_8px_8px_8px] top-full bg-[#bd4110] left-0 z-10">
                        <ul className=" fi">
                          <li className="hover:bg-[#972b00] ">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Silver Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Copper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Nickel Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Vacuum Grade Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Active Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Preforms / Rings / LayerMet
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Soldering Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Brazing / Soldering Fluxes
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="h-[4px] w-full rounded-sm bg-transparent"></div>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3  hover:bg-[#bd4110] group hover:!text-white-a700">
                      <p className=" text-[14px] mt-4  px-2">Support</p>
                      <div className="group-hover:block hidden absolute text-[white] w-fit px-2 py-1 rounded-[0px_8px_8px_8px] top-full bg-[#bd4110] left-0 z-10">
                        <ul className=" fi">
                          <li className="hover:bg-[#972b00] ">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Silver Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Copper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Nickel Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Vacuum Grade Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Active Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Preforms / Rings / LayerMet
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Soldering Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Brazing / Soldering Fluxes
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="h-[4px] w-full rounded-sm bg-transparent"></div>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3  hover:bg-[#bd4110] group hover:!text-white-a700">
                      <p className=" text-[14px] mt-4  px-2">Applications</p>
                      <div className="group-hover:block hidden absolute text-[white] w-fit px-2 py-1 rounded-[0px_8px_8px_8px] top-full bg-[#bd4110] left-0 z-10">
                        <ul className=" fi">
                          <li className="hover:bg-[#972b00] ">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Copper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Nickel Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Vacuum Grade Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Active Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Preforms / Rings / LayerMet
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Soldering Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Brazing / Soldering Fluxes
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="h-[4px] w-full rounded-sm bg-transparent"></div>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3  hover:bg-[#bd4110] group hover:!text-white-a700">
                      <p className=" text-[14px] mt-4  px-2">Company</p>
                      <div className="group-hover:block hidden absolute text-[white] w-fit px-2 py-1 rounded-[0px_8px_8px_8px] top-full bg-[#bd4110] left-0 z-10">
                        <ul className=" fi">
                          <li className="hover:bg-[#972b00] ">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>
                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              PhosCopper Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Silver Brazing Alloys
                            </Link>
                          </li>

                          <li className="hover:bg-[#972b00] border-t border-[#e69778]">
                            <Link
                              to="/product"
                              className="text-nowrap block py-2 px-2 !text-sm font-normal"
                            >
                              Copper Brazing Alloys
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="h-[4px] w-full rounded-sm bg-transparent"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex relative border border-deep_orange-900 px-3 pl-2 gap-2 py-1 rounded">
              <SearchOutlined className="!text-lg opacity-60" />
              <input
                type="text"
                className="p-0 h-5 border-none text-sm focus:outline-none focus:ring-0"
                placeholder="Search"
              />
            </div>
            <button>
              <ShoppingCartOutlined className="text-deep_orange-900" />
            </button>
            <button>
              <AccountCircleOutlined className="text-deep_orange-900" />
            </button>
            {/* <button className="min-w-[160px] px-[34px] sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] text-[14px] bg-deep_orange-900 text-white-a700">
            Talk to Sales
          </button> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
