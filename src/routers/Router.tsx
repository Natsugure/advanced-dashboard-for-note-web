import { createBrowserRouter } from "react-router";
import App from "../App";
import { DashboardPage } from "../features/dashboard/pages/DashboardPage";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { SettingsPage } from "../features/settings/pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <LoginPage />,
  }
]);

export default router;