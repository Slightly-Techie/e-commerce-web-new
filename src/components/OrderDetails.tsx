import { Dot } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export default function OrderDetails() {
  return (
    <>
      <div className="mr-1 flex w-[10rem] items-center gap-px text-[12px] md:w-[14rem] md:gap-2 md:text-base">
        <Checkbox className="border-[#D0D5DD]" />
        <div className="flex items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/71de/7823/10bb49a6369db8469303e74d7cf77c21?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMC7F9uuKKA0MQGZK3bQ2QrL-4LZcWX6pG9CzBjcXdi1KFdLhAtZR0OJMOLOHkopChoFDgTQjtMWXGdU-9HF1HCuJmh8Vy80u2HGJptxBPTCMiVvl-GtXtGwIEMK8meQnsG4Z1Oezvr1ETZYsrwPUXqEkXi8-YrvlOlBFTu9iEa2oEckkSny112zcehWx2zMbQOXLNwh2c0IesNKtUpWknGDqd1WeXoqeuR6~nX1dDVytPI6t0y4Y-XmdM3cSVC5vtf7TWTPFtMIYmO3NxA~xxTo9rtlUzl7w8NZh9ihgjoF8gWI3KqeoUpAeA-dCbPJjCfGget2qC1BRWW6ouqxpA__"
            className="hidden h-[40px] w-[45px] rounded-md md:block"
          />
          <div className="flex flex-col items-start">
            <h4 className="line-clamp-1 text-[#101828]">
              Apple macbook Pro 16” Laptop
            </h4>
            <span className="ml-2 text-gray500">Computing</span>
          </div>
        </div>
      </div>
      <div className="mr-4 line-clamp-1 rounded-2xl bg-gray100 px-1 py-[2px] text-[12px] text-gray600 md:px-2 md:text-base">
        ST-45FG7
      </div>
      <p className="text-[12px] text-gray500 md:text-base">25 Nov, 2023</p>
      <div className="ml-6 flex items-center gap-1 rounded-xl bg-[#ECFDF3] px-[2px] py-[1px] text-[12px] text-[#027A48] md:px-2 md:text-base">
        <Dot strokeWidth={10} size={10} color="#12B76A" />
        Delivered
      </div>
      <p className="text-[12px] text-[#111111] md:text-base">GHS 1,500.00</p>
    </>
  );
}
