import LoginForm from "./login-form";
import LoginImage from "./login-image";

export const LoginPage = () => {
  return (
    <div className="w-screen flex items-center h-screen justify-center">
      <div className="flex w-full h-[90%]">
        <LoginForm />
        <LoginImage />
      </div>
    </div>
  );
};
