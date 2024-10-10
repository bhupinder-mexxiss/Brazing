import React from "react";
import {
  EmailOutlined,
  Facebook,
  KeyboardArrowDownOutlined,
  LinkedIn,
  Twitter,
  X,
  YouTube,
} from "@mui/icons-material";
import Logo2 from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="flex items-end justify-center bg-gray-900 py-6 sm:py-5">
      <div className="max-w-[1400px] mt-[72px] mx-auto flex w-full justify-center px-5">
        <div className="flex w-full flex-col items-center">
          <h5 className=" text-[20px] font-archivo font-semibold text-white-a700 undefined">
            Subscribe to our newsletter
          </h5>
          <div className="md:w-[32%] mt-2.5 flex items-center justify-center w-full flex-col sm:flex-row">
            <label className="!border-[0.5px] !rounded-bl-[20px] !rounded-tl-[20px] flex-grow gap-2 flex items-center justify-center cursor-text  border-gray-400 border-solid text-gray-300 h-[42px] pl-3.5 text-[16px]">
              <EmailOutlined />
              <input
                type="text"
                name="Email Input"
                placeholder="Input your email"
                className="bg-gray-900 "
              />
            </label>
            <button className="min-w-[112px] rounded-br-[22px] rounded-tr-[22px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap undefined h-[44px] px-[18px] text-[16px] bg-deep_orange-900 text-white-a700">
              Subscribe
            </button>
          </div>
          <div className="mt-[72px] self-stretch">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-5 flex-col md:flex-row">
                <div className="flex items-center gap-2">
                  <img
                    className="h-[48px] rounded-md"
                    src={Logo2}
                    alt=""
                    loading="lazy"
                  />
                  <h2 className=" sm:text-[28px] md:text-[30px] text-[32px] self-end font-archivo font-bold text-white-a700 undefined">
                    Copper Kraft
                  </h2>
                </div>
                <div className="mb-2 flex flex-wrap gap-10 md:self-end self-auto">
                  <a href="#">
                    <p className=" text-[18px] font-normal text-white-a700 undefined">
                      Pricing
                    </p>
                  </a>
                  <a href="#">
                    <p className=" text-[18px] font-normal text-white-a700 undefined">
                      About us
                    </p>
                  </a>
                  <a href="#">
                    <p className=" text-[18px] font-normal text-white-a700 undefined">
                      Features
                    </p>
                  </a>
                  <a href="#">
                    <p className=" text-[18px] font-normal text-white-a700 undefined">
                      Help Center
                    </p>
                  </a>
                  <a href="#">
                    <p className=" text-[18px] font-normal text-white-a700 undefined">
                      Contact us
                    </p>
                  </a>
                  <a href="#">
                    <p className=" text-[18px] font-normal text-white-a700 undefined">
                      FAQs
                    </p>
                  </a>
                  <a href="#">
                    <p className=" text-[18px] font-normal text-white-a700 undefined">
                      Careers
                    </p>
                  </a>
                </div>
              </div>
              <div className="h-px bg-gray-300"></div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-5 self-stretch flex-col md:flex-row">
            <div
              className="md:w-[10%] gap-4 w-full flex rounded-md h-[34px] px-2.5 text-[14px] border-gray-400 border-[0.5px] border-solid text-gray-300 css-1pv8pmy-container justify-center"
              data-compid="undefined"
              data-path="undefined"
              data-type="undefined"
            >
              <div className=" css-1q1r6k6-control flex gap-2 items-center justify-center">
                <div className=" css-p3cibr">
                  <div
                    className=" css-1bkpx9o-placeholder"
                    id="react-select-2-placeholder"
                  >
                    English
                  </div>
                  {/* <input
                      id="react-select-2-input"
                      tabindex="0"
                      inputmode="none"
                      aria-autocomplete="list"
                      aria-expanded="false"
                      aria-haspopup="true"
                      role="combobox"
                      aria-activedescendant=""
                      aria-readonly="true"
                      aria-describedby="react-select-2-placeholder"
                      className="css-1hac4vs-dummyInput"
                      value=""
                    /> */}
                </div>
                <div className=" css-1w4wzgp">
                  <KeyboardArrowDownOutlined />
                </div>
              </div>
            </div>
            <ul className="!mb-1.5 flex flex-wrap gap-2.5 md:self-end self-auto">
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    ©
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    2024
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    Brand,
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    Inc.
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    •
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    Privacy
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    •
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    Terms
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    •
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className=" text-[14px] font-normal text-white-a700 undefined">
                    Sitemap
                  </p>
                </a>
              </li>
            </ul>
            <div className="md:w-[14%] flex justify-between items-center gap-5 w-full">
              <X className=" text-[#4CD2FF] !text-xl" />
              <Facebook className="text-[#4C8AFF]" />
              <LinkedIn className="text-[#5378D0]" />
              <YouTube className="text-[#FF4C4C]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
