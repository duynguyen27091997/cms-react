import {lazy} from "react";
import {authRoles} from "../../auth/authRoles";

const mapRoutes = [
  {
    path: "/map",
    component: lazy(() => import("./AppMap")),
    auth: authRoles.sa
  }
];

export default mapRoutes;
