import React from "react";
import { useForm } from "react-hook-form";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const toggleShowPassowd = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="flex-1 flex flex-col items-center justify-center h-full ">
      <div className="flex flex-col items-center justify-center relative h-full">
        <picture className="absolute w-[50%] top-0 left-0">
          <img src="/assets/celsia-logo-naranja.png" alt="imagen" />
        </picture>
        <h1 className="text-5xl text-primary tracking-wide m-14">
          Inicia Sesión
        </h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="input input-bordered my-5 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow font-normal"
              placeholder="Email"
              {...register("email")}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              className="grow font-normal"
              placeholder="Password"
              {...register("password")}
            />
            {showPassword ? (
              <EyeIcon
                onClick={toggleShowPassowd}
                className="text-base w-6 hover:cursor-pointer"
              />
            ) : (
              <EyeSlashIcon
                onClick={toggleShowPassowd}
                className="text-base w-6 hover:cursor-pointer"
              />
            )}
          </label>
          <button className="btn btn-primary w-full my-5 text-white font-bold rounded-lg">
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
