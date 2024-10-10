import React, { useState } from "react";
import bannerBg from "../assets/banner.png";
import bannerBg2 from "../assets/banner2.png";
import bannerBg3 from "../assets/Banner3.png";
import bannerBg4 from "../assets/banner4.png";
import bannerBg5 from "../assets/banner5.png";
import Product1 from "../assets/Images/Product1.png";
import Product2 from "../assets/Images/Product2.png";
import Product3 from "../assets/Images/Product3.png";
import Product5 from "../assets/Images/Product5.png";
import ring from "../assets/Images/ring.png";
import support from "../assets/Images/support.png";
import question from "../assets/Images/question.png";
import howItsWork1 from "../assets/Images/howItsWork1.png";
import howItsWork2 from "../assets/Images/howItsWork2.png";
import howItsWork3 from "../assets/Images/howItsWork3.png";
import resources from "../assets/Images/resources.png";
import eco from "../assets/eco.png";
import tech from "../assets/tech.png";
import performance from "../assets/performance.png";
import design from "../assets/design.png";
import quality from "../assets/quality.png";
import trust from "../assets/trust.png";
import TestimonialSection from "../Components/ReviewSec";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import {
  EmailOutlined,
  Facebook,
  KeyboardArrowDownOutlined,
  LinkedIn,
  Twitter,
  X,
  YouTube,
} from "@mui/icons-material";
import { Heading } from "../Components/Heading";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true, // Enable fade effect between slides
    beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide when slide changes
  };

  // Array containing sets of images for each slide and associated titles/descriptions
  const collageSlides = [
    {
      images: [
        bannerBg,
        bannerBg2,
        bannerBg3,
        bannerBg4,
        bannerBg5,
        Product1,
        Product2,
        Product3,
        Product5,
        bannerBg4,
        bannerBg5,
        Product5,
        bannerBg,
        bannerBg2,
        bannerBg3,
        bannerBg4,
        bannerBg5,
        Product1,
        bannerBg4,
        Product3,
        Product5,
        bannerBg4,
        bannerBg5,
        Product5,
      ],
      title: "Froged is building the future of customer engagement",
      description:
        "Innovative solutions for seamless customer interactions and growth.",
      buttonText: "Explore features",
    },
    {
      images: [
        bannerBg5,
        bannerBg4,
        bannerBg3,
        Product1,
        bannerBg2,
        bannerBg,
        Product1,
        bannerBg4,
        bannerBg3,
        Product5,
        Product2,
        bannerBg,
        bannerBg5,
        bannerBg4,
        Product3,
        bannerBg3,
        bannerBg2,
        bannerBg,
        Product5,
        bannerBg4,
        Product1,
        bannerBg3,
        Product5,
        bannerBg,
      ],
      title: "Engage Your Customers Effectively",
      description: "Drive conversions with tailored customer solutions.",
      buttonText: "Get Started",
    },
    {
      images: [
        bannerBg2,
        bannerBg4,
        bannerBg5,
        bannerBg,
        bannerBg3,
        bannerBg4,
        bannerBg2,
        bannerBg4,
        bannerBg5,
        bannerBg,
        bannerBg3,
        bannerBg,
        bannerBg5,
        bannerBg4,
        Product3,
        bannerBg3,
        bannerBg2,
        bannerBg,
        Product5,
        bannerBg4,
        Product1,
        bannerBg3,
        Product5,
        bannerBg,
      ],
      title: "Optimize Your Customer Experience",
      description: "Deliver personalized support to retain customers.",
      buttonText: "Learn More",
    },
    {
      images: [
        bannerBg,
        bannerBg2,
        bannerBg3,
        bannerBg4,
        bannerBg5,
        Product1,
        Product2,
        Product3,
        Product5,
        bannerBg4,
        bannerBg5,
        Product5,
        bannerBg,
        bannerBg2,
        bannerBg3,
        bannerBg4,
        bannerBg5,
        Product1,
        bannerBg4,
        Product3,
        Product5,
        bannerBg4,
        bannerBg5,
        Product5,
      ],
      title: "Froged is building the future of customer engagement",
      description:
        "Innovative solutions for seamless customer interactions and growth.",
      buttonText: "Explore features",
    },
    {
      images: [
        bannerBg5,
        bannerBg4,
        bannerBg3,
        Product1,
        bannerBg2,
        bannerBg,
        Product1,
        bannerBg4,
        bannerBg3,
        Product5,
        Product2,
        bannerBg,
        bannerBg5,
        bannerBg4,
        Product3,
        bannerBg3,
        bannerBg2,
        bannerBg,
        Product5,
        bannerBg4,
        Product1,
        bannerBg3,
        Product5,
        bannerBg,
      ],
      title: "Engage Your Customers Effectively",
      description: "Drive conversions with tailored customer solutions.",
      buttonText: "Get Started",
    },
    {
      images: [
        bannerBg2,
        bannerBg4,
        bannerBg5,
        bannerBg,
        bannerBg3,
        bannerBg4,
        bannerBg2,
        bannerBg4,
        bannerBg5,
        bannerBg,
        bannerBg3,
        bannerBg,
        bannerBg5,
        bannerBg4,
        Product3,
        bannerBg3,
        bannerBg2,
        bannerBg,
        Product5,
        bannerBg4,
        Product1,
        bannerBg3,
        Product5,
        bannerBg,
      ],
      title: "Optimize Your Customer Experience",
      description: "Deliver personalized support to retain customers.",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="text-4xl">
      {/* Banner */}
      <div className="overflow-hidden pb-8">
        <Slider {...settings}>
          {collageSlides.map((slide, index) => (
            <div key={index} className="relative">
              {/* Grid of images (collage) */}
              <div className="grid grid-cols-8 grid-rows-3">
                {slide.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="h-[180px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                ))}
              </div>

              {/* Title, description, and button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-50 bg-[#000] text-white-a700">
                <h1
                  className={`${
                    currentSlide === index
                      ? "animate__animated animate__fadeInUp"
                      : ""
                  } text-[48px] leading-[60px] md:text-[64px] font-bold text-white`}
                  style={{
                    animationDelay: currentSlide === index ? "400ms" : "0ms", // Apply delay
                  }}
                  key={`title-${index}`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`${
                    currentSlide === index
                      ? "animate__animated animate__fadeInUp"
                      : ""
                  } text-[22px] text-white mt-2`}
                  style={{
                    animationDelay: currentSlide === index ? "600ms" : "0ms", // Apply delay
                  }}
                  key={`desc-${index}`}
                >
                  {slide.description}
                </p>
                <Link to="/product"
                  className={`${
                    currentSlide === index
                      ? "animate__animated animate__fadeInUp"
                      : ""
                  } mt-4 px-6 py-3 text-[18px] bg-deep_orange-900 text-white rounded-lg`}
                  style={{
                    animationDelay: currentSlide === index ? "800ms" : "0ms", // Apply delay
                  }}
                  key={`btn-${index}`}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        {/* <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${banner.image})` }}
              className=" h-[520px] bg-gray-900 bg-cover bg-no-repeat md:h-auto"
            >
              <div className="py-[168px] flex flex-col items-center justify-center bg-gray-900_66 h-full">
                <div className="max-w-[1400px] mx-auto flex w-full flex-col items-center gap-6 md:px-5">
                  <h1 className="text-[48px] leading-[74px] md:text-[64px] self-stretch text-center font-archivo font-bold text-white-a700">
                    {banner.title}
                  </h1>
                  <p className="md:text-[22px] text-[24px] font-normal text-white-a700">
                    {banner.description}
                  </p>
                  <button className="min-w-[180px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[52px] px-5 text-[18px] bg-deep_orange-900 text-white-a700">
                    {banner.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider> */}
      </div>

      <div className="bg-white-a700 md:py-14 py-5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 md:gap-5">
            <div className="px-4 xl:px-7 py-7 border-t-4 border-t-[#E36159] rounded-lg border border-[#ECECEC] shadow-[0_1px_1px_0_#0000000a] flex items-center justify-center flex-col text-center cursor-pointer relative group">
              <Link to="/product" className="absolute w-full h-full top-0 left-0"></Link>
              <Heading
                children="Products you need"
                as="h3"
                size="24"
                fontWeight="400"
                className="!text-deep_orange-900 uppercase"
              />
              <p className="mt-4 md:mt-6 mb-2.5 text-sm">
                Brazing, Welding, Soldering & Metallizing Filler Metals
              </p>
              <p className="text-deep_orange-900 font-semibold text-sm border-b border-transparent group-hover:border-b-deep_orange-900">
                FIND what you need
              </p>
            </div>
            <div className="px-4 xl:px-7 py-7 border-t-4 border-t-[#E36159] rounded-lg border border-[#ECECEC] shadow-[0_1px_1px_0_#0000000a] flex items-center justify-center flex-col text-center cursor-pointer relative group">
              <Link to="/product" className="absolute w-full h-full top-0 left-0"></Link>
              <Heading
                children="Prices you want"
                as="h3"
                size="24"
                fontWeight="400"
                className="!text-deep_orange-900 uppercase"
              />
              <p className="mt-4 md:mt-6 mb-2.5 text-sm">
                High quality, industrial-certified materials at globally
                competitive prices
              </p>
              <p className="text-deep_orange-900 font-semibold text-sm border-b border-transparent group-hover:border-b-deep_orange-900">
                REQUEST a quote
              </p>
            </div>
            <div className="px-4 xl:px-7 py-7 border-t-4 border-t-[#E36159] rounded-lg border border-[#ECECEC] shadow-[0_1px_1px_0_#0000000a] flex items-center justify-center flex-col text-center cursor-pointer relative group">
              <Link to="/product" className="absolute w-full h-full top-0 left-0"></Link>
              <Heading
                children="INFORMATION YOU SEEK"
                as="h3"
                size="24"
                fontWeight="400"
                className="!text-deep_orange-900 uppercase"
              />
              <p className="mt-4 md:mt-6 mb-2.5 text-sm">
                Safety Data Sheets. Product Specifications. Technical
                Information and Reference Tables.
              </p>
              <p className="text-deep_orange-900 font-semibold text-sm border-b border-transparent group-hover:border-b-deep_orange-900">
                LEARN more
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <div className="bg-white-a700 md:py-14 py-5">
        <div className="flex flex-col items-center">
          <div className="max-w-[1400px] mx-auto flex w-full flex-col items-center px-5">
            <p className=" sm:text-[36px] md:text-[38px] text-[40px] font-archivo font-normal text-deep_orange-900 undefined">
              Our Product
            </p>
            <p className=" text-[16px] mt-3.5 font-normal text-black-900 undefined">
              Product Roster
            </p>
            <div className="mt-9 flex gap-4 self-stretch flex-col md:flex-row">
              <div className="w-[24%] flex flex-col justify-between items-center gap-2.5 rounded-md bg-white-a700 p-4 shadow-xs md:w-full">
                <div className="flex flex-col items-start self-stretch">
                  <img
                    className="h-[332px] w-full rounded-lg object-cover"
                    src={Product1}
                    alt="Product Image"
                    loading="lazy"
                  />
                  <h6 className=" text-[16px] font-bold text-gray-900_01 mt-2">
                    Copper Tube
                  </h6>
                  <p className=" text-[14px] mt-2 font-normal text-gray-500 undefined">
                    New &amp;lt;2 weeks old&amp;gt;
                  </p>
                  <p className=" leading-[22px] text-[14px] mt-2 w-full font-normal text-gray-500 undefined">
                    High-quality copper tube ideal for HVAC installations.
                  </p>
                </div>
                <Link to="/product" className="mt-5 self-stretch border border-solid border-deep_orange-900 sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] px-[34px] text-[14px] bg-white-a700 text-deep_orange-900 hover:bg-deep_orange-900 hover:text-white-a700 duration-300">
                  Explore
                </Link>
              </div>
              <div className="w-[24%] flex flex-col justify-between items-center gap-2.5 rounded-md bg-white-a700 p-4 shadow-xs md:w-full">
                <div className="flex flex-col items-start self-stretch">
                  <img
                    className="h-[332px] w-full rounded-lg object-cover"
                    src={Product2}
                    alt="Product Image"
                    loading="lazy"
                  />
                  <h6 className=" text-[16px] font-bold text-gray-900_01 mt-2">
                    Copper Fittings
                  </h6>
                  <p className=" text-[14px] mt-2 font-normal text-gray-500 undefined">
                    New &amp;lt;A few months old&amp;gt;
                  </p>
                  <p className=" leading-[22px] text-[14px] mt-2 w-full font-normal text-gray-500 undefined">
                    Durable copper fittings suitable for plumbing.
                  </p>
                </div>
                <Link to="/product" className="mt-5 self-stretch border border-solid border-deep_orange-900 sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] px-[34px] text-[14px] bg-white-a700 text-deep_orange-900 hover:bg-deep_orange-900 hover:text-white-a700 duration-300">
                  Discover
                </Link>
              </div>
              <div className="w-[24%] flex flex-col justify-between items-center gap-2.5 rounded-md bg-white-a700 p-4 shadow-xs md:w-full">
                <div className="flex flex-col items-start self-stretch">
                  <img
                    className="h-[332px] w-full rounded-lg object-cover"
                    src={Product3}
                    alt="Product Image"
                    loading="lazy"
                  />
                  <h6 className=" text-[16px] font-bold text-gray-900_01 mt-2">
                    Copper Sheet
                  </h6>
                  <p className=" text-[14px] mt-2 font-normal text-gray-500 undefined">
                    Old
                  </p>
                  <p className=" leading-[22px] text-[14px] mt-2 w-full font-normal text-gray-500 undefined">
                    Versatile copper sheet perfect for industrial applications.
                  </p>
                </div>
                <Link to="/product" className="mt-5 self-stretch border border-solid border-deep_orange-900 sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] px-[34px] text-[14px] bg-white-a700 text-deep_orange-900 hover:bg-deep_orange-900 hover:text-white-a700 duration-300">
                  View
                </Link>
              </div>
              <div className="w-[24%] flex flex-col items-center gap-2.5 rounded-md bg-white-a700 p-4 shadow-xs md:w-full">
                <div className="flex flex-col items-start self-stretch">
                  <img
                    className="h-[332px] w-full rounded-lg object-cover"
                    src={Product5}
                    alt="Product Image"
                    loading="lazy"
                  />
                  <h6 className=" text-[16px] font-bold text-gray-900_01 mt-2">
                    Copper Rod
                  </h6>
                  <p className=" text-[14px] mt-2 font-normal text-gray-500 undefined">
                    New &amp;lt;3 months old&amp;gt;
                  </p>
                  <p className=" leading-[22px] text-[14px] mt-2 w-full font-normal text-gray-500 undefined">
                    Strong copper rod designed for construction purposes.
                  </p>
                </div>
                <Link to="/product" className="mt-5 self-stretch border border-solid border-deep_orange-900 sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] px-[34px] text-[14px] bg-white-a700 text-deep_orange-900 hover:bg-deep_orange-900 hover:text-white-a700 duration-300">
                  Check
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wHY Choose us */}
      <div>
        <div className="flex flex-col items-center bg-white-a700 md:py-14 py-5">
          <div className="max-w-[1400px] mx-auto flex w-full flex-col items-center px-5">
            <p className=" sm:text-[36px] md:text-[38px] text-[40px] font-archivo font-normal text-orange-800 undefined">
              Why Choose Us
            </p>
            <p className=" text-xl mt-[22px] font-normal text-black-900 md:w-full text-center">
              Our brazing solutions are designed to meet the highest standards
              of quality and reliability. We use state-of-the-art technology and
              materials to ensure that our products perform exceptionally well
              in demanding environments. Our team of experts is dedicated to
              providing customized solutions that meet the specific needs of
              each client. Whether you need brazing for automotive, aerospace,
              or industrial applications, we have the expertise and experience
              to deliver outstanding results.
            </p>
            <div className="grid grid-cols-3 gap-5 w-full mt-10">
              <div className="bg-[#FBF8EF] rounded-xl py-4 px-10 text-center">
                <img src={quality} alt="" className="w-7 mb-2.5 mx-auto" />
                <p className=" text-3xl font-archivo font-medium text-[#261501] mb-1 undefined">
                  Quality
                </p>
                <p className=" text-lg font-archivo font-normal text-orange-800 undefined">
                  Durable
                </p>
              </div>
              <div className="bg-[#FBF8EF] rounded-xl py-4 px-10 text-center">
                <img src={performance} alt="" className="w-7 mb-2.5 mx-auto" />
                <p className=" text-3xl font-archivo font-medium text-[#261501] mb-1 undefined">
                  Performance
                </p>
                <p className=" text-lg font-archivo font-normal text-orange-800 undefined">
                  Efficient
                </p>
              </div>
              <div className="bg-[#FBF8EF] rounded-xl py-4 px-10 text-center">
                <img src={trust} alt="" className="w-7 mb-2.5 mx-auto" />
                <p className=" text-3xl font-archivo font-medium text-[#261501] mb-1 undefined">
                  Trust
                </p>
                <p className=" text-lg font-archivo font-normal text-orange-800 undefined">
                  Reliable
                </p>
              </div>
              <div className="bg-[#FBF8EF] rounded-xl py-4 px-10 text-center">
                <img src={design} alt="" className="w-7 mb-2.5 mx-auto" />
                <p className=" text-3xl font-archivo font-medium text-[#261501] mb-1 undefined">
                  Design
                </p>
                <p className=" text-lg font-archivo font-normal text-orange-800 undefined">
                  Custom
                </p>
              </div>
              <div className="bg-[#FBF8EF] rounded-xl py-4 px-10 text-center">
                <img src={tech} alt="" className="w-7 mb-2.5 mx-auto" />
                <p className=" text-3xl font-archivo font-medium text-[#261501] mb-1 undefined">
                  Tech
                </p>
                <p className=" text-lg font-archivo font-normal text-orange-800 undefined">
                  Innovative
                </p>
              </div>
              <div className="bg-[#FBF8EF] rounded-xl py-4 px-10 text-center">
                <img src={eco} alt="" className="w-7 mb-2.5 mx-auto" />
                <p className=" text-3xl font-archivo font-medium text-[#261501] mb-1 undefined">
                  Eco
                </p>
                <p className=" text-lg font-archivo font-normal text-orange-800 undefined">
                  Sustainable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Its Work */}
      <div>
        <div className="flex flex-col items-center bg-white-a700 md:py-14 py-5">
          <div className="max-w-[1400px] mx-auto flex w-full flex-col items-center px-5">
            <div className="mx-5 flex items-center justify-center w-full relative">
              <div className="flex gap-5 absolute left-0">
                <img
                  className="w-[32px] h-[32px]"
                  src={ring}
                  alt="Ring Image"
                  loading="lazy"
                />
                <img
                  className="w-[32px] h-[32px]"
                  src={support}
                  alt="Support Image"
                  loading="lazy"
                />
                <img
                  className="w-[32px] h-[32px]"
                  src={question}
                  alt="Question Mark"
                  loading="lazy"
                />
              </div>
              <p className=" sm:text-[36px] md:text-[38px] text-[40px] font-archivo font-normal text-orange-800 undefined">
                How it Works
              </p>
              <div></div>
            </div>
            <p className=" md:text-[22px] text-[24px] mt-[22px] w-[60%] font-normal leading-9 text-black-900 md:w-full text-center">
              Explore our best-in-class hands-on customer engagement features
              that elevate your experience with our products.
            </p>
            <div className="mt-9 flex gap-4 self-stretch flex-col md:flex-row justify-between">
              <div className="w-[32%] flex items-center rounded-md bg-white-a700 p-4 shadow-xs md:w-full">
                <div className="flex w-full items-center gap-4">
                  <div className="gap-[50px] flex flex-1 flex-col items-start">
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <p className=" text-[20px] font-archivo font-normal text-gray-900_01 undefined">
                        Expert Guidance
                      </p>
                      <p className=" leading-[22px] text-[14px] w-full font-normal text-gray-500 undefined">
                        Our experts guide you through each feature, ensuring you
                        get the most out of our products.
                      </p>
                    </div>
                    <Link to="/explore" className="min-w-[100px] border border-solid border-deep_orange-900 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] px-[34px] text-[14px] bg-white-a700 text-deep_orange-900 hover:bg-deep_orange-900 hover:text-white-a700 duration-300">
                      Learn More
                    </Link>
                  </div>
                  <img
                    className="w-[48%] h-[212px] rounded object-contain"
                    src={howItsWork1}
                    alt="Guidance Image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-[32%] flex items-center rounded-md bg-white-a700 p-4 shadow-xs md:w-full">
                <div className="flex w-full items-center gap-4">
                  <div className="gap-[50px] flex flex-1 flex-col items-start">
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <p className=" text-[20px] font-archivo font-normal text-gray-900_01 undefined">
                        Expert Guidance
                      </p>
                      <p className=" leading-[22px] text-[14px] w-full font-normal text-gray-500 undefined">
                        Our experts guide you through each feature, ensuring you
                        get the most out of our products.
                      </p>
                    </div>
                    <Link to="/explore" className="min-w-[100px] border border-solid border-deep_orange-900 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] px-[34px] text-[14px] bg-white-a700 text-deep_orange-900 hover:bg-deep_orange-900 hover:text-white-a700 duration-300">
                      Learn More
                    </Link>
                  </div>
                  <img
                    className="w-[48%] h-[212px] rounded object-contain"
                    src={howItsWork2}
                    alt="Guidance Image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-[32%] flex items-center rounded-md bg-white-a700 p-4 shadow-xs md:w-full">
                <div className="flex w-full items-center gap-4">
                  <div className="gap-[50px] flex flex-1 flex-col items-start">
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <p className=" text-[20px] font-archivo font-normal text-gray-900_01 undefined">
                        Expert Guidance
                      </p>
                      <p className=" leading-[22px] text-[14px] w-full font-normal text-gray-500 undefined">
                        Our experts guide you through each feature, ensuring you
                        get the most out of our products.
                      </p>
                    </div>
                    <Link to="/explore" className="min-w-[100px] border border-solid border-deep_orange-900 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] px-[34px] text-[14px] bg-white-a700 text-deep_orange-900 hover:bg-deep_orange-900 hover:text-white-a700 duration-300">
                      Learn More
                    </Link>
                  </div>
                  <img
                    className="w-[48%] h-[212px] rounded object-contain"
                    src={howItsWork3}
                    alt="Guidance Image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="flex flex-col items-center justify-center bg-white-a700 md:py-14 py-5">
        <div className="max-w-[1400px] gap-[38px] mx-auto flex w-full flex-col items-center px-5">
          <p className=" sm:text-[36px] md:text-[38px] text-[40px] font-archivo font-normal text-deep_orange-900 undefined">
            Resources
          </p>
          <div className="flex flex-col items-start self-stretch rounded-md bg-white-a700 p-4 shadow-xs">
            <img
              className="h-[162px] w-full rounded-lg object-cover md:h-auto"
              src={resources}
              alt="Feature Image"
              loading="lazy"
            />
            <h2 className=" text-[16px] mt-2 font-bold text-gray-900_01 undefined">
              Sales Growth
            </h2>
            <p className=" text-[14px] mt-2.5 font-normal text-gray-500 undefined">
              Explore the key strategies that drive sales success in today's
              market. Learn from industry leaders and their proven approaches.
            </p>
            <p className=" text-[14px] mt-[76px] mb-3 font-normal text-gray-500 undefined">
              Published on: October 5, 2023
            </p>
          </div>
        </div>
      </div>

      {/* Review Sec */}
      <TestimonialSection />

      {/* Level Up Today */}
      <div>
        <div className="md:py-[104px] flex flex-col items-center justify-center rounded-md bg-gray-50 py-5">
          <div className="max-w-[1400px] mx-auto mt-1.5 flex w-full flex-col items-center gap-3.5 px-14">
            <h2 className=" sm:text-[38px] md:text-[44px] text-[48px] font-archivo font-bold text-deep_orange-900 undefined">
              Level Up Today
            </h2>
            <p className=" text-[18px] font-normal text-gray-900_01 undefined">
              Unlock your potential with Brazing. Choose your path and start
              your journey towards success.
            </p>
            <Link to="/explore" className="min-w-[134px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[46px] px-5 text-[18px] bg-deep_orange-900 text-white-a700">
              Get started
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
Home;
