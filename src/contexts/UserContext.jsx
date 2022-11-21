import React, { useContext, useState, useEffect } from "react";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const userData = localStorage.getItem("user");

    const url = "https://ulift-backend-production.up.railway.app/api/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return setLoading(false);
      }

      const user = await response.json();

      setUser(user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return <UserContext.Provider value={user}>{!loading && children}</UserContext.Provider>;
};
