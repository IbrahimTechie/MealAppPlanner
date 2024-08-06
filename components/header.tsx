import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-32 sm:h-56">
      <div className="absolute inset-0">
        <Image
          src={"/pizza.jpg"}
          alt={"Pizza"}
          layout="fill"
          objectFit="cover"
          className="opacity-35"
        />
      </div>
      <div className="relative text-center p-4">
        <h1 className="text-2xl sm:text-4xl font-bold">Optimized Your Meal</h1>
        <p className="text-xs sm:text-base">
          Select Meal to Add in Week. You will be able to edit, modify and
          change the Meal Weeks.
        </p>
      </div>
    </div>
  );
};

export default Header;
