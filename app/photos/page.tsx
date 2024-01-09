import Image from 'next/image';
import Link from 'next/link';

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
// photo-listing
export default async function Photos() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos?userId=1'
  );
  const photos = await res.json();

  return (
    <div>
      <h1>Photo List</h1>
      <ul>
        {photos.map((photo: Photo) => (
          <li key={photo.id}>
            <Link href={'photos/' + photo.id}>
              <h2>{photo.title}</h2>
            </Link>
            <Image width={100} height={100} src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
