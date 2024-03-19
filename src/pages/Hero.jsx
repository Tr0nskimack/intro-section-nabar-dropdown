import React from "react";
import Balancer from "react-wrap-balancer";
import databiz from "/client-databiz.svg";
import audiophile from "/client-audiophile.svg";
import maker from "/client-maker.svg";
import meet from "/client-meet.svg";
import imagedesktop from "/image-hero-desktop.png"
import imagemobile from "/image-hero-mobile.png"
export const Hero = () => {
  const dataimages = [databiz, audiophile, maker, meet];
  return (
    <section className="mx-auto flex max-w-6xl  flex-col-reverse gap-2 px-3 pb-12 transition-all md:flex-row md:gap-4">
      {/* left */}
      <div className="flex flex-col items-center gap-6 pt-8 text-center md:w1/2 md:items-staart md:gap-10 md:pt-32 md-text-left">
        <Balancer>
          <h1 className="text-4xl font-semibold md:text-6xl">
            Make remote work
          </h1>
        </Balancer>

        <Balancer>
          <p className="text-neutral-400 md:max-w-[400px]">
            Get your team in sunc, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </Balancer>
        <button className="px-4 py-2 border-black border-2 bg-black text-white rounded-xl hover:text-black/90 hover:bg-white transition-all duration-300 w-fit">
          Lear More
        </button>

        <div className=" flex items-center gap-2 md:gap-6 ">
          {dataimages.map((image) => {
            return <img src={image} alt="marcas" key={image} />;
          })}
        </div>
      </div>
      {/* right */}
      <section className="md:w-1/2">
        <img src={imagedesktop} className="hidden h-auto max-w-[400px] md:block" alt="hero-image" />
        <img src={imagemobile} className="h-auto md:hidden" alt="hero-image" />

      </section>




    </section>
  );
};
