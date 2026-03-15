import imgImage4 from "figma:asset/323bad8b6605951197a64613bd818fae57e230a3.png";
import imgImage5 from "figma:asset/306da8c7f8dd4a675af40b35facc3ba44102901b.png";
import imgImages1 from "figma:asset/4c27d78173091ce52e93f4a6ebfe21bbc7f878a7.png";
import { NoteIcon, AiBusinessLogo } from "./icons";

export function ArticlesSection() {
  return (
    <section className="bg-[#f7f7f7] w-full">
      <div className="flex flex-col gap-[80px] items-center pb-[80px] pt-[72px] px-[200px]">
        {/* Header */}
        <div className="flex flex-col gap-[32px] items-start w-full">
          <div className="flex items-start justify-between w-full">
            <div className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-black whitespace-pre-wrap">
              <p className="mb-0">/</p>
              <p className="mb-0">&nbsp;</p>
              <p>Things you should read</p>
            </div>
            <div className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-black text-right whitespace-pre-wrap">
              <p className="mb-0">/</p>
              <p className="mb-0">&nbsp;</p>
              <p>2 Ariticles</p>
            </div>
          </div>
          <div className="flex items-end justify-between w-full">
            <p className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.29] tracking-[-0.15px] text-black w-[412px]">
              {`Imagine the possibility of communicating with your future self 1 to  3 years ahead. How might such an encounter influence present decision-making?`}
            </p>
            <NoteIcon />
          </div>
        </div>

        {/* Article cards */}
        <div className="flex gap-[32px] items-start w-[1256px]">
          {/* Card 1 */}
          <a 
            href="https://aibusiness.com/nlp/-future-you-ai-allows-you-to-meet-your-future-self" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white flex-1 rounded-[56px] transition-transform hover:-translate-y-[10px] block"
          >
            <div className="flex items-end">
              <div className="flex gap-[32px] items-end pl-[32px] pr-[44px] py-[32px] w-full">
                <div className="bg-[#737373] overflow-clip rounded-[30px] shrink-0 size-[278px]">
                  <img alt="Article 1" className="w-full h-full object-cover pointer-events-none" src={imgImage4} />
                </div>
                <div className="flex flex-1 flex-col h-[278px] items-start justify-between">
                  <p className="block font-['Phudu',sans-serif] font-bold text-[25px] leading-[1.02] tracking-[-0.25px] text-black">
                    'Future You' AI Allows You to Meet Your Future Self
                  </p>
                  <AiBusinessLogo />
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="https://psyche.co/guides/how-to-connect-with-your-future-self-and-make-better-choices"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex-1 rounded-[56px] transition-transform hover:-translate-y-[10px] block"
          >
            <div className="flex items-end">
              <div className="flex gap-[32px] items-end pl-[32px] pr-[44px] py-[32px] w-full">
                <div className="bg-[#737373] overflow-clip rounded-[30px] shrink-0 size-[278px]">
                  <img alt="Article 2" className="w-full h-full object-cover pointer-events-none" src={imgImage5} />
                </div>
                <div className="flex flex-1 flex-col h-[278px] items-start justify-between">
                  <p className="font-['Phudu',sans-serif] font-bold text-[25px] leading-[1.02] tracking-[-0.25px] text-black">
                    How to connect with your future self
                  </p>
                  <div className="h-[32px] w-[108px] relative shrink-0">
                    <img alt="Psyche logo" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgImages1} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
