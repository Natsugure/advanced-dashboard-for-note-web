import { createBrowserRouter } from "react-router";
import { DashboardPage } from "../features/dashboard/pages/DashboardPage";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { SettingsPage } from "../features/settings/pages/SettingsPage";
import { Header } from "../shared/components/layouts/Header";
import { AuthGuardWrapper } from "../features/auth/components/AuthGuardWrapper";
import { SignUpPage } from "../features/auth/pages/SignUpPage";
import { HelpPage } from "@/features/help/pages/HelpPage";
import { PrivacyPolicyPage } from "@/features/help/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/features/help/pages/TermsOfServicePage";
import { PromotionPage } from "@/features/promotion/pages/PromotionPage";
import { DemoPage } from "@/features/demo/pages/DemoPage";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        element: <AuthGuardWrapper />,
        children: [
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
        path: "/",
        element: <PromotionPage />,
      },
      {
        path: "/demo",
        element: <DemoPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/help",
        element: <HelpPage />,
      },
      {
        path: "/terms",
        element: <TermsOfServicePage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicyPage />,
      },
    ]
  }
]);

export default router;