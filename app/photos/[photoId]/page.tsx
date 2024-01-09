import { notFound } from 'next/navigation';
import Image from 'next/image';

async function getData() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos?userId=1'
  );
  return res.json();
}

export default async function Slug({
  params,
}: {
  params: { photoId: string };
}) {
  const { photoId } = params;
  console.log('🚀 ~ Slug ~ photoId:', photoId);
  const photos = await getData();
  const photo = photos[photoId];

  if (!photoId) {
    return notFound;
  }
  return (
    <div>
      <h2>{photo.title}</h2>
      <Image width={100} height={100} src={photo.url} alt={photo.title} />
    </div>
  );
}
