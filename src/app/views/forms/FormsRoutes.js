import {lazy} from "react";
import {authRoles} from "../../auth/authRoles";

const formsRoutes = [
  {
    path: "/forms/basic",
    component: lazy(() => import('./BasicForm')),
    auth:authRoles.guest
  },
  {
    path: "/forms/editor",
    component: lazy(() => import("./EditorForm")),
    auth:authRoles.admin
  }
];

export default formsRoutes;
