"use client";
import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
export function useUserContext() {
  return useContext(UserContext);
}
// const page = () => {
//   const accessToken = Cookies.get("accessToken");
//   const [user, setUser] = useState();
//   useEffect(() => {
//     if (accessToken) {
//       getUserData();
//     }
//   }, []);
//   const getUserData = async () => {
//     try {
//       const { data } = await axios.get("/api/users/me", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       setUser(data?.user);
//     } catch (error) {}
//   };
//   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
// };

export default function UserDataContext({ children }) {
  const accessToken = Cookies.get("accessToken");

  const [user, setUser] = useState(null);
  const [search, setSearch] = useState();

  const getUserData = async () => {
    try {
      const { data } = await axios.get("/api/users/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUser(data?.user);
    } catch (error) {}
  };
  useEffect(() => {
    if (accessToken) {
      getUserData();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, search, setSearch }}>
      {children}
    </UserContext.Provider>
  );
}
