import imgFrame13213139711 from "figma:asset/8ea358a00f8770b586620bd614d5d84258993127.png";
import imgDownload41 from "figma:asset/3e71587c4d1631e18396dc7e1260ca559824b18a.png";
import { ExpLowLogoGradient } from "./icons";

export function FooterSection() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Large image */}
      <div className="w-full relative">
        <img
          alt="Artistic hand"
          className="w-full h-[632px] object-cover pointer-events-none"
          src={imgFrame13213139711}
        />
      </div>

      {/* Footer content */}
      <div className="w-full flex items-end justify-between px-[200px] py-[60px]">
        {/* Left column */}
        <div className="flex flex-col gap-[32px] items-start justify-center w-[458px]">
          <ExpLowLogoGradient />
          <p className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-black">
            The first AI app in the universe that lets you meet possible future of yourself. Explore how they live, experiment with their choices, and take the lessons back to grow in your real life.
          </p>
          <button className="bg-black flex gap-[8px] h-[52px] items-center justify-center px-[24px] py-[14px] rounded-full cursor-pointer hover:bg-gray-900 transition-colors">
            <span className="font-['Manrope',sans-serif] font-bold text-[15px] leading-none tracking-[-0.6px] text-white text-center">
              Join Waitlist
            </span>
          </button>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-[32px] items-end justify-end w-[571px]">
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

          <div className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[rgba(0,0,0,0.25)] text-right">
            <p className="mb-0">Developed by</p>
            <p>theunlimitedhumanity.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
