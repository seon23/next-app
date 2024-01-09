// 'use client';

import SlugDetecter from '@/app/ui/SlugDetecter';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
// export const dynamicParams = true;
export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?userId=1'
  );
  const todos = await res.json();
  return todos.map((post: Post) => ({
    slug: [`${post.id}`],
  }));
}

export default function Slug({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const isValid = slug?.length > 0;
  console.log('🚀 ~ Slug ~ slug:', slug);

  return (
    // Slug는 server component, SlugDetecter는 client component여서 '/shop'으로 접근했을 때 에러가 난다.
    <div>
      {isValid ? (
        <div>SlugPage: {slug.join()}</div>
      ) : (
        <SlugDetecter slug={slug} />
      )}
    </div>
  );
}
