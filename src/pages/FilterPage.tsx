import FilterPageHeader from "@/components/FilterPageHeader";
import { useState } from "react";
import Filter from "./Filter";

export default function FilterPage() {
  const [filterSidebarState, setFilterSidebarState] = useState<boolean>(false);
  return (
    <section
      className={`${filterSidebarState ? "flex" : ""} gap-6 overflow-x-hidden`}
    >
      <article
        className={`mt-[10.5rem] flex min-h-[83vh] md:mt-[6rem] ${filterSidebarState ? "w-full sm:ml-4 sm:w-[74%]" : "mx-auto w-full"} rounded-lg bg-white px-4 py-4 transition-all duration-500`}
      >
        <FilterPageHeader
          filterState={filterSidebarState}
          setState={setFilterSidebarState}
        />
      </article>

      {/* mobile filter */}
      <div
        className={`sm:hidden ${filterSidebarState ? "absolute translate-x-0" : "translate-x-[100%] md:translate-x-[200%]"} mt-[10.5rem] min-h-[83vh] w-full rounded-lg bg-white p-4 transition-all duration-500 md:mr-4 md:mt-[6rem]`}
      >
        <Filter setState={setFilterSidebarState} />
      </div>

      {/* large screen filter */}
      <div
        className={`hidden sm:block ${filterSidebarState ? "translate-x-0" : "translate-x-[100%] md:translate-x-[200%]"} mt-[10.5rem] min-h-[83vh] w-[400px] rounded-lg bg-white p-4 transition-all duration-500 md:mr-4 md:mt-[6rem]`}
      >
        <Filter setState={setFilterSidebarState} />
      </div>
    </section>
  );
}
