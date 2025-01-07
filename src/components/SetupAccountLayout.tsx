import { Link } from "react-router-dom";
import { TextSizeStyles } from "../lib/styles";
import { cn } from "../lib/utils";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  normal?: boolean;
  reroute?: boolean;
};

const SetupAccountLayout = ({
  children,
  title,
  description,
  icon,
  normal = true,
  reroute = false,
}: Props) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col px-[40px] lg:px-[60px]">
      <Link to="/" className="header mt-6">
        <img src="/assets/icons/Logo.svg" alt="logo" />
      </Link>

      <div className="flex w-full flex-1 flex-col py-4 md:justify-center lg:justify-start lg:py-2">
        {normal && (
          <div className="mb-6 w-full max-w-[410px] text-center">
            <div className="space-y-8">
              {icon}

              <div>
                <h1 className={TextSizeStyles.heading5}>{title}</h1>
                <p className={cn("text-balance text-gray500")}>{description}</p>
              </div>
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default SetupAccountLayout;
