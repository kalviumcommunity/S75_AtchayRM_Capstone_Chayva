import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Canva here</h2>
      <Button>Touch me!</Button>
      <UserButton/>
    </div>
  );
}