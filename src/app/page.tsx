import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main className="m-10">
      <div className="flex flex-wrap gap-10">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={index} className="w-1/5 flex flex-col">
            <img src={image.url} alt="This is an image" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
      Hello/ Gallery in progress...
    </main>
  );
}
