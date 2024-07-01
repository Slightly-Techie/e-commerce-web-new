import Bag from "./assets/icons/sidebar/shopping-bag-02.svg?react";
import Heart from "./assets/icons/sidebar/heart.svg?react";
import Search from "./assets/icons/sidebar/search-lg.svg?react";
import Clock from "./assets/icons/sidebar/clock-rewind.svg?react";
import Truck from "./assets/icons/sidebar/truck-02.svg?react";

export const SIDEBAR_LINKS = [
  {
    label: "Products",
    label2: "All",
    route: "/",
    icon: <Bag />,
  },
  {
    label: "Explore",
    route: "explore",
    icon: <Search />,
  },
  {
    label: "Favorites",
    route: "favorites",
    icon: <Heart />,
  },
  {
    label: "Orders",
    label2: "Track",
    route: "track",
    icon: <Truck />,
  },
  {
    label: "History",
    label2: "Order",
    route: "history",
    icon: <Clock />,
  },
];
