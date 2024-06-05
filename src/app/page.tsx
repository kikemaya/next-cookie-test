import { cookies } from "next/headers";

export default function HomePage() {
  const cookieValue = cookies().get("__session")?.value;
  return (
    <main>
      <p>Value in cookie: {cookieValue}</p>
      <p><a href='/set-cookie'>set cookie</a></p>
    </main>
  );
}
