import { SignUpContext } from "@/pages/Signup";
import { useContext } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { PiUserBold } from "react-icons/pi";
import { cn } from "../lib/utils";
import { ButtonType, MemberType } from "../types";
import Button from "./Button";

const ChooseAccountType = () => {
  const {
    toggleAccountType,
    member_type,
    toggleMemberType,
    HandleSubmit,
    loading,
  } = useContext(SignUpContext);

  const ACCOUNTTYPES = [
    {
      name: MemberType.TECHIE,
      title: "Slightly Techie",
      desc: "Member of Slightly Techie Network",
      icon: <BsCodeSlash size={20} />,
    },
    {
      name: MemberType.NON_TECHIE,
      title: "Non Slightly Techie",
      desc: "Not a member of Slightly Techie Network",
      icon: <PiUserBold size={20} />,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[500px] rounded-lg bg-white px-8 py-8 text-black">
      <div className="mb-12">
        <h1 className="text-2xl font-bold">Choose account type</h1>
        <small className="font-bold text-gray500">
          Choose an account which suits you
        </small>
      </div>

      <div className="mb-[50px] space-y-6">
        {ACCOUNTTYPES.map(({ name, icon, desc, title }) => (
          <div
            key={name}
            className={cn(
              "flex cursor-pointer gap-4 rounded-xl border px-5 py-7",
              member_type === name
                ? "border-gray400 bg-gray100"
                : "bg-transparent",
            )}
            onClick={() => toggleMemberType(name)}
          >
            <div
              className={cn(
                "icon grid h-[44px] w-[44px] flex-shrink-0 place-content-center rounded-full",
                member_type === name && "bg-primary text-white",
              )}
            >
              {icon}
            </div>

            <div>
              <p className="text-lg font-bold">{title}</p>
              <p className="text-gray500">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          onClick={toggleAccountType}
          btnType={loading ? ButtonType.disabled : ButtonType.secondary}
          disabled={loading}
        >
          Back
        </Button>
        <Button
          onClick={HandleSubmit}
          btnType={loading ? ButtonType.disabled : ButtonType.primary}
          disabled={loading}
        >
          {loading
            ? member_type == MemberType.TECHIE
              ? "Checking CRM"
              : "Creating Account"
            : "Create Account"}
        </Button>
      </div>
    </div>
  );
};

export default ChooseAccountType;
