import { createBrowserRouter } from "react-router";
import App from "../App";
import { DashboardPage } from "../features/dashboard/pages/DashboardPage";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { SettingsPage } from "../features/settings/pages/SettingsPage";
import { Header } from "../shared/components/layouts/Header";
import { AuthGuardWrapper } from "../features/auth/components/AuthGuardWrapper";
import { SignUpPage } from "../features/auth/pages/SignUpPage";

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
        path: "/signup",
        element: <SignUpPage />,
      }
    ]
  }
]);

export default router;