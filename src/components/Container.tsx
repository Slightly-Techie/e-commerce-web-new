import { cn } from "@/lib";
import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<React.HTMLAttributes<HTMLDivElement> & ContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(className, "mx-auto w-full max-w-[1440px]")}
      {...props}
    />
  );
};

export default Container;
