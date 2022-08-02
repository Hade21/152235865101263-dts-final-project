import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../../config/api/api";

const ProtectedComponents = ({ children, loginOnly = true }) => {
  const [cookies] = useCookies(["token"]);
  const [user, setUser] = useState();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

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

  if (!user && loginOnly) {
    console.log("tidak ada user");
    return <Navigate to="/login" />;
    // return navigate("/login");
  } else if (user && !loginOnly) {
    console.log("sudah ada user");
    return <Navigate to="/" />;
    // return navigate("/");
  } else {
    return children;
  }
};

export default ProtectedComponents;
