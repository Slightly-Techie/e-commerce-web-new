import { Smartphone } from "lucide-react";

export default function PaymentInformation() {
  return (
    <div className="w-full md:w-1/2">
      <div className="flex justify-between rounded-t-md border border-gray200 bg-gray75 px-4 py-3 font-semibold">
        Payment Information
        <div className="flex gap-1">
          <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-gray100">
            <Smartphone size={16} />
          </div>
          <p className="font-normal text-gray500">*****38591</p>
        </div>
      </div>
      <div className="flex h-[175px] flex-col rounded-b-md border border-t-0 border-gray200 bg-gray50 px-4 py-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 text-base text-gray500">
            <p>Sub Total</p>
            <p>Delivery</p>
            <p>Coin discount</p>
          </div>
          <div className="flex flex-col gap-4 text-base text-[#111111]">
            <p>GHC 45088.00</p>
            <p>GHC 24.00</p>
            <p>-GHC 0.00</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-base font-bold">
          <p>Total</p>
          <p>Ghc 4,600.00</p>
        </div>
      </div>
    </div>
  );
}
