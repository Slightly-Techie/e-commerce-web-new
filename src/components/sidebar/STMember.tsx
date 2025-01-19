import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const dropdownLinks = [
  { link: "/profile", name: "Profile", id: 1 },
  { link: "/referrals", name: "Referrals", id: 2 },
];

const STMember = () => {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <div className="h-[42px] w-[42px] overflow-hidden rounded-full">
          <img src="/assets/user.jpg" alt="" />
        </div>

        <div>
          <h3 className="mb-2.5 font-semibold text-[#111111]">
            Micheal Mensah
          </h3>
          <Button
            label="ST Member"
            className="rounded-full bg-[#FDF0D5] px-2.5 py-1.5 text-xs font-semibold text-[#6F4400]"
          />
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical color="#8C96A5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-4 py-1">
          {dropdownLinks.map((item) => (
            <DropdownMenuItem key={item.id}>
              <Link to={item.link} className="text-lg">
                {item.name}{" "}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default STMember;
