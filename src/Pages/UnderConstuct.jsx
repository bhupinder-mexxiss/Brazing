import React from "react";
import img from "../assets/Images/underConstruct.png";
// import img2 from "../assets/images/underConstruct2.png";

const UnderConstruct = () => {
  return (
    <div className="py-0 bg-white">
      {/* <img src={img2} className="h-[600px] mx-auto" /> */}
      <div className="container mx-auto">
        <div className="flex items-center gap-10 justify-center max-w-[1280px] mx-auto">
          <div className="">
            <p className="text-3xl font-bold mt-8 text-deep_orange-900 uppercase">Welcome to Mexxiss Technology</p>
            <p className="text-xl text-text1 font-bold mt-8 ">
              <span className=" uppercase">
                Currently Our Website is Under <br />{" "}
                <span className="italic">Construction</span> and 
                <span className="italic"> Enhancement{" "}</span>
              </span>
            </p>
            <button className="rounded text-xl text-[#fff] font-medium mt-8 uppercase bg-deep_orange-900 px-4 py-2">
              Coming Soon
            </button>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruct;
