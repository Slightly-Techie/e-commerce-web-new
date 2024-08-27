import FilterPageHeader from "@/components/FilterPageHeader";
import { useState } from "react";
import Filter from "./Filter";

export default function FilterPage() {
  const [filterSidebarState, setFilterSidebarState] = useState<boolean>(false);
  return (
    <section className="flex gap-6 overflow-x-hidden">
      <article
        className={`mt-[6rem] min-h-[83vh] ${filterSidebarState ? "ml-4 w-[74%]" : "mx-auto w-full"} rounded-lg bg-white px-4 py-4 transition-all duration-500`}
      >
        <FilterPageHeader
          filterState={filterSidebarState}
          setState={setFilterSidebarState}
        />
      </article>

      <div
        className={`${filterSidebarState ? "translate-x-0" : "hidden translate-x-[200%] border border-red-500"} mr-4 mt-[6rem] min-h-[83vh] w-[400px] rounded-lg bg-white p-4 transition-all duration-500`}
      >
        <Filter setState={setFilterSidebarState} />
      </div>
    </section>
  );
}
