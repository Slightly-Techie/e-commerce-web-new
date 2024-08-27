import FilterPageHeader from "@/components/FilterPageHeader";
import { useState } from "react";

export default function Filter() {
  const [filterSidebarState, setFilterSidebarState] = useState<boolean>(false);
  return (
    <section
      className={`mt-[6rem] min-h-[83vh] ${filterSidebarState ? "ml-4 w-[75%]" : "mx-auto w-[98%]"} rounded-lg bg-white px-4 py-4 transition-all duration-500`}
    >
      <FilterPageHeader
        filterState={filterSidebarState}
        setState={setFilterSidebarState}
      />
    </section>
  );
}
