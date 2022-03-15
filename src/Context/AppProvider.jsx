import React from "react";
import useFireStore from "../hooks/useFireStore";
import { AuthContext } from "./AuthProvider";
export const AppContext = React.createContext();
export default function AppProvider({ children }) {
  const [visible, setVisible] = React.useState(false);
  const [visibleMember, setVisibleMember] = React.useState(false);
  const [id, setId] = React.useState(null);


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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
