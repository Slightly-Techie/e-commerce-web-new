import Button from "../Button";
import dottedIcon from "../../assets/icons/sidebar/3dots.svg";

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
            className="rounded-full bg-[#FDF0D5] px-2.5 py-1.5 text-xs text-[#6F4400] font-semibold"
          />
        </div>
      </div>

      <img src={dottedIcon} alt="" className="cursor-pointer"/>
    </div>
  );
};

export default STMember;
