import Main from "../Pages/MainPage";
import Sushi from "../Pages/Sushi";
import Bag from "../Pages/Bag";
import Kebab from "../Pages/Kebab";
import Noodles from "../Pages/Noodles";
import Rolls from "../Pages/Rolls";
import Sets from "../Pages/Sets";
import Soups from "../Pages/Soups";
import Burgers from "../Pages/Burger";
import Pizza from "../Pages/Pizza";
export const PATHS = {
  MAIN: "/",
  SUSHI: "/sushi",
  BAG: "/bag",
  KEBAB: "/kebab",
  NOODLES: "/noodles",
  ROLLS: "/rolls",
  SETS: "/sets",
  SOUPS: "/soups",
  BURGERS: "/burgers",
  PIZZA: "/pizza",
};
export const routes = [
  {
    path: PATHS.MAIN,
    element: Main,
  },
  {
    path: PATHS.SUSHI,
    element: Sushi,
  },
  {
    path: PATHS.KEBAB,
    element: Kebab,
  },
  {
    path: PATHS.NOODLES,
    element: Noodles,
  },
  {
    path: PATHS.ROLLS,
    element: Rolls,
  },
  {
    path: PATHS.SETS,
    element: Sets,
  },
  {
    path: PATHS.SOUPS,
    element: Soups,
  },
  {
    path: PATHS.BURGERS,
    element: Burgers,
  },
  {
    path: PATHS.PIZZA,
    element: Pizza,
  },
  {
    path: PATHS.BAG,
    element: Bag,
  },
];
