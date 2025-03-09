import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Layout } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Hello world 
      <UserButton/>

      <link rel="icon" href="/favicon.ico" />

    </div>
  );
}
