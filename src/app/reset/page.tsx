import ResetPasswordForm from "@/components/ResetPasswordForm";
import { Suspense } from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Suspense fallback={<div></div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
};

export default page;
