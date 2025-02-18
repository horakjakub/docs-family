import UserForm from "@/components/UserForm";
import { JSX } from "react";
import { Providers } from "../providers";

export default (): JSX.Element => {
  return (
    <Providers>
      <UserForm />
    </Providers>
  );
};
