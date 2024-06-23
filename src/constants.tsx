import Bag from "./assets/icons/sidebar/shopping-bag-02.svg?react";
import Heart from "./assets/icons/sidebar/heart.svg?react";
import Search from "./assets/icons/sidebar/search-lg.svg?react";
import Clock from "./assets/icons/sidebar/clock-rewind.svg?react";
import Truck from "./assets/icons/sidebar/truck-02.svg?react";

export const SIDEBAR_LINKS = [
  {
    name: "All Products",
    route: "/",
    icon: <Bag />,
  },
  {
    name: "Explore",
    route: "explore",
    icon: <Search />,
  },
  {
    name: "Favorite",
    route: "favorite",
    icon: <Heart />,
  },
  {
    name: "Track Orders",
    route: "track",
    icon: <Truck />,
  },
  {
    name: "Order History",
    route: "history",
    icon: <Clock />,
  },
];
