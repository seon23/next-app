import { notFound } from 'next/navigation';
import Image from 'next/image';
import Modal from '@/components/Modal';
import { getPhotos } from '@/app/_lib/utils';

export default async function Photo_intercept({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  console.log('🚀 ~ photoId:', photoId);
  const photos = await getPhotos();
  const photo = photos.find((photo) => photo.id === Number(photoId));

  if (!photo) {
    return notFound();
  }

  return (
    <div>
      <Modal>
        <Image src={photo.url} alt={photo.title} width={600} height={600} />
      </Modal>
    </div>
  );
}
