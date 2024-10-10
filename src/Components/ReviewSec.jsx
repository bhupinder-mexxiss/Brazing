import React from "react";
import { Slider } from "./slider";
import { RatingBar } from "./RatingBar";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Img } from "./ImgComp";
import { Button } from "./ButtonComp";
import review from "../assets/Images/review.png";
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
export default function TestimonialSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* testimonial section */}
      <div className="relative h-[504px] content-center md:h-auto px-5">
        <div className="relative mx-auto h-[504px] w-full content-center md:h-auto">
          {" "}
          <div className="sliderratingone mx-auto flex w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                1051: { items: 1 },
              }}
              renderDotsItem={(props) => {
                return props?.isActive ? (
                  <div className="mr-1 inline-block h-[10px] w-[20px] cursor-pointer rounded-[5px] bg-deep_orange-900" />
                ) : (
                  <div className="mr-1 inline-block h-[10px] w-[10px] cursor-pointer rounded-[5px] bg-gray-300" />
                );
              }}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex bg-white-a700 md:py-24 py-5">
                    <div className="container-xs flex items-center justify-between gap-5 flex-col md:flex-row md:px-5">
                      <Img
                        src={review}
                        alt="Image"
                        className="h-[312px] w-[24%] rounded-[12px] object-contain
                      md:w-full"
                      />

                      <div className="flex w-[64%] flex-col items-start gap-8 md:w-full">
                        <RatingBar
                          value={5}
                          isEditable={true}
                          size={36}
                          className="flex gap-2.5"
                        />{" "}
                        <Text
                          size="text1g"
                          as="p"
                          className="w-[96%] text-[20px] font-normal leading-[30px] text-gray-900_01 md:w-full"
                        >
                          Brazing has completely transformed the way I manage my
                          team. The intuitive interface and robust features have
                          made our workflow seamless.
                        </Text>
                        <div className="flex flex-col items-start gap-0.5">
                          <Heading
                            size="headingmd"
                            as="h2"
                            className="text-[20px] font-bold text-gray-900_01"
                          >
                            {" "}
                            Emily Johnson
                          </Heading>
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[18px] font-normal text-gray-500"
                          >
                            {" "}
                            Project Manager
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="m-auto flex gap-[114px]">
            <Button
              size="xs"
              shape="square"
              onClick={() => {
                sliderRef?.current?.slidePrev();
              }}
              className="absolute bottom-[30%] left-10 w-8 h-8 rounded-full border border-deep_orange-900 flex items-center justify-center"
            >
              <KeyboardArrowLeftOutlined/>
            </Button>
            <Button
              size="xs"
              shape="square"
              onClick={() => {
                sliderRef?.current?.slideNext();
              }}
              className="absolute bottom-[30%] right-10 w-8 h-8 rounded-full border border-deep_orange-900 flex items-center justify-center"
            >
              <KeyboardArrowRightOutlined/>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
