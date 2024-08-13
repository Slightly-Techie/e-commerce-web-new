import { Avatar, AvatarImage } from "@/components/ui/avatar";
import bronze from "../assets/images/bronze.png";
import crown from "../assets/images/crown.png";
import gold from "../assets/images/gold.png";
import silver from "../assets/images/silver.png";

export default function ReferralsLeaders() {
  return (
    <article className="mt-6 flex flex-col items-center justify-center gap-6 md:flex-row md:items-end">
      {/* silver */}
      <div className="relative flex h-[111px] w-[200px] flex-col items-center justify-center gap-2 rounded-md bg-gray200 md:w-[156px]">
        <Avatar className="h-[50px] w-[50px]">
          <AvatarImage src="https://s3-alpha-sig.figma.com/img/ea49/7a7f/5dd71b0e6fc1ee968311c5e1f26d98fd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QximwXr~bSpVA7sqTHSTkyS~b64TNu-LNT1QC214qyRU53BU1t4ZEmp8M-2STK07DmHpAKEJW3-pnl9WLh8lXWZJTODeHwehj~KOnmhLwl8aYtuGktcwnthjHuEK9QGL0DG0W7lEXyejrU~p8nYf828JUYtuWrlt5AGheyFp5na2okKkGjNMU-s~6DtOrrnaYoz6XxmIIkio-JcGl5xLJUOhwF~I~jbWxTzGMCauyQFkt-VS-rrndi539NlkwE6GXi3PVhgyymvjhijGd1PolTmCDaAjZHzM-yyFKIsrjv1ludqsI-KZ3Mx5quc86VMw7lt75TPnzH1mjxxMDhgcqw__" />
        </Avatar>
        <img src={silver} alt="silver" className="absolute -top-4 right-1" />
        <p className="text-xs font-bold text-gray500">300 referrals</p>
      </div>
      {/* gold */}
      <div className="relative flex h-[136px] w-[250px] flex-col items-center justify-center gap-2 rounded-md bg-warning100 md:w-[182px]">
        <Avatar className="h-[60px] w-[60px]">
          <AvatarImage src="https://s3-alpha-sig.figma.com/img/9e04/5516/061099a50255a5978c77df6b624c67f1?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpq2JZK3pzwygfgqFgBxbFfArmJXo3xya~34mnpF5rITJIWYY6iv5CGPmcpRISybXNZIbzLRguBYr0jr3ZEa6qH~02ZoUEoS5bVT5BHRRnrNSn5jLy~bFrkgORucokq8ugyZpGw-IXit57bq0iHIyfbsH~BB4GuSK-lAzWSOSHHuRhBnWiu5bVy~M0Xa3UKO9DJICs7qC0U7nNJYqAMvKxFJ27wnxHVxcr48CPIJQFvhLi87C0QnVrzMW-8QDT-5mmgAYQp2eFWqYxOHCIsv5n2nZObffoAdl6-EDXqxU6iE~NvMyXKRR5n5Ps9AHuvgtLv3Rh7e2k1qdCj3GXiQvw__" />
        </Avatar>
        <p className="text-xs font-bold text-gray500">600 referrals</p>
        <img className="absolute left-14 top-px" src={crown} alt="crown" />
        <img src={gold} alt="silver" className="absolute -top-4 right-1" />
      </div>

      {/* bronze */}
      <div className="relative flex h-[111px] w-[200px] flex-col items-center justify-center gap-2 rounded-md bg-neutral-100 md:w-[156px]">
        <Avatar className="h-[50px] w-[50px]">
          <AvatarImage src="https://s3-alpha-sig.figma.com/img/b8ba/41de/a9d47b878357123930c0e98012b2bf86?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~KzscB7jIAmJJiGXDsR3gucsa6Sg1Jvu5byO83XV98q0stat8eJZEbWMIN7JD1eBk-hfNkDhVS5UagsvHQB1HFCubb78cfSYls8SP2mLw8qldt6VxVNBhnR-W2tnzmhLanD5YmimwPgwbpVUSPMFDq3SgWIUp0u74gc-zWz-jvadkRW8Kl9KQyb9P4AmAM4ZYicEBYYu8bZ7NyicTkehX61UrBLYJY1HB4p5EYON22Rx-~J8EwvXw8y6dvneQ0DP4F4-egJCcPFsfkfWkeiwDcgQR-BVEUBexuXzVfyMGGd8w-J~PHSQ6quT7JkaSL19u-AloJi8gcj~u3EzzfHBw__" />
        </Avatar>
        <p className="text-xs font-bold text-gray500">200 referrals</p>
        <img src={bronze} alt="silver" className="absolute -top-4 right-1" />
      </div>
    </article>
  );
}
