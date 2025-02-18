import delay from "@/utils/delay";
import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";

async function loadAuthSession(): Promise<void> {
  await delay();
}

async function getFamilyData() {
  "use server";
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`SELECT name FROM families`;
  return response;
}

export default async function Home() {
  await loadAuthSession();
  const data = await getData();

  redirect('create-user')
  
  return (
      <div>
        HOME SWEET HOME 
      </div>
  );
}
