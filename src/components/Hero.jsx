import React from "react";

export const Hero = () => {
  return (
    <div className="mt-[120px] px-[120px] flex gap-40 md:flex-col-reverse">
      {/* left */}
      <div className="md:text-center">
        <h1 className="text-8xl font-bold text-black_p">Make<br/> remote work</h1>
        <p className="pt-20 font-semibold text-gray_p text-[20px]">
          Get your team in sync. no matter your location. <br/>Streamline processes.
          creaet team rituals, and<br/> watch productivity soar.
        </p>
        <button className=" bg-black_p mt-20 hover:text-black_p hover:font-bold text-White_p px-7 py-3 font-semibold rounded-xl hover:bg-White_p border-2 hover:border-black transition-all h-fit">
          Learn more
        </button>
        {/* iconos */}
        <div className="mt-[140px] flex space-x-8 items-center">
          <img src="client-databiz.svg" alt="" />
          <img src="client-audiophile.svg" alt="" />
          <img src="client-meet.svg" alt="" />
          <img src="client-maker.svg" alt="" />
        </div>
      </div>

      {/* Right */}
      <div className="">
        <img src="image-hero-desktop.png" className="w-[500px]" alt="" />
      </div>
    </div>
  );
};
