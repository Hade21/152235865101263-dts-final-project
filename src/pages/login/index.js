import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { setErrMsg, setUser } from "../../app/userSlice/userReducer";
import { FormLoginRegister } from "../../components";
import { api } from "../../config/api/api";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(["token"]);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.pass);
  const tokenName = "private_token";
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const expiredDate = tomorrow.toJSON().split("T")[0];

  const getUser = (token) => {
    api
      .get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "applocation/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(setUser(res.data.user));
          console.log(res.data);
        }
      })
      .catch((err) => {
        return dispatch(setErrMsg(err.response?.detail));
      });
  };
  const login = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
      token_name: tokenName,
      expired_at: expiredDate,
    };
    api
      .post("/login", body)
      .then((res) => {
        if (res.status === 201) {
          if (res.data.token.status === "Active") {
            setCookies("token", res.data.token.plain_text, {
              path: "/",
              secure: true,
            });
            dispatch(setErrMsg(null));
            getUser(res.data.token.plain_text);
            navigate("/");
          }
        }
      })
      .catch((err) => {
        if (err.response?.status === 422) {
          dispatch(setErrMsg("Email/Password salah!"));
        }
      });
  };

  return (
    <div className="w-full h-screen font-rubik font-medium lg:flex lg:justify-between relative lg:static">
      <div className="image lg:items-center lg:w-1/2 h-full w-full absolute lg:static top-0 left-0">
        <img
          src="https://cdn.dribbble.com/users/2317423/screenshots/10441884/man_reading_a_book_illustration_2_4x.jpg"
          alt="reading-illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="form lg:w-1/2 h-full flex items-center z-10 lg:block">
        <div className="wrapper bg-white rounded-lg lg:rounded-none w-5/6 mx-auto h-5/6 lg:w-full bg-opacity-75 lg:bg-opacity-100 shadow-glass lg:shadow-none backdrop-blur-glass lg:backdrop-blur-none border-[1px] lg:border-none border-glass-border">
          <FormLoginRegister type="login" onSubmit={login} />
        </div>
      </div>
    </div>
  );
};

export default Login;
