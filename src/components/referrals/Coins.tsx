import coin from "@/assets/Coin.png";
import { useState } from "react";

interface pendingInvites {
  id: number;
  email: string;
  time: string;
}

interface joined {
  id: number;
  email: string;
  avartar: string;
}

export default function Coins() {
  const [tab, setTab] = useState("pending");

  const pendingInvites: pendingInvites[] = [
    { id: 1, email: "iammensahmichael789@gmail.com", time: "invited just now" },
    { id: 2, email: "kofiowusuamawuga@gmail.com", time: "invited 3 mins now" },
    { id: 3, email: "jamesfr3me78@gmail.com", time: "invited 3/4/23" },
  ];

  const joinedInvites: joined[] = [
    {
      id: 1,
      email: "iammensahmichael789@gmail.com",
      avartar:
        "https://s3-alpha-sig.figma.com/img/9e04/5516/061099a50255a5978c77df6b624c67f1?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpq2JZK3pzwygfgqFgBxbFfArmJXo3xya~34mnpF5rITJIWYY6iv5CGPmcpRISybXNZIbzLRguBYr0jr3ZEa6qH~02ZoUEoS5bVT5BHRRnrNSn5jLy~bFrkgORucokq8ugyZpGw-IXit57bq0iHIyfbsH~BB4GuSK-lAzWSOSHHuRhBnWiu5bVy~M0Xa3UKO9DJICs7qC0U7nNJYqAMvKxFJ27wnxHVxcr48CPIJQFvhLi87C0QnVrzMW-8QDT-5mmgAYQp2eFWqYxOHCIsv5n2nZObffoAdl6-EDXqxU6iE~NvMyXKRR5n5Ps9AHuvgtLv3Rh7e2k1qdCj3GXiQvw__",
    },
    {
      id: 2,
      email: "kofiowusuamawuga@gmail.com",
      avartar:
        "https://s3-alpha-sig.figma.com/img/b8ba/41de/a9d47b878357123930c0e98012b2bf86?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~KzscB7jIAmJJiGXDsR3gucsa6Sg1Jvu5byO83XV98q0stat8eJZEbWMIN7JD1eBk-hfNkDhVS5UagsvHQB1HFCubb78cfSYls8SP2mLw8qldt6VxVNBhnR-W2tnzmhLanD5YmimwPgwbpVUSPMFDq3SgWIUp0u74gc-zWz-jvadkRW8Kl9KQyb9P4AmAM4ZYicEBYYu8bZ7NyicTkehX61UrBLYJY1HB4p5EYON22Rx-~J8EwvXw8y6dvneQ0DP4F4-egJCcPFsfkfWkeiwDcgQR-BVEUBexuXzVfyMGGd8w-J~PHSQ6quT7JkaSL19u-AloJi8gcj~u3EzzfHBw__",
    },
    {
      id: 3,
      email: "jamesfr3me78@gmail.com",
      avartar:
        "https://s3-alpha-sig.figma.com/img/9e0a/541b/ed94dbfc0e261f30953f391003cdaec3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVGGLtGHqNgs6WlTvX-qhAcgOOkGHGBRdcXg3GJCKy5DVBI0k8UhAdtR4FLxWwZG4cGBNT7chJiXCODXC-oN65-8-moRXABtCnz5e0~vLMrNDB4Ymw-LVYwK2SvmAwpN8-12t2PrhXNhSjvIHNfysDYWgiMDaVQ6YHGlHkmqm8uz-af0-K5al08jleVUjSckmY6AyuwPx6Mzy3m3x9AqL-~DhyhlIFvl567qUvFzXJtekXksh-y6qr~MhVp3zgNwHDmWOF3PqCHqdWI54EZYXsmZRs36sJWkzmKki3uX08O2a9xAw4FweatVn1~8FtnXiDMrfZIWbJyndYtLSq4HXA__",
    },
  ];

  return (
    <article className="flex h-max flex-col gap-2 rounded-xl p-6 shadow-coins md:w-2/5">
      <img src={coin} className="w-[72px]" />
      <div className="flex flex-col gap-2">
        <h5 className="text-[20px] font-bold text-darkPrimary">
          Total referral STC coins
        </h5>
        <h1 className="text-3xl font-bold text-darkPrimary">0</h1>
        <p className="text-gray500">
          Invite your friends to Slightly techie market place. If they sign up
          and make a purchase of 50gh, you going to receive 5 STC coins
        </p>
      </div>

      <div>
        <div className="flex gap-4 border-b border-gray200 pb-1">
          <span
            className={`cursor-pointer text-lg font-bold ${tab === "pending" ? "text-darkPrimary underline decoration-2 underline-offset-[11px]" : "text-gray500"}`}
            onClick={() => setTab("pending")}
          >
            Pending
          </span>
          <span
            className={`cursor-pointer text-lg font-bold ${tab === "joined" ? "text-darkPrimary underline decoration-2 underline-offset-[11px]" : "text-gray500"}`}
            onClick={() => setTab("joined")}
          >
            Joined
          </span>
        </div>

        {pendingInvites.length < 1 && tab === "pending" && (
          <p className="relative top-6 flex justify-center text-gray500">
            No friends invited
          </p>
        )}

        {joinedInvites.length < 1 && tab === "joined" && (
          <p className="relative top-6 flex justify-center text-gray500">
            No friends joined
          </p>
        )}

        {pendingInvites && tab === "pending" && (
          <div className="mt-4 flex flex-col gap-4">
            {pendingInvites.map((invite) => (
              <div
                key={invite.id}
                className="flex items-center justify-between gap-4 text-sm"
              >
                <p className="line-clamp-1 text-gray600">{invite.email}</p>
                <p className="line-clamp-1 text-gray400">{invite.time}</p>
              </div>
            ))}
          </div>
        )}

        {joinedInvites && tab === "joined" && (
          <div className="mt-4 flex flex-col gap-4">
            {joinedInvites.map((invite) => (
              <div key={invite.id} className="flex items-center gap-2 text-sm">
                <img
                  src={invite.avartar}
                  alt="avatar"
                  className="h-[24px] w-[24px] rounded-full"
                />

                <p className="text-gray600">{invite.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
