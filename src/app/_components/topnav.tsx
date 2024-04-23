import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SimpleUploadButton from "./simple-upload-button";
import Link from "next/link";


export const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4
    text-xl font-semibold">
      <div>
        <Link href={"/"}>Gallery</Link>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          < UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
