import React from "react";
import { IProducts } from "./SearchInput";

interface SearchedResultsProps {
  searchedResults: IProducts[] | null;
}

export const SearchResults: React.FC<SearchedResultsProps> = ({
  searchedResults,
}) => {
  return (
    <div
      className={`absolute left-0 top-14 z-50 max-h-[400px] w-full overflow-y-auto rounded-xl border border-gray300 bg-gray75 px-2 py-2.5 shadow-sm shadow-[#0F172A]/10 md:left-0 md:top-16 md:w-full md:-translate-x-0 md:px-3 md:py-3.5 lg:top-16 ${searchedResults !== null ? "block" : "hidden"}`}
    >
      {searchedResults?.length === 0 ? (
        <p className="text-center">Product not found</p>
      ) : (
        <ul className="grid gap-4">
          {searchedResults?.map((product) => {
            return (
              <li
                key={product.id}
                className="cursor-pointer border-b border-b-gray-300 pb-2.5 last:border-b-transparent last:pb-0 hover:opacity-80 md:pb-3.5"
              >
                {product.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
