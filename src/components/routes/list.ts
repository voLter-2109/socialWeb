import Auth from "../pages/auth/Auth";
import Friends from "../pages/friends/Friends";
import Home from "../pages/home/Home";
import Conversation from "../pages/messages/Conversation";
import Message from "../pages/messages/Messages";
import Profile from "../pages/profile/Profile";

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
    path: "/friends/:id",
    component: Friends,
    auth: true,
  },

  {
    path: "/auth",
    component: Auth,
    auth: false,
  },
];
