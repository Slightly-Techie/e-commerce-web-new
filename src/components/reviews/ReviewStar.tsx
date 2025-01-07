import { Star } from "lucide-react";

export default function ReviewStar({
  item,
  review,
  setReview,
}: {
  item: number;
  review: number;
  setReview: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Star
      className={`size-16 cursor-pointer ${item > review ? "text-gray100" : "text-[#B48E02]"} xl:size-20`}
      strokeWidth={0.5}
      fill={`${item > review ? "#f1f5f9" : "#FAC500"}`}
      onClick={() => setReview(item)}
    />
  );
}
