import LoginForm from "@/components/LoginForm";
import Oauth from "@/components/Oauth";

const page = async () => {

  return (
    <section className="flex justify-center items-center h-[80%]">
      <div className="p-8 shadow-md shadow-blue-600 rounded-md w-[80%] lg:w-[50%] border">
        <h2 className="text-3xl font-bold">Login</h2>
        <div className="flex flex-row justify-start items-center">
          <Oauth />
          <div className="w-[1px] mx-4 h-full" />
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default page;
