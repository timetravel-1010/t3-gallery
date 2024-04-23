import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col h-48 w-48 ">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
          {/*<p>{image.name}</p>*/}
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {


  return (
    <main className="m-8">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          <h3>
            Please Sign In Above
          </h3>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
