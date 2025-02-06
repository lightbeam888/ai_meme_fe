import Image from "next/image";
import React from "react";

const team1 = [
  {
    id: "bored",
    name: "BORED",
    imgSrc: "/team/royalties/1.jpeg"
  },
  {
    id: "hunter orrell🔥",
    name: "hunter orrell🔥",
    imgSrc: "/team/royalties/2.jpeg"
  },
  {
    id: "mattwright.eth | d/acc",
    name: "mattwright.eth | d/acc",
    imgSrc: "/team/royalties/3.jpeg"
  },
  {
    id: "Quigs.base.eth",
    name: "Quigs.base.eth",
    imgSrc: "/team/royalties/4.jpeg"
  }
];

const team2 = [
  {
    id: "RENDR | rendə(r)",
    name: "RENDR | rendə(r)",
    imgSrc: "/team/royalties/5.jpeg"
  },
  {
    id: "Vitalis (cute/acc)",
    name: "Vitalis (cute/acc)",
    imgSrc: "/team/royalties/6.jpeg"
  },
  {
    id: "Christopher Kocurek",
    name: "Christopher Kocurek",
    imgSrc: "/team/royalties/7.jpeg"
  },
  {
    id: "fity.eth",
    name: "fity.eth",
    imgSrc: "/team/royalties/8.jpeg"
  }
];

export const Royalty = () => {
  return (
    <div>
      <div className="text-center pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px]">
        <p className="max-w-[641px] mx-auto text-[48px] md:text-[100px] font-vallejo uppercase ">
          AKUMANATI <span className="text-red">ROYALTY</span>
        </p>
        <div className="mt-[97px] hidden md:block">
          <div className="max-w-[845px] grid grid-cols-4 gap-6 md:gap-x-28 md:gap-y-10 flex-wrap">
            {team1.map((val, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    className="max-w-[90px] w-full md:max-w-[131px]"
                    src={val.imgSrc}
                    width={131}
                    height={131}
                    alt={val.id}
                  />
                  <p className="mt-[18px] text-center font-vallejo text-sm md:text-[21px]">
                    {val.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12  grid grid-cols-4 max-w-[845px] ml-auto gap-6 md:gap-x-28 md:gap-y-10 flex-wrap">
            {team2.map((val, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    className="max-w-[90px] w-full md:max-w-[131px]"
                    src={val.imgSrc}
                    width={131}
                    height={131}
                    alt={val.id}
                  />
                  <p className="mt-[18px] text-center font-vallejo text-sm md:text-[21px]">
                    {val.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-[28px] md:hidden">
          <div className="mt-12  grid grid-cols-3 max-w-[845px] ml-auto gap-6 md:gap-x-28 md:gap-y-10 flex-wrap">
            {[...team1, ...team2].map((val, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    className="max-w-[90px] w-full md:max-w-[131px]"
                    src={val.imgSrc}
                    width={131}
                    height={131}
                    alt={val.id}
                  />
                  <p className="mt-[18px] text-center font-vallejo text-sm md:text-[21px]">
                    {val.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
