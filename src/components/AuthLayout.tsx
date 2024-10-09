import { Link, useNavigate } from "react-router-dom";
import { ButtonType, TextSize } from "../types";
import Button from "./Button";
import Text from "./Text";

type AuthLayoutProps = {
  buttonText?: string;
  buttonRoute?: string;
  children: React.ReactNode;
};

const AuthLayout = ({ children, buttonRoute, buttonText }: AuthLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-signup flex min-h-svh flex-col bg-cover bg-center bg-no-repeat text-white">
      <div className="py-8 pr-4 md:pr-[40px]">
        <div className="header grid place-content-end">
          {buttonText && buttonRoute && (
            <Button
              btnType={ButtonType.secondary}
              onClick={() => navigate(buttonRoute)}
              className="w-fit"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
      <div className="flex h-full flex-1 justify-center lg:pt-24">
        <div className="grid px-4 md:px-[40px] lg:max-w-screen-xl lg:grid-cols-2 lg:gap-12 lg:px-[60px]">
          <div className="hidden h-full w-fit flex-col gap-6 place-self-end pb-8 lg:flex">
            <div className="space-y-4">
              <Text size={TextSize.large}>Welcome to</Text>
              <h1 className="max-w-[460px] text-5xl leading-[50px] md:text-[70px] md:leading-[84px]">
                <span className="line-through">Slightly</span> Techie Ecommerce
                space
              </h1>
            </div>

            <Text size={TextSize.small}>
              Sign up to join Slightly Techie at{" "}
              <Link
                className="font-bold"
                target="_blank"
                rel="noreferrer"
                to="https://app.slightlytechie.com"
              >
                app.slightlytechie.com
              </Link>
            </Text>
          </div>

          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
