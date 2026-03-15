import { useState } from "react";
import svgPaths from "./svg-dvurkcbdlj";
import imgFrame13213139901 from "figma:asset/0c85da325cd34f37a8a255e4d0b3d39a66402377.png";
import PopupSubscribe from "../app/components/popup-subscribe";
import imgArtboard1 from "figma:asset/51c81ed7601e45fad9a21b0da4c05b7703904376.png";
import imgDownload41 from "figma:asset/3e71587c4d1631e18396dc7e1260ca559824b18a.png";
import imgImage4 from "figma:asset/323bad8b6605951197a64613bd818fae57e230a3.png";
import imgImage5 from "figma:asset/306da8c7f8dd4a675af40b35facc3ba44102901b.png";
import imgImages1 from "figma:asset/4c27d78173091ce52e93f4a6ebfe21bbc7f878a7.png";
import video0211 from "../assets/0211.mov";

function Elements() {
  return (
    <div className="absolute inset-[8.33%]" data-name="elements">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g>
            <path d={svgPaths.p189f4300} fill="var(--fill-0, black)" id="Star 7" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p4db5880} fill="var(--fill-0, black)" id="Star 8" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonLarge({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[14px] relative rounded-[9999px] shrink-0 cursor-pointer" data-name="Button Large">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="sparkles">
        <Elements />
      </div>
      <p className="font-['Manrope',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.6px] whitespace-nowrap">Join Waitlist</p>
    </div>
  );
}

function Frame({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) {
  return (
    <div className="absolute inset-x-0 content-stretch flex flex-col gap-[26px] items-center top-[241px] px-[40px] tablet:px-[100px] min-[1280px]:px-0">
      <div style={{ color: "white", mixBlendMode: "difference" }} className="font-['Phudu',sans-serif] font-extrabold leading-[44px] min-[1280px]:leading-[58px] mix-blend-difference not-italic relative shrink-0 text-[48px] min-[1280px]:text-[64px] text-center text-white tracking-[-1px] whitespace-normal w-full min-[1280px]:whitespace-nowrap min-[1280px]:w-max">
        <p className="mb-0">Meet your future self</p>
        <p>{`TALK & LEARN from it`}</p>
      </div>
      <div style={{ color: "white", mixBlendMode: "difference" }} className="font-['Manrope',sans-serif] font-bold leading-[1.4] mix-blend-difference not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.3px] whitespace-normal w-full min-[1280px]:whitespace-nowrap min-[1280px]:w-max">
        <p className="mb-0">The first AI app in the universe that lets you meet possible future of yourself.</p>
        <p>Explore how they live, experiment with their choices, and take the lessons back to grow in your real life.</p>
      </div>
      <ButtonLarge onClick={onJoinWaitlist} />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Manrope',sans-serif] font-bold gap-[20px] items-center leading-[1.4] not-italic relative shrink-0 text-[15px] text-right text-white tracking-[-0.3px] w-[115px] whitespace-nowrap">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">About</p>
    </div>
  );
}

function Elements1() {
  return (
    <div className="relative shrink-0 size-[15.5px]" data-name="elements">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
        <g>
          <path d={svgPaths.p3c390b00} fill="var(--fill-0, #FAAD42)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function ButtonLarge1({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="content-stretch hidden tablet:flex gap-[8px] items-center justify-center relative rounded-[9999px] shrink-0 cursor-pointer" data-name="Button Large">
      <Elements1 />
      <p className="bg-clip-text bg-gradient-to-r font-['Manrope',sans-serif] font-bold from-[#ffae3f] leading-[1.4] not-italic relative shrink-0 text-[15px] text-[transparent] text-center to-[#1a91a0] tracking-[-0.3px] whitespace-nowrap">Join Waitlist</p>
    </div>
  );
}

function Frame3({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) {
  return (
    <div className="absolute inset-x-0 top-0 z-50 flex flex-col tablet:flex-row items-center justify-center tablet:justify-between gap-[20px] tablet:gap-y-[56px] pt-[40px] pb-[41px] px-[40px] tablet:px-[100px] min-[1280px]:px-[200px]">
      <Frame4 />
      <div className="h-[34px] relative shrink-0 w-[116px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 34">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p14b22600} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2025f000} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p6211100} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p201a3900} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13777300} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p26e3300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2c10c900} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa787700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e6f9500} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p2787d9f0} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5255100} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p750c300} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <ButtonLarge1 onClick={onJoinWaitlist} />
    </div>
  );
}

