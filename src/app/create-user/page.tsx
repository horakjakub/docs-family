import UserForm from "@/components/UserForm";
import { JSX } from "react"; import { Providers } from "../providers";
import { fetchLocal } from "@/utils/utils";

export default async(): JSX.Element => {
  const tadsam = await fetchLocal(`/users`, {method: 'GET'});
  console.log(tadsam);
  return (
    <Providers>
      <UserForm />
    </Providers>
  );
};
