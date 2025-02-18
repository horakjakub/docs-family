import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from 'next/server';

// Define a type for the user data
interface User {
  id: number;
  name: string;
  email: string;
}

export async function GET(): Promise<Response> {
  try {
    const sql = neon(process.env.DATABASE_URL);

    // Use parameterized queries to prevent SQL injection
    const data = await sql<User[]>`SELECT * FROM users`;

    return Response.json({ data });
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


export async function POST(request: NextRequest): Promise<Response> {
  const sql = neon(process.env.DATABASE_URL);
  const { name, email, password } = await request.json();

  try {
    await sql`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${password})`;
    return new NextResponse('User created successfully', { status: 201 });
  } catch (error) {
    return new NextResponse('Error creating user', { status: 500 });
  }
}



export async function PUT(request: NextRequest): Promise<Response> {
  const sql = neon(process.env.DATABASE_URL);
  const { id, name, email, password } = await request.json();

  try {
    await sql`UPDATE users SET name=${name}, email=${email}, password=${password} WHERE id=${id}`;
    return new NextResponse('User updated successfully', { status: 200 });
  } catch (error) {
    return new NextResponse('Error updating user', { status: 500 });
  }
}


export async function DELETE(request: NextRequest): Promise<Response> {
  const sql = neon(process.env.DATABASE_URL);
  const { id } = await request.json();

  try {
    await sql`DELETE FROM users WHERE id=${id}`;
    return new NextResponse('User deleted successfully', { status: 200 });
  } catch (error) {
    return new NextResponse('Error deleting user', { status: 500 });
  }
}