function Stars() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="stars">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stars">
          <path d={svgPaths.p2516bf2} fill="var(--fill-0, black)" id="Icon (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center tablet:items-start relative shrink-0 w-[158px]">
      <Stars />
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] min-w-full not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full text-center tablet:text-left">
        <p className="mb-0">Meet the future you,</p>
        <p>1 to 3 years ahead</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-center tablet:items-start justify-center relative shrink-0 order-1 tablet:order-none">
      <Frame6 />
    </div>
  );
}

function FreeIPhoneAir() {
  return (
    <div className="flex-none tablet:flex-[1_0_0] min-h-px min-w-px relative order-3 tablet:order-none w-full tablet:w-auto" data-name="Free iPhone Air">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] min-[1280px]:px-[182px] relative w-full">
          <div className="w-full max-w-[415px] aspect-[415/858] relative shrink-0" data-name="Artboard 1">
            <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgArtboard1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Yoga() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="yoga-03">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="yoga-03">
          <path d={svgPaths.p39a3b180} fill="var(--fill-0, black)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center tablet:items-end justify-center relative shrink-0 w-[159px] order-2 tablet:order-none">
      <Yoga />
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] min-w-full not-italic relative shrink-0 text-[15px] text-black text-center tablet:text-right tracking-[-0.3px] w-full">
        <p className="mb-0">Backed by psychology,</p>
        <p>designed for growth</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col tablet:flex-row gap-[40px] tablet:gap-0 items-center justify-center relative shrink-0 w-full">
      <Frame39 />
      <FreeIPhoneAir />
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[56px] relative shrink-0 w-[24px]" data-name="download (4) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.65%] left-[-83.33%] max-w-none top-[-8.82%] w-[266.67%]" src={imgDownload41} />
        </div>
      </div>
      <div className="font-['Phudu',sans-serif] font-bold leading-[0.86] not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">1st world’s</p>
        <p>first app</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[56px] relative w-[25px]" data-name="download (4) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[117.65%] left-[-83.33%] max-w-none top-[-8.82%] w-[266.67%]" src={imgDownload41} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] tablet:gap-[65px] items-center pb-[80px] px-[20px] tablet:px-[100px] min-[1280px]:px-[200px] relative w-full">
          <Frame42 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">/</p>
        <p className="mb-0">&nbsp;</p>
        <p>Things you should read</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-right tracking-[-0.3px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">/</p>
        <p className="mb-0">&nbsp;</p>
        <p>2 Ariticles</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame8 />
      <Frame11 />
    </div>
  );
}

