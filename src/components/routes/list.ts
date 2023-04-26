import React from "react";

const Home = React.lazy(() => import("../pages/home/Home"));
const Auth = React.lazy(() => import("../pages/auth/Auth"));
const Friends = React.lazy(() => import("../pages/friends/Friends"));
const Conversation = React.lazy(() => import("../pages/messages/Conversation"));
const Message = React.lazy(() => import("../pages/messages/Messages"));
const Profile = React.lazy(() => import("../pages/profile/Profile"));

export const routes = [
  {
    path: "/",
    component: Home,
    auth: true,
  },
  {
    path: "/profile",
    component: Profile,
    auth: true,
  },

  {
    path: "/messages",
    component: Message,
    auth: true,
  },

  {
    path: "/message/:id",
    component: Conversation,
    auth: true,
  },

  {
    path: "/friends",
    component: Friends,
    auth: true,
  },

  // {
  //   path: "/auth",
  //   component: Auth,
  //   auth: false,
  // },
];
