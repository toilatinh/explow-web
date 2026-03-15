import { HelpCircleIcon, WaveLine } from "./icons";

const steps = [
  { num: "1", color: "#258088", label1: "Download", label2: "Explow", align: "start" as const },
  { num: "2", color: "#508778", label1: "Start cloning", label2: "your soul", align: "start" as const },
  { num: "3", color: "#7f8f67", label1: "Your future self", label2: "is predicted", align: "start" as const },
  { num: "4", color: "#b29756", label1: "Talk, learn & practice", label2: "with your future self", align: "start" as const },
  { num: "5", color: "#f2a13f", label1: "Continue predicting", label2: "your possible future self", align: "end" as const },
];

export function StepsSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-[153px] items-center pt-[80px] px-[200px]">
        {/* Description */}
        <div className="flex items-start justify-between w-full">
          <div className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-[425px] whitespace-pre-wrap">
            <p className="mb-0">/</p>
            <p className="mb-0">&nbsp;</p>
            <p>Explow uses a psychological approach to clone your personality, traits, and current situation before predicting your possible future self.</p>
          </div>
          <HelpCircleIcon />
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-[40px] items-start w-[1256px]">
          <div className="flex items-center justify-between w-full">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`flex flex-col gap-[24px] shrink-0 ${
                  step.align === "end" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className="overflow-clip rounded-[12px] size-[30px] flex items-center justify-center"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-white">
                    {step.num}
                  </span>
                </div>
                <div
                  className={`font-['Manrope',sans-serif] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] ${
                    step.align === "end" ? "text-right" : ""
                  }`}
                  style={{ color: step.color }}
                >
                  <p className="mb-0">{step.label1}</p>
                  <p>{step.label2}</p>
                </div>
              </div>
            ))}
          </div>
          <WaveLine />
        </div>
      </div>
    </section>
  );
}