function Elements2() {
  return (
    <div className="absolute inset-[8.33%_14.58%]" data-name="elements">
      <div className="absolute inset-[-5%_-5.88%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 22">
          <g>
            <path d="M14.5 1V3M9.5 1V3M4.5 1V3" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3be20b00} id="Vector 7181" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d="M5.5 14H9.5M5.5 9H13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2bde5580} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <p className="font-['Manrope',sans-serif] font-bold leading-[1.29] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full tablet:w-[412px] whitespace-pre-wrap">{`Imagine the possibility of communicating with your future self 1 to  3 years ahead. How might such an encounter influence present decision-making?`}</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="note-04">
        <Elements2 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#737373] overflow-clip relative rounded-[30px] shrink-0 w-full aspect-square tablet:w-[278px] tablet:h-[278px] tablet:aspect-auto">
      <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function AiBusinessLogoWithCogOnLightRgb() {
  return (
    <div className="h-[20px] relative shrink-0 w-[166px]" data-name="AI_Business_Logo_withCog_OnLight_RGB_(1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 20">
        <g clipPath="url(#clip0_1_253)" id="AI_Business_Logo_withCog_OnLight_RGB_(1) 1">
          <path d={svgPaths.p3fe59f80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p34c73e30} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pdd3ed00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p3a31de00} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22ccc700} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p30c37480} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p1db3ec80} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p2f87d500} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p36367a80} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p1caa4b00} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p227c0580} fill="var(--fill-0, black)" id="Vector_11" />
        </g>
        <defs>
          <clipPath id="clip0_1_253">
            <rect fill="white" height="20" width="166" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-none tablet:flex-[1_0_0] flex-col h-auto tablet:h-[278px] gap-[24px] tablet:gap-0 items-start justify-between min-h-px min-w-px relative w-full tablet:w-auto">
      <p className="block font-['Phudu',sans-serif] font-bold leading-[1.02] min-w-full not-italic relative shrink-0 text-[25px] text-black tracking-[-0.25px] w-full text-left">‘Future You’ AI Allows You to Meet Your Future Self</p>
      <AiBusinessLogoWithCogOnLightRgb />
    </div>
  );
}

function Frame14() {
  return (
    <a 
      href="https://aibusiness.com/nlp/-future-you-ai-allows-you-to-meet-your-future-self" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-white flex-none min-[1280px]:flex-[1_0_0] min-h-px min-w-px relative rounded-[56px] transition-transform hover:-translate-y-[10px] block w-full min-[1280px]:w-auto"
    >
      <div className="flex flex-col tablet:flex-row items-stretch tablet:items-end size-full">
        <div className="content-stretch flex flex-col tablet:flex-row gap-[32px] items-start tablet:items-end p-[32px] tablet:pl-[32px] tablet:pr-[44px] tablet:py-[32px] relative w-full">
          <Frame13 />
          <Frame15 />
        </div>
      </div>
    </a>
  );
}

function Frame19() {
  return (
    <div className="bg-[#737373] overflow-clip relative rounded-[30px] shrink-0 w-full aspect-square tablet:w-[278px] tablet:h-[278px] tablet:aspect-auto">
      <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-none tablet:flex-[1_0_0] flex-col h-auto tablet:h-[278px] gap-[24px] tablet:gap-0 items-start justify-between min-h-px min-w-px relative w-full tablet:w-auto">
      <p className="font-['Phudu',sans-serif] font-bold leading-[1.02] min-w-full not-italic relative shrink-0 text-[25px] text-black tracking-[-0.25px] w-full text-left">How to connect with your future self</p>
      <div className="h-[32px] relative shrink-0 w-[108px]" data-name="images 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImages1} />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <a
      href="https://psyche.co/guides/how-to-connect-with-your-future-self-and-make-better-choices"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white flex-none min-[1280px]:flex-[1_0_0] min-h-px min-w-px relative rounded-[56px] transition-transform hover:-translate-y-[10px] block w-full min-[1280px]:w-auto"
    >
      <div className="flex flex-col tablet:flex-row items-stretch tablet:items-end size-full">
        <div className="content-stretch flex flex-col tablet:flex-row gap-[32px] items-start tablet:items-end p-[32px] tablet:pl-[32px] tablet:pr-[44px] tablet:py-[32px] relative w-full">
          <Frame19 />
          <Frame20 />
        </div>
      </div>
    </a>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col min-[1280px]:flex-row gap-[32px] items-stretch min-[1280px]:items-start relative shrink-0 w-full min-[1280px]:w-[1256px]">
      <Frame14 />
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f7f7f7] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] tablet:gap-[80px] items-center pb-[80px] pt-[72px] px-[40px] tablet:px-[100px] min-[1280px]:px-[200px] relative w-full">
          <Frame9 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[425px]">
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full whitespace-pre-wrap">
        <p className="mb-0">/</p>
        <p className="mb-0">&nbsp;</p>
        <p>Explow uses a psychological approach to clone your personality, traits, and current situation before predicting your possible future self.</p>
      </div>
    </div>
  );
}

