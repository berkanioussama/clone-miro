import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      home
      <UserButton/>
    </main>
  );
}
