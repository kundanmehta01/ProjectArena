import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { LoaderIcon, SparkleIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "../ui/button";
import CustomUserButton from "./custom-user-button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        project<span className="text-primary">Arena</span>
      </span>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-12">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-3">
            <Suspense
              fallback={
                <div>
                  <LoaderIcon className="size-4 animate-spin" />
                </div>
              }
            >
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <Button asChild>
                  <Link href="/submit">
                    <SparklesIcon className="size-4" />
                    Submit Project
                  </Link>
                </Button>
                <CustomUserButton />
              </SignedIn>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
