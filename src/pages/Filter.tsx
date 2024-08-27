import SelectButton from "@/components/FormElements/SelectButtons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FilterFormFields } from "@/types";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PriceRangeSlider from "./PriceRangeSlider";

interface Props {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filter({ setState }: Props) {
  const [loading, setloading] = useState(false);
  const { register, handleSubmit, control } = useForm<FilterFormFields>();
  const onSubmit: SubmitHandler<FilterFormFields> = (data) => {
    setloading(true);
    console.log(data);
    setloading(false);
  };

  const categories = [
    "computing",
    "books",
    "courses",
    "Mobile phones & Tablets",
    "Games",
    "Accessories",
  ];
  const discounts = [
    "no discount",
    "10%-20%",
    "21%-40%",
    "41%-60%",
    "61%-80%",
    "*1% or more",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-start">
        <div className="mb-2 flex w-full">
          <img src="/assets/icons/filter-lines.svg" alt="" />
          <h2 className="ml-4 text-lg font-bold">Filter Products</h2>
          <img
            src="/assets/icons/tabler-layout-sidebar-left-collapse.svg"
            alt=""
            className="ml-auto cursor-pointer"
            onClick={() => setState(false)}
          />
        </div>
        <Accordion type="single" collapsible className="w-full">
          <FilterSection label="Categories">
            <div className="mt-2 flex w-full flex-wrap gap-4 rounded-xl">
              {categories &&
                categories.map((value: string) => (
                  <SelectButton
                    key={value}
                    {...register("categories")}
                    value={value}
                    id={value}
                    name="categories"
                  />
                ))}
            </div>
          </FilterSection>
          <FilterSection label="Price (GH¢)">
            <Controller
              control={control}
              name="price"
              defaultValue={[0, 0]}
              render={({ field: { value, onChange } }) => (
                <PriceRangeSlider
                  max={5000}
                  step={20}
                  defaultValue={[0, 0]}
                  value={value}
                  onValueChange={onChange}
                  onChangeInputValues={onChange}
                  minStepsBetweenThumbs={20}
                />
              )}
            />
          </FilterSection>
          <FilterSection label="Discount Percentage">
            <div className="mt-4 flex w-full flex-wrap gap-4 rounded-xl">
              {discounts &&
                discounts.map((value: string) => (
                  <SelectButton
                    key={value}
                    {...register("discount_percentage")}
                    value={value}
                    id={value}
                    name="discount_percentage"
                  />
                ))}
            </div>
          </FilterSection>
        </Accordion>
        <Button className="my-4 w-full hover:bg-black" disabled={loading}>
          {loading ? "Filtering..." : "Filter"}
        </Button>
      </div>
    </form>
  );
}

const FilterSection = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <AccordionItem className="font-bold" value={label}>
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};
