import { Link } from 'lucide-react';
import { redirect } from 'next/navigation';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
  const posts = await res.json();
  return posts.map((post: Post) => ({
    slug: [`${post.id}`, 'aaa', 'bbb'],
  }));
}

export default function Slug({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  console.log('🚀 ~ Slug ~ slug:', slug);

  // const isValid = slug?.length > 0;
  const isValid = !!slug?.length;
  if (!isValid) redirect('/shop/000');

  return (
    // Slug는 server component, SlugDetecter는 client component여서 '/shop'으로 접근했을 때 에러가 난다.(?)
    // Slug는 server component여서, useRouter를 사용하려면 clinet component(SlugDetector)를 따로 생성해야 한다?
    <div>
      SlugPage: {slug?.join()}
      <Link href='/shop'>Slug</Link>
    </div>
  );
}
