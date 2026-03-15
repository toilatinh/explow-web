import { ExpLowLogo, SparklesSmallIcon } from "./icons";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-[200px] pt-[40px] pb-[41px]">
      <nav className="flex gap-[20px] items-center font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-white">
        <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
        <a href="#" className="hover:opacity-80 transition-opacity">About</a>
      </nav>
      <ExpLowLogo color="white" />
      <button className="flex gap-[8px] items-center justify-center cursor-pointer">
        <SparklesSmallIcon />
        <span className="bg-clip-text bg-gradient-to-r from-[#ffae3f] to-[#1a91a0] font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] text-transparent tracking-[-0.3px]">
          Join Waitlist
        </span>
      </button>
    </header>
  );
}
