import Link from "next/link";
import React from "react";

export const BuyWithoutFearInternal = () => {
  return (
    <div>
      {" "}
      <p className="text-center text-[48px] font-vallejo uppercase leading-[1] max-w-[230px] md:max-w-[unset] mx-auto">
        Buy without Fear
      </p>
      <div className=" rounded-xl mt-4 md:mt-7 font-vallejo text-[24px] max-w-[600px] mx-auto ">
        <div className="flex items-center justify-center gap-5 ">
          <Link
            className="w-[131px] h-[44px] bg-red text-black border text-center flex items-center justify-center border-white rounded-lg"
            href={"#"}
          >
            FIAT
          </Link>
          <Link
            className="w-[131px] h-[44px] bg-red text-black border text-center flex items-center justify-center border-white rounded-lg"
            href={"#"}
          >
            CRYPTO
          </Link>
        </div>
        <div className="px-4 mt-4">
          <p className="text-lg text-center">Ca: 0xeEC37AB9bb9058bEEb0B4f931f685Bb74fC42EeA</p>
        </div>
      </div>
    </div>
  );
};
