import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPhotos } from '@/app/_lib/utils';

export async function generateStaticParams() {
  const photos = await getPhotos();
  return photos.map((photo) => {
    photoId: photo.id;
  });
}

export default async function PhotoDetail({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  console.log('🚀 ~ Slug ~ photoId:', photoId);
  const photos = await getPhotos();

  // TypeScript null assertion -> 반드시 있다는 뜻
  // const photo = photos.find((photo) => photo.id === Number(photoId))!;

  const photo = photos.find((photo) => photo.id === Number(photoId));
  if (!photo) {
    return notFound;
  }
  return (
    <div className='container mx-auto'>
      <h2>{photo.title}</h2>
      <Image width={600} height={600} src={photo.url} alt={photo.title} />
    </div>
  );
}
