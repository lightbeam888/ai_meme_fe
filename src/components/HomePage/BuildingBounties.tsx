import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const BuildingBounties = () => {
  const data = [
    { id: 1, text: "Memes", isEmpty: false },
    { id: 2, text: "Art", isEmpty: false },
    { id: 3, text: "Integrations", isEmpty: false },
    { id: 4, text: "Apps", isEmpty: false },
    { id: 5, text: "Engagement", isEmpty: false },
    { id: 6, text: "Relationships", isEmpty: false },
    { id: 7, text: "Prediction", isEmpty: false },
    { id: 8, text: "Code", isEmpty: false },
    { id: 9, text: "Deals", isEmpty: false },
    { id: 10, text: "Referrals", isEmpty: false }
  ];

  return (
    <div className="py-12">
      <div className="container">
        <p className="text-center mx-auto text-[48px] md:text-[64px] uppercase font-vallejo max-w-[325px] md:max-w-[604px]">
          WE ARE BUILDING BOUNTIES FOR
        </p>
        <div className="max-w-[941px] mt-[30px] md:mt-[58px] mx-auto flex items-center justify-center flex-wrap gap-4">
          {data.map((val) => (
            <div
              key={val.id}
              className={cn(
                "bg-[#151515] p-4 flex items-center justify-center rounded-lg font-vallejo text-[12px] md:text-[28px]",

                "lg:w-[218px] w-[100px] md:w-[180px] px-4  h-[45px] md:h-[98px]",
                val.isEmpty && "bg-transparent"
              )}
            >
              {val.text}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 md:mt-12 text-center mx-auto flex-col gap-5 text-[18px] font-medium  ">
          <p>Whatever needs to be dreamt up, can be in the Akumanati.</p>
          <p>
            Buy 1M $AKUMA:{" "}
            <Link
              target="_blank"
              href={
                "https://app.uniswap.org/explore/tokens/base/0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6"
              }
            >
              Uniswap
            </Link>
          </p>
          <p>Or Hold an Akumanati NFT</p>
          <p>Join the most powerful cabal in crypto and come build at light speed with us.</p>
        </div>
      </div>
    </div>
  );
};
