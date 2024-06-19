import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { REGEXPATTERNS } from "./constants";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export const convertTime = (time: number): { mins: string; secs: string } => {
  const calcMins = Math.floor(time / 60);
  const calcSecs = time % 60;

  const padd = (_: number): string => {
    return String(_).padStart(2, "0");
  };

  return { mins: padd(calcMins), secs: padd(calcSecs) };
};

export const hideEmail = (input: string) => {
  let finalEmail = "";

  if (!input || !input.match(REGEXPATTERNS.email)) return "";

  const name = input.split("@")[0];
  const emailProvider = input.split("@")[1];

  name.split("").map((item, index) => {
    if (index > 1) finalEmail += "*";
    else finalEmail += item;
  });

  finalEmail += `@${emailProvider}`;

  return finalEmail;
};
