"use server";

import { fetchLocal } from "@/utils/utils";
import { redirect } from "next/navigation";

export const submitUser = async (formData: FormData) => {
  const familyName = formData.get("familyName");
  const name =  formData.get("name");
  const email =  formData.get("email");
 
  await fetchLocal("/families", { method: "POST", body: { name: familyName } });

  const { data } = await fetchLocal(`/families?name=${familyName}`);

  if (!data[0]) throw new Error(`Couldn't connect to the API`);
  const { family_id } = data[0];

  await fetchLocal("/users", {
    method: "POST",
    body: {
      name,
      email,
      familyId: family_id,
    },
  });

  redirect(`/?email=${email}`)
};

