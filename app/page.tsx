import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      home
      <UserButton/>
    </main>
  );
}
