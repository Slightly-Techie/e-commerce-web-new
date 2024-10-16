import pay from "@/assets/images/pay.png";
import registration from "@/assets/images/registration.png";
import send from "@/assets/images/send.png";

const steps = [
  {
    number: "01",
    icon: send,
    label: "Send invite",
    desc: "Send your referral link to your friends and tell them about ST Market",
  },
  {
    number: "02",
    icon: registration,
    label: "Registration",
    desc: "Force them to create an account  and join the ST network",
  },
  {
    number: "03",
    icon: pay,
    label: "Make first purchase",
    desc: "To earn coins, again force them to make a purchase of GHS 50",
  },
];

export default function ReferralsSteps() {
  return (
    <article className="mt-16">
      <h1 className="text-2xl font-bold text-darkPrimary">
        It&apos;s easy to get started
      </h1>
      <div className="mt-3 flex flex-col gap-x-4 gap-y-6 md:grid md:grid-cols-2">
        {steps.map((step) => (
          <div key={step.number} className="relative flex flex-col">
            <img
              src={step.icon}
              alt={step.label}
              className="h-[58px] w-[58px]"
            />
            <h4 className="z-10 text-lg font-bold text-darkPrimary">
              {step.label}
            </h4>
            <p className="z-10 text-gray600">{step.desc}</p>
            <span className="absolute -bottom-3 right-8 text-[130px] font-bold text-gray75">
              {step.number}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
