'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Slug({ slug }: { slug: string[] }) {
  const router = useRouter();
  console.log('🚀 ~ Slug ~ slug:', slug);

  useEffect(() => {
    if (!slug?.length) {
      console.log('Not found!');
      router.push('/shop/000');
    }
  }, [slug, router]);

  //   return <div>SlugPage: {slug.join()}</div>;
  return <></>;
}
