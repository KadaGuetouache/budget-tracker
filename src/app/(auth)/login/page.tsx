import LoginForm from "@/components/LoginForm";
import Oauth from "@/components/Oauth";

const page = async () => {

  return (
    <section className="flex justify-center items-center h-[80%]">
      <div className="grid grid-cols-1 border md:grid-cols-2 gap-y-4 gap-x-6 p-8 shadow-md shadow-orange-500 rounded-md w-[80%] lg:w-[60%] xl:w-[50%] max-w-[900px]">
        <h2 className="text-3xl font-bold">Create an account</h2>
        <LoginForm className="row-span-2 h-full" />
        <div className="h-[1px] bg-white md:hidden"></div>
        <Oauth />
      </div>
    </section>
  );
};

export default page;
