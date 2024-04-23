import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string },
}) {

  const idNumber = Number(photoId);
  if (Number.isNaN(idNumber)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <FullPageImageView id={idNumber} />
    </Modal>
  );
}