function Elements3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="elements">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g>
            <circle cx="11" cy="11" id="Ellipse 582" r="10" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p21aa0c00} id="Ellipse 583" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d="M10.992 16H11.001" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="help-circle">
        <Elements3 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#258088] overflow-clip relative rounded-[12px] shrink-0 size-[30px]">
      <p className="absolute font-['Manrope',sans-serif] font-bold leading-[1.4] left-[calc(50%-3px)] not-italic text-[15px] text-white top-[calc(50%-10px)] tracking-[-0.3px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame26 />
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#258088] text-[15px] tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">Download</p>
        <p>Explow</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#508778] overflow-clip relative rounded-[12px] shrink-0 size-[30px]">
      <p className="absolute font-['Manrope',sans-serif] font-bold leading-[1.4] left-[calc(50%-4.4px)] not-italic text-[15px] text-white top-[calc(50%-10px)] tracking-[-0.3px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame29 />
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#508778] text-[15px] tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">Start cloning</p>
        <p>your soul</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#7f8f67] overflow-clip relative rounded-[12px] shrink-0 size-[30px]">
      <p className="absolute font-['Manrope',sans-serif] font-bold leading-[1.4] left-[calc(50%-4.8px)] not-italic text-[15px] text-white top-[calc(50%-10px)] tracking-[-0.3px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame31 />
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#7f8f67] text-[15px] tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">Your future self</p>
        <p>is predicted</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#b29756] overflow-clip relative rounded-[12px] shrink-0 size-[30px]">
      <p className="absolute font-['Manrope',sans-serif] font-bold leading-[1.4] left-[calc(50%-5.2px)] not-italic text-[15px] text-white top-[calc(50%-10px)] tracking-[-0.3px] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame35 />
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#b29756] text-[15px] tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">{`Talk, learn & practice`}</p>
        <p>with your future self</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#f2a13f] overflow-clip relative rounded-[12px] shrink-0 size-[30px]">
      <p className="absolute font-['Manrope',sans-serif] font-bold leading-[1.4] left-[calc(50%-4.6px)] not-italic text-[15px] text-white top-[calc(50%-10px)] tracking-[-0.3px] whitespace-nowrap">5</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start tablet:items-end justify-center relative shrink-0">
      <Frame37 />
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f2a13f] text-[15px] text-left tablet:text-right tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">Continue predicting</p>
        <p>your possible future self</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col tablet:flex-row gap-[40px] tablet:gap-0 items-start tablet:items-center justify-between relative shrink-0 w-full">
      <Frame27 />
      <Frame28 />
      <Frame30 />
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full min-[1280px]:w-[1256px]">
      <Frame32 />
      <div className="h-[40px] relative shrink-0 w-full hidden tablet:block" data-name="Vector">
        <div className="absolute inset-[-5%_-0.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1260 44">
            <path d={svgPaths.p2bab5cc0} id="Vector" stroke="url(#paint0_linear_1_220)" strokeLinecap="round" strokeWidth="4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_220" x1="2" x2="1258" y1="22" y2="22">
                <stop stopColor="#248088" />
                <stop offset="1" stopColor="#F1A13F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[153px] items-center pt-[80px] px-[40px] tablet:px-[100px] min-[1280px]:px-[200px] relative w-full">
          <Frame21 />
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function ButtonLarge2({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-black content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[24px] py-[14px] relative rounded-[9999px] shrink-0 cursor-pointer" data-name="Button Large">
      <p className="font-['Manrope',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.6px] whitespace-nowrap">Join Waitlist</p>
    </div>
  );
}

