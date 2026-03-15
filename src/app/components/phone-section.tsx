import imgArtboard1 from "figma:asset/51c81ed7601e45fad9a21b0da4c05b7703904376.png";
import imgDownload41 from "figma:asset/3e71587c4d1631e18396dc7e1260ca559824b18a.png";
import { StarsIcon, YogaIcon } from "./icons";

export function PhoneSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-[65px] items-center pb-[80px] px-[200px]">
        {/* Phone with side features */}
        <div className="flex items-center w-full">
          {/* Left feature */}
          <div className="flex flex-col items-start justify-center shrink-0">
            <div className="flex flex-col gap-[20px] items-start w-[158px]">
              <StarsIcon />
              <div className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-black">
                <p className="mb-0">Meet the future you,</p>
                <p>1 to 3 years ahead</p>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-1 flex items-center justify-center px-[182px]">
            <div className="h-[858px] w-[415px] relative shrink-0">
              <img
                alt="Phone mockup"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={imgArtboard1}
              />
            </div>
          </div>

          {/* Right feature */}
          <div className="flex flex-col gap-[20px] items-end justify-center w-[159px] shrink-0">
            <YogaIcon />
            <div className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-black text-right">
              <p className="mb-0">Backed by psychology,</p>
              <p>designed for growth</p>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex flex-col items-center">
          <div className="flex gap-[8px] items-center">
            <div className="h-[56px] w-[24px] relative shrink-0">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[117.65%] left-[-83.33%] top-[-8.82%] w-[266.67%] max-w-none" src={imgDownload41} />
              </div>
            </div>
            <div className="font-['Phudu',sans-serif] font-bold text-[18px] leading-[0.86] tracking-[-0.18px] text-black text-center">
              <p className="mb-0">1st world's</p>
              <p>first app</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="-scale-y-100 rotate-180">
                <div className="h-[56px] w-[25px] relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[117.65%] left-[-83.33%] top-[-8.82%] w-[266.67%] max-w-none" src={imgDownload41} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
