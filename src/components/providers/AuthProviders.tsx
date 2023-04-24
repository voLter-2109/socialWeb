import { createContext, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../../type";
import React, { PropsWithChildren } from "react";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { users } from "../layout/sidebar/dataUsers";
import { useNavigate } from "react-router-dom";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
  db: Firestore;
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}
type Props = {};

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [reload, setReload] = useState(true);
  const ga = getAuth();
  const db = getFirestore();
  const navigation = useNavigate();

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser) {
        setUser({
          id: authUser.uid,
          avatar: users[0].avatar,
          name: authUser.displayName || "no name",
        });
      } else {
        setUser(null);
        navigation("/auth");
      }
    });
    return () => {
      unListen();
    };
  }, []);

  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
      db,
      reload,
      setReload,
    }),
    [user, ga, db, reload]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
