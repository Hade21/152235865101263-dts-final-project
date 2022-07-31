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
    <div className="w-full h-screen object-cover object-left font-rubik text-xl font-medium flex justify-between">
      <div className="image items-center w-1/2 h-full">
        <img
          src="https://cdn.dribbble.com/users/2317423/screenshots/10441884/man_reading_a_book_illustration_2_4x.jpg"
          alt="reading-illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="form w-1/2 h-full">
        <FormLoginRegister type="register" onSubmit={register} />
      </div>
    </div>
  );
};

export default Register;
