import { submitUser } from "@/actions/users";
import { redirect } from "next/navigation";
import { useActionState } from "react";

const UserForm: React.FC = () => {
  // const [state, formAction] = useActionState(await(state: any, tadam: any) => {
  //   redirect("create-family");
  // }, {});

  return (
    <form action={submitUser}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <label
        htmlFor="familyName"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Family name
      </label>
      <input
        id="familyName"
        type="text"
        name="familyName"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
