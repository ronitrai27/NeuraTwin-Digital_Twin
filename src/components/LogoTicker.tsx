import Image from "next/image";
import acme from "../../public/acme.png";
import quant from "../../public/quantum.png";
import echo from "../../public/echo.png";
import celestial from "../../public/celestial.png";
import pulse from "../../public/pulse.png";
import apex from "../../public/apex.png";

const images = [
  { src: acme, alt: "Acme logo" },
  { src: quant, alt: "Quantum logo" },
  { src: echo, alt: "Echo logo" },
  { src: celestial, alt: "Celestial logo" },
  { src: pulse, alt: "Pulse logo" },
  { src: apex, alt: "Apex logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] mt-14">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-center text-white/70 font-outfit">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-20 after:w-20 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex gap-16">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={120}
                height={60}
                className=" flex-none h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
