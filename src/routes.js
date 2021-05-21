// core components/views
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Admin from "./components/Admin/Admin";
import Customers from "./components/Customers/Customers";
import Contacts from "./components/Contacts/Contacts";
import Alerts from "./components/Alerts/Alerts";
import AlertLogs from "./components/AlertLogs/AlertLogs";
import Application from "./components/Application/Application";
import Analytics from "./components/Analytics/Analytics";
import Account from "./components/Account/Account";
// import Device from "./components/Device/Device";
import DeviceGroup from "./components/DeviceGroup/DeviceGroup";
import GatewayGroup from "./components/GatewayGroup/GatewayGroup";
import Gateway from "./components/Gateway/Gateway";
import Schedule from "./components/Schedule/Schedule";
import MailTemplate from "./components/MailTemplate/MailTemplate";
import MailHistory from "./components/MailHistory/MailHistory";
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
    path: "/Admin",
    component: Admin,
    layout: "/Table",
  },
  {
    path: "/Customers",
    component: Customers,
    layout: "/Table",
  },
  {
    path: "/Contacts",
    component: Contacts,
    layout: "/Table",
  },
  {
    path: "/Alerts",
    component: Alerts,
    layout: "/Notification",
  },
  {
    path: "/AlertLogs",
    component: AlertLogs,
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
    path: "/Gateway",
    component: Gateway,
    layout: "/Device",
  },
  {
    path: "/GatewayGroup",
    component: GatewayGroup,
    layout: "/Device",
  },
  // {
  //   path: "/Device",
  //   component: Device,
  //   layout: "/Device",
  // },
  {
    path: "/DeviceGroup",
    component: DeviceGroup,
    layout: "/Device",
  },
  {
    path: "/Schedule",
    component: Schedule,
    layout: "/Device",
  },
  {
    path: "/MailTemplate",
    component: MailTemplate,
    layout: "/Mail",
  },
  {
    path: "/MailHistory",
    component: MailHistory,
    layout: "/Mail",
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
