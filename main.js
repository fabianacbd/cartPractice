import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Looks } from "./components/Looks/Looks";
import { linkPage } from "./utils/linkPage";
import { Hoodie } from "./components/Hoodie/Hoodie";
import { Pantalones } from "./components/Pantalones/Pantalones";
import { Shoes } from "./components/Shoes/Shoes";

const buildWebsite = () => {
  Navbar();
  Home();
  Footer();
};

buildWebsite();

linkPage("#homelink", Home);
linkPage("#looklink", Looks);
linkPage("#abrigoslink", Hoodie);
linkPage("#pants", Pantalones);
linkPage("#shoes", Shoes);
