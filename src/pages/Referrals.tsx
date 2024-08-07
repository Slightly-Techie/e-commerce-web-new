import Coins from "@/components/Coins";
import ReferralForm from "@/components/ReferralForm";
import ReferralHeader from "@/components/ReferralsHeader";
import pay from "../assets/images/pay.png";
import registration from "../assets/images/registration.png";
import send from "../assets/images/send.png";

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

export default function Referrals() {
  return (
    <main className="min-h-[84vh] rounded-tl-2xl rounded-tr-2xl bg-white px-4 py-[1.625rem] font-product-sans md:px-6 lg:ml-[276px]">
      <h1 className="text-2xl font-bold">Referrals</h1>
      <section className="mt-3 flex justify-between gap-8">
        <article className="w-3/5">
          {/* header */}
          <ReferralHeader />

          {/* form */}
          <ReferralForm />

          {/* steps */}
          <article className="mt-6">
            <h1 className="text-darkPrimary text-2xl font-bold">
              It&apos;s easy to get started
            </h1>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-6">
              {steps.map((step) => (
                <div key={step.number} className="relative flex flex-col">
                  <img
                    src={step.icon}
                    alt={step.label}
                    className="h-[58px] w-[58px]"
                  />
                  <h4 className="text-darkPrimary z-10 text-lg font-bold">
                    {step.label}
                  </h4>
                  <p className="z-10 text-gray600">{step.desc}</p>
                  <span className="absolute bottom-1 right-8 text-[130px] font-bold text-gray75">
                    {step.number}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </article>

        <Coins />
      </section>
    </main>
  );
}
