import FormComponent from "@/components/FormComponent";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { neon } from "@neondatabase/serverless";

async function getData() {
  "use server";
  console.log("TADAM", process.env.DATABASE_URL);
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`SELECT version()`;
  return response[0].version;
}

export default async function Home() {
  return (
    <ChakraProvider>
      <div>
        <FormComponent />
      </div>
    </ChakraProvider>
  );
}
