import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { api } from "../../../config/api/api";

const ProtectedComponents = ({ children, loginOnly = true }) => {
  const [cookies] = useCookies(["token"]);
  const [user, setUser] = useState();

  const token = cookies.token;

  useEffect(() => {
    if (token) {
      api
        .get("/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.user);
          }
        })
        .catch((err) => {
          if (err.response?.status === 401) {
            setUser(null);
          }
        });
    } else {
      setUser(null);
    }
  }, [token, user]);

  return (
    <>
      {!user && loginOnly ? (
        <Navigate to="/login" replace={true} />
      ) : user && !loginOnly ? (
        <Navigate to="/" replace={true} />
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedComponents;
