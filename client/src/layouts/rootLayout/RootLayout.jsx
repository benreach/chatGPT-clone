import React from "react";
import "./rootLayout.css";
import { Link, Outlet } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function RootLayout() {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>GPT 7.0</span>
        </Link>
        <div>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
