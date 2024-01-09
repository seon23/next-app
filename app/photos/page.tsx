import Image from 'next/image';
import Link from 'next/link';
import { getPhotos } from '../_lib/utils';

export default async function Photos() {
  const photos = await getPhotos();

  return (
    <div>
      <h1>Photo List</h1>
      <div className='container grid sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-9'>
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`photos/${photo.id}`}
            className='hover:bg-opacity-50'
            scroll={false}
          >
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              width={150}
              height={150}
              priority
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
