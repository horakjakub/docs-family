import UserForm from "@/components/UserForm";
import { fetchLocal } from "@/utils/utils";
import { JSX } from "react";

export default async (): JSX.Element => {
  const tadsam = await fetchLocal(`/users`, { method: "GET" });
  console.log(tadsam);
  return <UserForm />;
};
