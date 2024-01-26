import Main from "../Components/Pages/MainPage";
import Sushi from "../Components/Pages/Sushi";
import Bag from "../Components/Pages/Bag";
import Kebab from "../Components/Pages/Kebab";
import Noodles from "../Components/Pages/Noodles";
import Rolls from "../Components/Pages/Rolls";
import Sets from "../Components/Pages/Sets";
import Soups from "../Components/Pages/Soups";
import Burgers from "../Components/Pages/Burger";
import Pizza from "../Components/Pages/Pizza";
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
