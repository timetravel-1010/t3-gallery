export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string },
}) {

  console.log(`the id is ${photoId}`);

  return (
    <div>{photoId}</div>
  );
}
