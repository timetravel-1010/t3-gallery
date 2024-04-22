import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string },
}) {

  const idNumber = Number(photoId);
  if (Number.isNaN(idNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idNumber);

  return (
    <div>
      <img src={image.url} className="w-96" alt={image.name} />
    </div>
  );
}
