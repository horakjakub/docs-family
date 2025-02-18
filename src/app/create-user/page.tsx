import UserForm from "@/components/UserForm";
import { Provider } from "@chakra-ui/react/provider";
import { JSX } from "react";
import { Providers } from "../providers";

export default (): JSX.Element => {
    return <Providers><UserForm /></Providers>
} 