import { ChevronDown, Clock, ListFilter } from "lucide-react";

interface Props {
  filterState: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilterPageHeader({ filterState, setState }: Props) {
  return (
    <article className="flex items-baseline justify-between">
      <div>
        <h3 className="text-3xl font-bold text-[#111111] lg:text-[1.75rem]">
          Results for ‘<span>Laptop’</span>
        </h3>
        <p className="mt-1 text-gray500">Showing 1-11 items </p>
      </div>
      <div className="flex gap-8">
        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-gray300 px-3 py-2 font-semibold text-[#111111] shadow-sm">
          <Clock size={17} strokeWidth={3} />
          <p>Sort by</p>
          <ChevronDown size={19} strokeWidth={3} />
        </div>
        {!filterState && (
          <div
            onClick={() => setState(true)}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-gray300 px-3 py-2 font-semibold text-[#111111] shadow-sm"
          >
            <ListFilter strokeWidth={3} />
            <p>Filter Products</p>
          </div>
        )}
      </div>
    </article>
  );
}
