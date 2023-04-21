import GroupIcon from "@mui/icons-material/Group";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MessageIcon from "@mui/icons-material/Message";
import { IMenuItem } from "../../../type";

export const dataMenu: IMenuItem[] = [
  { title: "home", link: "/profile", icon: AccountBoxIcon },
  { title: "messages", link: "/messages", icon: MessageIcon },
  { title: "friends", link: "/friends", icon: GroupIcon },
  { title: "posts", link: "/", icon: NewspaperIcon },
];
