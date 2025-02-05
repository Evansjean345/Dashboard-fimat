import Cookies from "js-cookie";
import { createContext, useContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(Cookies.get("userId") || null);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const navigate = useNavigate();

  const login = ({ userId, token }) => {
    setUserId(userId);
    setToken(token);
    Cookies.set("userId", userId);
    Cookies.set("token", token);
    Cookies.get("jwt");
    console.log(userId, token);
  };

  const logout = () => {
    setUserId(null);
    setToken(null);
    Cookies.remove("userId");
    Cookies.remove("token");
    navigate("/");
  };

  const isAuthenticated = () => {
    const _id = userId
    return token !== null && userId === _id ? token  : undefined;
  };


  const getUserInfo = async () => {
<<<<<<< HEAD
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`);
=======
    const response = await fetch(`http://localhost:4000/user/${userId}`);
>>>>>>> 545eb86b (first commit)
    const data = await response.json();
    return data;
  };

  const getOrderByUser = async () => {
<<<<<<< HEAD
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}/order`);
=======
    const response = await fetch(`http://localhost:4000/user/${userId}/order`);
>>>>>>> 545eb86b (first commit)
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
