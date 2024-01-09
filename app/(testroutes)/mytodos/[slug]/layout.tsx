// 'use client';

import Link from 'next/link';
import { PropsWithChildren } from 'react';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getData() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?userId=1'
  );
  return res.json();
}

// export default async function Slug({ params }: { params: { slug: string[] } }) {
//   const router = useRouter();
//   const { slug } = params;
//   console.log('🚀 ~ Slug ~ slug:', slug);
//   const todos = await getData();
//   const todo = todos[+slug[0]];

//   if (!slug?.length) {
//     router.push('/todos/1');
//     return;
//   }
//   return (
//     <div>
//       <h2>Todo</h2>
//       <h2 className={todo.completed && 'line-through'}>{todo.title}</h2>
//     </div>
//   );
// }

// export default async function TodoLayout({ params, children }: { params: { slug: string } }, children: React.ReactNode }) {
export default async function TodoLayout({ params, children }: PropsWithChildren<{params: { slug: string }}>) {
    const { slug } = params;
    console.log('🚀 ~ Slug ~ slug:', slug);
    const todos = await getData();

  return (
    <div className='text-blue-700 grid grid-cols-3 gap-3'>
      <ul className='text-right'>
        <li key='todo' className='font-bold'>
          <Link href={`/todo`}>Todo 선택</Link>
        </li>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <Link href={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
      <div className='border border-dotted p-2 col-span-2'>{children}</div>
    </div>
  );
}
