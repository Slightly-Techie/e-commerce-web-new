import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerDemoProps {
  className?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export function DatePickerDemo({
  className,
  value,
  onChange,
}: DatePickerDemoProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !value && "relative text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon className="absolute right-4 mr-2 h-4 w-4 text-gray-400" />
          {value ? (
            format(value, "PPP")
          ) : (
            <span className="text-gray-400">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={value} onSelect={onChange} />
      </PopoverContent>
    </Popover>
  );
}
