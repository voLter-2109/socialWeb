import React, { useEffect, useState } from "react";
import { IMessage } from "../../../type";
import { useAuth } from "../../providers/useAuth";
import { collection, getDocs } from "firebase/firestore";

const Messages: React.FC = () => {
  const [message, setMessage] = useState<IMessage[]>([]);
  const { db } = useAuth();

  useEffect(() => {
    const fetching = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      querySnapshot.forEach((d: any) => {
        setMessage((prev) => [...prev, d.data()]);
      });
    };
    fetching();
  }, []);

  return <div>Messages</div>;
};

export default Messages;
