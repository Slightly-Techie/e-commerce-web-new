import referrals from "../assets/referrals.png";

export default function ReferralHeader() {
  return (
    <div>
      <img src={referrals} alt="logo" />

      <h1 className="text-darkPrimary text-xl font-bold">
        Refer friends and earn up to 40 STC coins
      </h1>
      <p className="mt-1 text-gray500">
        Invite your friends to Slightly techie market place and earn STC coins
        If they sign up and make a purchase.
      </p>
    </div>
  );
}
