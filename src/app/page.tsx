import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-10">
      {images.map((image, index) => (
        <div key={image.id} className="w-1/5 flex flex-col">
          <img src={image.url} alt="This is an image" />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {


  return (
    <main className="m-10">
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