function Frame40({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full tablet:w-auto min-[1280px]:w-[458px]">
      <div className="h-[34px] relative shrink-0 w-[116px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 34">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p14b22600} fill="url(#paint0_linear_1_218)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2025f000} fill="url(#paint1_linear_1_218)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p6211100} fill="url(#paint2_linear_1_218)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p201a3900} fill="url(#paint3_linear_1_218)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13777300} fill="url(#paint4_linear_1_218)" fillRule="evenodd" />
            <path d={svgPaths.p26e3300} fill="url(#paint5_linear_1_218)" />
            <path d={svgPaths.p2c10c900} fill="url(#paint6_linear_1_218)" />
            <path d={svgPaths.pa787700} fill="url(#paint7_linear_1_218)" />
            <path d={svgPaths.p1e6f9500} fill="url(#paint8_linear_1_218)" />
            <path clipRule="evenodd" d={svgPaths.p2787d9f0} fill="url(#paint9_linear_1_218)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5255100} fill="url(#paint10_linear_1_218)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p750c300} fill="url(#paint11_linear_1_218)" fillRule="evenodd" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_218" x1="0" x2="116" y1="17" y2="17">
              <stop stopColor="#238088" />
              <stop offset="1" stopColor="#F2A13E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full tablet:max-w-[458px]">The first AI app in the universe that lets you meet possible future of yourself. Explore how they live, experiment with their choices, and take the lessons back to grow in your real life.</p>
      <ButtonLarge2 onClick={onJoinWaitlist} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[56px] relative shrink-0 w-[24px]" data-name="download (4) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.65%] left-[-83.33%] max-w-none top-[-8.82%] w-[266.67%]" src={imgDownload41} />
        </div>
      </div>
      <div className="font-['Phudu',sans-serif] font-bold leading-[0.86] not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">1st world’s</p>
        <p>first app</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[56px] relative w-[25px]" data-name="download (4) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[117.65%] left-[-83.33%] max-w-none top-[-8.82%] w-[266.67%]" src={imgDownload41} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-full items-start tablet:items-end justify-end relative shrink-0 w-full tablet:w-auto min-[1280px]:w-[571px]">
      <Frame25 />
      <div className="font-['Manrope',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.25)] text-left tablet:text-right tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">Developed by</p>
        <p>theunlimitedhumanity.com</p>
      </div>
    </div>
  );
}

function Frame38({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col tablet:flex-row items-start tablet:items-end size-full">
        <div className="content-stretch flex flex-col tablet:flex-row gap-[40px] tablet:gap-0 items-start tablet:items-end justify-between px-[40px] tablet:px-[100px] min-[1280px]:px-[200px] relative w-full">
          <Frame40 onJoinWaitlist={onJoinWaitlist} />
          <div className="flex flex-col tablet:flex-row items-start tablet:items-end self-stretch w-full tablet:flex-[1_0_0] tablet:justify-end">
            <Frame41 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[63px] items-center justify-center relative shrink-0 w-full">
      <div className="h-[300px] tablet:h-[632px] relative shrink-0 w-full max-w-full" data-name="Frame 1321313971 1">
        <video className="absolute inset-0 max-w-none object-cover size-full" src={video0211} autoPlay loop muted playsInline />
      </div>
      <Frame38 onJoinWaitlist={onJoinWaitlist} />
    </div>
  );
}

function Frame47({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 right-0 top-[709px] tablet:top-[696px] min-[1280px]:top-[676px] z-40 pb-[100px]">
      <Frame43 />
      <Frame17 />
      <Frame44 />
      <Frame46 onJoinWaitlist={onJoinWaitlist} />
    </div>
  );
}

export default function Frame45() {
  const [popupOpen, setPopupOpen] = useState(false);
  const openPopup = () => setPopupOpen(true);
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full">
      <div className="h-[609px] tablet:h-[896px] relative shrink-0 w-full" data-name="Frame 1321313990 1">
        <img alt="" className="absolute left-0 top-0 size-full object-cover tablet:h-auto max-w-none pointer-events-none" src={imgFrame13213139901} />
      </div>
      <Frame onJoinWaitlist={openPopup} />
      <Frame3 onJoinWaitlist={openPopup} />
      <Frame47 onJoinWaitlist={openPopup} />
      <PopupSubscribe open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
}