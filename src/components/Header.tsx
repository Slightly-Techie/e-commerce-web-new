import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header({
  title,
  discount,
}: {
  title: string;
  discount: number;
}) {
  return (
    <article className="flex justify-between">
      <div className="font-product-sans text-2xl font-bold">
        <h1>
          {title}
          {discount > 0 && (
            <sup className="ml-2 bg-gradient-to-r from-[#1E6AFD] to-[#FF06E6] bg-clip-text text-base text-transparent">
              Up to {discount}% off
            </sup>
          )}
        </h1>
      </div>
      <div className="flex items-center gap-1 text-gray500">
        <Link to="/">View All</Link>
        <FaChevronRight className="inline-block" size={14} />
      </div>
    </article>
  );
}
