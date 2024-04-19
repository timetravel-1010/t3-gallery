import Link from "next/link";
import { db } from "~/server/db";


const mockUrls = [
  "https://utfs.io/f/3f5428e7-2ea4-4729-9073-363b1d6bf2cf-6iwyvb.jpg",
  "https://utfs.io/f/9d2b7605-c78a-4faf-a468-1c67d0c404ea-htuoyf.jpg",
  "https://utfs.io/f/fd56a491-0493-442c-913f-e836e5cd7f08-hh2z99.jpg",
  "https://utfs.io/f/70a01fbe-402f-4ba0-82a5-0009775d5b3a-ml19ax.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="m-10">
      <div className="flex flex-wrap gap-10">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-1/5">
            <img src={image.url} alt="This is an image" />
          </div>
        ))}
      </div>
      Hello/ Gallery in progress...
    </main>
  );
}
