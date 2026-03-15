import imgFrame13213139901 from "figma:asset/0c85da325cd34f37a8a255e4d0b3d39a66402377.png";
import { SparklesIcon } from "./icons";

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative w-full aspect-[1656/896]">
        <img
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={imgFrame13213139901}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-[241px]">
        <div className="flex flex-col items-center gap-[26px]">
          <div style={{ color: "white", mixBlendMode: "difference" }} className="font-['Phudu',sans-serif] font-extrabold text-[64px] leading-[58px] tracking-[-1px] text-center text-white mix-blend-difference">
            <p className="mb-0">Meet your future self</p>
            <p>{`TALK & LEARN from it`}</p>
          </div>
          <div style={{ color: "white", mixBlendMode: "difference" }} className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-center text-white mix-blend-difference">
            <p className="mb-0">The first AI app in the universe that lets you meet possible future of yourself.</p>
            <p>Explore how they live, experiment with their choices, and take the lessons back to grow in your real life.</p>
          </div>
          <button className="bg-white flex gap-[8px] items-center justify-center px-[24px] py-[14px] rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            <SparklesIcon className="size-[24px]" color="black" />
            <span className="font-['Manrope',sans-serif] font-bold text-[15px] leading-none tracking-[-0.6px] text-black text-center">
              Join Waitlist
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
