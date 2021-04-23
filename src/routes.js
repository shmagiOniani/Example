// core components/views
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Users from "./components/Users/Users";
import Notification from "./components/Notification/Notification";
import Application from "./components/Application/Application";
import Analytics from "./components/Analytics/Analytics";
import Account from "./components/Account/Account";
import Device from "./components/Device/components/Device/Device";
import MyDevices from "./components/Device/components/MyDevices/MyDevices";
import Gateway from "./components/Device/components/Gateway/Gateway";
import NotFound from "./components/NotFound/NotFound";

export const routes = [
  {
    path: "/Login",
    component: Login,
    layout: "",
  },
  {
    path: "/Registration",
    component: Registration,
    layout: "",
  },
  {
    path: "/Users",
    component: Users,
    layout: "/Table",
  },
  {
    path: "/all",
    component: Notification,
    layout: "/Notification",
  },
  {
    path: "/Application",
    component: Application,
    layout: "/Dashboard",
  },
  {
    path: "/Analytics",
    component: Analytics,
    layout: "/Dashboard",
  },
  {
    path: "/Account",
    component: Account,
    layout: "/User",
  },
  {
    path: "/Device",
    component: Device,
    layout: "/Device",
  },
  {
    path: "/MyDevices",
    component: MyDevices,
    layout: "/Device",
  },
  {
    path: "/Gateway",
    component: Gateway,
    layout: "/Device",
  },
  {
    path: "/NotFound",
    component: NotFound,
    layout: "",
  },
];

// export const loggedRoutes = [
//   {
//     path: "/Login",
//     component: Login,
//     layout: "",
//   },
//   {
//     path: "/Registration",
//     component: Registration,
//     layout: "",
//   },
//   {
//     path: "/Users",
//     component: Users,
//     layout: "/Table",
//   },
//   {
//     path: "/all",
//     component: Mail,
//     layout: "/Mail",
//   },
//   {
//     path: "/Application",
//     component: Application,
//     layout: "/Dashboard",
//   },
//   {
//     path: "/Analytics",
//     component: Analytics,
//     layout: "/Dashboard",
//   },
//   {
//     path: "/Account",
//     component: Account,
//     layout: "/User",
//   },
//   {
//     path: "/AddDevice",
//     component: AddDevice,
//     layout: "/Device",
//   },
//   {
//     path: "/MyDevices",
//     component: MyDevices,
//     layout: "/Device",
//   },
//   {
//     path: "/NotFound",
//     component: NotFound,
//     layout: "",
//   },
// ];
