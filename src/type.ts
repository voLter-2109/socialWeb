import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Dispatch, SetStateAction } from "react";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IUser {
  avatar: string;
  name: string;
  isNetWorker?: boolean;
  id: string;
}

export interface IPost {
  author: IUser;
  createAt: string;
  content: string;
  image?: string[];
}

export interface IMenuItem {
  title: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export interface IUserData {
  email: string;
  password: string;
  name: string;
}

export interface IMessage {
  user: IUser;
  message: string;
}
