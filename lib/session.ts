import { cookies } from "next/headers";

export async function setSession(token: string) {
  const cookieStore = await cookies();

  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get("session")?.value;
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}