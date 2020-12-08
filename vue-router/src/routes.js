import Home from "./components/Home";
import User from "./components/user/User";

export const routes = [
  { path: "/", name: "homepage", component: Home },
  { path: "/user", name: "user", component: User },
];
