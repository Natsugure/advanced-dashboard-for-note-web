import { createBrowserRouter } from "react-router";
import App from "../App";
import { DashboardPage } from "../features/dashboard/pages/DashboardPage";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { SettingsPage } from "../features/settings/pages/SettingsPage";
import { Header } from "../shared/components/layouts/Header";
import { AuthGuardWrapper } from "../features/auth/components/AuthGuardWrapper";
import { RegisterPage } from "../features/auth/pages/RegisterPage";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        element: <AuthGuardWrapper />,
        children: [
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
          }
        ]
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      }
    ]
  }
]);

export default router;