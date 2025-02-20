import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

// Define a type for the family data
interface Family {
  id: number;
  name: string;
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const familyName = url.searchParams.get("name");
  const userId = url.searchParams.get("userId");

  try {
    const sql = neon(process.env.DATABASE_URL);

    if (familyName) {
      const data = await sql<
        Family[]
      >`SELECT family_id, name FROM families WHERE name = ${familyName}`;
      return Response.json({ data });
    }
    if (userId) {
      const users =
        await sql`SELECT name, user_id, family_id FROM users WHERE user_id = ${userId}`;
      const user = users[0];
      if (!user) throw new Error("There is no user with selected id");
      const { family_id } = user;
      const familiesData =
        await sql`SELECT name, family_id FROM families WHERE family_id = ${family_id}`;
      const members =
        await sql`SELECT name, email FROM users WHERE family_id = ${family_id}`;

      const data = {
        name: familiesData[0].name,
        members,
      };

      return Response.json({ data });
    } else {
      const data = await sql<Family[]>`SELECT family_id, name FROM families`;
      return Response.json({ data });
    }
  } catch (error) {
    console.error("Error fetching family:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request: NextRequest): Promise<Response> {
  const sql = neon(process.env.DATABASE_URL);
  const { name } = await request.json();
  console.log("tadmaadfa", name);

  try {
    await sql`INSERT INTO families (name) VALUES (${name})`;
    return new NextResponse("Family created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Error creating family", { status: 500 });
  }
}
