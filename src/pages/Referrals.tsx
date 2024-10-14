import Coins from "@/components/referrals/Coins";
import ReferralForm from "@/components/referrals/ReferralForm";
import ReferralHeader from "@/components/referrals/ReferralsHeader";
import ReferralsSteps from "@/components/referrals/ReferralsSteps";
import ReferralsTable from "@/components/referrals/ReferralsTable";
import ReferralsLeaders from "./ReferralsLeaders";

export default function Referrals() {
  return (
    <main className="min-h-[84vh] rounded-tl-2xl rounded-tr-2xl bg-white px-4 pb-40 pt-[1.625rem] font-product-sans md:px-6 md:pb-10 lg:ml-[276px]">
      <h1 className="text-2xl font-bold">Referrals</h1>

      <section className="mt-3 flex flex-col justify-between gap-8 md:flex-row">
        <article className="md:w-3/5">
          {/* header */}
          <ReferralHeader />

          {/* form */}
          <ReferralForm />

          {/* steps */}
          <ReferralsSteps />

          {/* leaderboard */}
          <section className="mt-20">
            <h3 className="text-xl font-bold text-darkPrimary">Leaderboard</h3>

            {/* top-3 */}
            <ReferralsLeaders />
            <ReferralsTable />
          </section>
        </article>

        <Coins />
      </section>
    </main>
  );
}
