// 'use client';

import { notFound } from 'next/navigation';

// export type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// export default function Slug({ params }: { params: { slug: string[] } }) {
//   const router = useRouter();
//   const { slug } = params;
//   console.log('🚀 ~ Slug ~ slug:', slug);

//   if (!slug?.length) {
//     console.log('Not found!');
//     router.push('/shop/000');
//     return;
//   }
//   return <div>SlugPage: {slug.join()}</div>;
// }

// 아래의 함수 이름은 그대로 써야함

export const dynamicParams = true;
export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?userId=1'
  );
  const todos = await res.json();
  return todos.map((post: Todo) => ({
    slug: [`${post.id}`],
  }));
}

export default function Slug({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  console.log('🚀 ~ Slug ~ slug:', slug);

  if (!slug?.length) {
    return notFound();
  }
  return <div>SlugPage: {slug.join()}</div>;
}
