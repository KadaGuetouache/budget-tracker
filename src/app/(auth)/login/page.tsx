import LoginForm from "@/components/LoginForm";
import Oauth from "@/components/Oauth";

const page = async () => {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 shadow-md shadow-blue-600 rounded-md w-[80%] lg:w-[50%] border">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
        <div className="flex flex-col-reverse md:flex-row ustify-start items-center">
          <Oauth />
          <div className="hidden md:block w-[1px] mx-4 h-full" />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
