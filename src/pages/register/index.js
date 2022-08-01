import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setErrMsg, setUser } from "../../app/userSlice/userReducer";
import { FormLoginRegister } from "../../components";
import { api } from "../../config/api/api";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.pass);
  const confirmPassword = useSelector((state) => state.user.cPass);

  useEffect(() => {
    const token = cookies.token;
    if (token) {
      api
        .get("/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            navigate("/");
          }
        })
        .catch((err) => {
          if (err.response?.status === 401) {
            return;
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const register = (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    };
    api
      .post("/register", body)
      .then((res) => {
        if (res.status === 201) {
          dispatch(setUser(res.data.user));
          dispatch(setErrMsg(null));
          navigate("/login");
        }
      })
      .catch((err) => {
        if (err.response?.data.status === 422) {
          dispatch(setErrMsg(err.response.data.detail));
        }
      });
  };

  return (
    <div className="w-full h-screen object-cover object-left font-rubik text-xl font-medium lg:flex lg:justify-between relative lg:static">
      <div className="image items-center lg:w-1/2 h-full w-full absolute lg:static top-0 left-0">
        <img
          src="https://cdn.dribbble.com/users/2317423/screenshots/10441884/man_reading_a_book_illustration_2_4x.jpg"
          alt="reading-illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="form lg:w-1/2 h-full flex items-center z-10 lg:block">
        <div className="wrapper bg-white rounded-lg lg:rounded-none w-5/6 mx-auto h-5/6 lg:w-full bg-opacity-75 lg:bg-opacity-100 shadow-glass lg:shadow-none backdrop-blur-glass lg:backdrop-blur-none border-[1px] lg:border-none border-glass-border">
          <FormLoginRegister type="register" onSubmit={register} />
        </div>
      </div>
    </div>
  );
};

export default Register;
