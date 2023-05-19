import Cookies from "js-cookie";
import { createContext, useContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  const login = ({ userId, token }) => {
    setUserId(userId);
    setToken(token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    Cookies.get("jwt");
    console.log(userId, token);
  };

  const logout = () => {
    setUserId(null);
    setToken(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };

  const isAuthenticated = () => {
    const _id = userId;
    return token !== null && userId === _id ? token : undefined;
  };

  const getUserInfo = async () => {
    const response = await fetch(
      `https://fimat-group-api.onrender.com/user/${userId}`
    );
    const data = await response.json();
    return data;
  };

  const getOrderByUser = async () => {
    const response = await fetch(
      `https://fimat-group-api.onrender.com/user/${userId}/order`
    );
    const data = await response.json();
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        userId,
        token,
        login,
        logout,
        isAuthenticated,
        getUserInfo,
        getOrderByUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
