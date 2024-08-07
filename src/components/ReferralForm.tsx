import { Copy } from "lucide-react";

export default function ReferralForm() {
  return (
    <div className="mt-4">
      <form className="flex flex-col items-start gap-4">
        <div className="relative flex w-full flex-col gap-2">
          <label
            htmlFor="referral-link"
            className="text-darkPrimary text-sm font-medium"
          >
            Share referral link
          </label>
          <input
            type="text"
            value="https://slightlytechiemarket/derez23456"
            name="referral-link"
            className="rounded-md border border-gray300 px-4 py-1 outline-none"
          />
          <Copy className="absolute bottom-1 right-3 cursor-pointer" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label
            htmlFor="email"
            className="text-darkPrimary text-sm font-medium"
          >
            Email your invite
          </label>
          <input
            type="email"
            required
            placeholder="Eg. iammensahmichael@gmail.com"
            className="rounded-md border border-gray300 px-4 py-1 outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-gray100 px-4 py-2 text-gray500 hover:text-gray700"
        >
          Send invites
        </button>
      </form>
    </div>
  );
}
