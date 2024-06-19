import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="w-full max-w-[1440px] mx-auto">{children}</div>;
};

export default Container;