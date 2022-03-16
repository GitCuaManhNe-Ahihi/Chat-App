import React from "react";
import useFireStore from "../hooks/useFireStore";
import useFireStoreNoWhere from "../hooks/useFireStoreNoWhere";
import { AuthContext } from "./AuthProvider";
export const AppContext = React.createContext();
export default function AppProvider({ children }) {
  const [visible, setVisible] = React.useState(false);
  const [visibleMember, setVisibleMember] = React.useState(false);
  const [id, setId] = React.useState(null);
  const all = useFireStoreNoWhere("users");
  const {
    user: { uid },
  } = React.useContext(AuthContext);
  const roomsConditions = React.useMemo(() => {
    return { field: "members", operator: "array-contains", value: uid };
  }, [uid]);
  const rooms = useFireStore("rooms", roomsConditions);
  const roomCurrent = rooms.filter((room) => room.id === id)[0]||{};
  const conditionMembers = React.useMemo(() => {
    return {
      field: "uid",
      operator: "in",
      value: roomCurrent?.members,
    };
  }, [ roomCurrent?.members]);
  const members = useFireStore("users", conditionMembers);
  
  const allMember = all.filter((user) => user.uid !== uid);
  const thisUser = all.find((user) => user.uid ===uid);
  const idcollection = thisUser?.id

  return (
    <AppContext.Provider
      value={{
        uid,
        rooms,
        setId,
        roomCurrent,
        members,
        visible,
        setVisible,
        visibleMember,
        setVisibleMember,
        allMember,
        idcollection
   
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
