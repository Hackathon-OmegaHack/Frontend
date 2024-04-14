import React from "react";

function LoginImage() {
  return (
    <section className="flex-1 w-full flex items-center justify-center ">
      <div className="w-[85%] bg-primary rounded-xl h-full flex flex-col items-center justify-center">
        <picture className="my-10 w-[80%]">
          <img
            className="block object-cover"
            src="/assets/ilustration-login.svg"
            alt=""
          />
        </picture>
        <p className="text-xl text-white tracking-wide">
          Tú energía en tus manos
        </p>
      </div>
    </section>
  );
}

export default LoginImage;
