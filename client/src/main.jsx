import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage";
import ChatPage from "./routes/chatPage/ChatPage.jsx";
import DashboardPage from "./routes/dashboardPage/DashboardPage.jsx";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import SignInPage from "./routes/signInPage/SignInPage.jsx";
import SignUpPage from "./routes/signUpPage/SignUpPage.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignInPage />
      },
      {
        path: "/sign-up",
        element: <SignUpPage />
      },
      {
        path: "/",
        element: <Homepage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
