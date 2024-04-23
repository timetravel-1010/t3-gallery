import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string },
}) {

  const idNumber = Number(photoId);
  if (Number.isNaN(idNumber)) throw new Error("Invalid photo id");

  return (
    <FullPageImageView id={idNumber} />
  );
}
