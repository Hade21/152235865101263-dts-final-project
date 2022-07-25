import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCPass,
  setEmail,
  setName,
  setPass,
} from "../../../app/userSlice/userReducer";
import { Button, Input } from "../../atoms";

const FormLoginRegister = ({ type, onSubmit }) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.pass);
  const confirmPassword = useSelector((state) => state.user.cPass);
  const errMsg = useSelector((state) => state.user.errMsg);

  return (
    <>
      <form
        className="w-full h-full flex flex-col px-4 justify-center gap-20 items-center transition-all duration-200"
        onSubmit={onSubmit}
      >
        <h1 className="font-rubik font-bold text-4xl text-left transition-all duration-200">
          {type === "login" ? "Login" : "Register"}
        </h1>
        <div className="input w-3/4 flex flex-col gap-4 items-center transition-all duration-200">
          {errMsg ? (
            <h1 className="font-medium font-rubik text-xl bg-fifth-pink text-red-800 w-full rounded-md py-3 transition-all duration-200 animate-pulse- animate-wipe-down">
              {errMsg}
            </h1>
          ) : null}
          {type === "login" ? null : (
            <Input
              type="text"
              name="name"
              placeholder="Nama"
              onChange={(e) => dispatch(setName(e.target.value))}
              value={name}
            />
          )}
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => dispatch(setEmail(e.target.value))}
            value={email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => dispatch(setPass(e.target.value))}
            value={password}
          />
          {type === "login" ? null : (
            <Input
              type="password"
              name="password_confirm"
              placeholder="Konfirmasi Password"
              onChange={(e) => dispatch(setCPass(e.target.value))}
              value={confirmPassword}
            />
          )}
          <Button type="submit">
            {type === "login" ? "Login" : "Register"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormLoginRegister;
