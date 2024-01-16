import Image from 'next/image';
import Link from 'next/link';
import { getPhotos } from '../_lib/utils';
import { signOut } from '../_lib/auth';
import { Button } from '@/components/ui/button';

export default async function Photos() {
  const photos = await getPhotos();

  return (
    <>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button variant='outline'>SignOut</Button>
      </form>
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
    </>
  );
}
