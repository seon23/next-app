import { notFound } from 'next/navigation';
import Image from 'next/image';
import Modal from '@/app/ui/Modal';

// type Photo = {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// };

async function getData() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos?userId=1'
  );
  return res.json();
}

export default async function PhotoId({
  params,
}: {
  params: { photoId: string };
}) {
  const { photoId } = params;
  console.log('🚀 ~ photoId:', photoId);
  const photos = await getData();
  const photo = photos[photoId];

  if (!photoId) {
    return notFound();
  }
  return (
    <div>
      <Modal>
        <Image width={100} height={100} src={photo.url} alt={photo.title} className='' />
      </Modal>
    </div>
  );
}
