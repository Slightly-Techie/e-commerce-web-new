import { Link } from "react-router-dom";

const CategoryItem = ({ name, src }: { name: string; src: string }) => {
  return (
    <Link to="/" className="relative font-product-sans">
      <img src={src} alt={name} className="h-[200px] w-[260px] rounded-md" />
      <span className="absolute bottom-2 left-8 font-medium text-white">
        {name}
      </span>
    </Link>
  );
};

export default CategoryItem;
