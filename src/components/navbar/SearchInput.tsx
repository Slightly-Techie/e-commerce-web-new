import React, { ChangeEvent, useEffect, useState } from "react";
import searchIcon from "../../assets/icons/navbar/search.svg";

export interface IProducts {
  id: number;
  name: string;
  price: number;
}

interface SearchInputProps {
  getProducts: (products: IProducts[] | null) => void;
}

const dummyProducts: IProducts[] = [
  {
    id: 1,
    name: "2019 Macbook Pro, 16”",
    price: 9000,
  },
  {
    id: 2,
    name: "PS5 Standard",
    price: 9000,
  },
  {
    id: 3,
    name: "Google Pixel 8pro 32GB",
    price: 9000,
  },
  {
    id: 4,
    name: "Airpods pro",
    price: 9000,
  },
];

const SearchInput: React.FC<SearchInputProps> = ({ getProducts }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue.trim() === "") {
      getProducts(null);
      return;
    }

    const searchResults = dummyProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    getProducts(searchResults);
  }, [searchValue, dummyProducts]);

  return (
    <div className="flex w-full items-center pl-2 lg:w-[60%] lg:border-l lg:pl-3">
      <img src={searchIcon} alt="search icon" />

      <input
        type="text"
        className="w-full bg-transparent px-2 outline-none placeholder:text-sm md:px-3"
        placeholder="Search laptops, courses, games etc"
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
