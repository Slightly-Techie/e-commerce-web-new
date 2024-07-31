import { Dot } from "lucide-react";

export default function DeliveryStatus({
  status,
}: {
  status: "Delivered" | "Pending";
}) {
  return (
    <span
      className={`ml-6 flex items-center gap-1 rounded-xl ${status === "Delivered" ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#FFFAEB] text-[#B54708]"} px-2 py-[1px] text-[12px] sm:px-px md:px-2 md:text-base`}
    >
      <Dot
        strokeWidth={10}
        size={10}
        color={status === "Pending" ? "#F79009" : "#027A48"}
      />
      {status}
    </span>
  );
}
