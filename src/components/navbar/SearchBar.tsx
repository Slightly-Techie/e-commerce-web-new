import { useState } from "react";
import Location from "./Location";
import SearchInput, { IProducts } from "./SearchInput";
import { SearchResults } from "./SearchResults";

const SearchBar = () => {
  const [searchedProducts, setSearchProducts] = useState<IProducts[] | null>(
    [],
  );

  const getSearchedProducts = (products: IProducts[] | null) => {
    setSearchProducts(products);
  };

  return (
    <div className="relative flex w-full items-center rounded-xl border border-gray300 bg-gray75 py-2.5 shadow-[#0F172A]/10 md:relative md:py-3.5 lg:max-w-[500px] lg:shadow-sm xl:max-w-[638px]">
      <div className="hidden lg:block">
        <Location />
      </div>
      <SearchInput
        getProducts={(products: IProducts[] | null) =>
          getSearchedProducts(products)
        }
      />
      <SearchResults searchedResults={searchedProducts} />
    </div>
  );
};

export default SearchBar;
