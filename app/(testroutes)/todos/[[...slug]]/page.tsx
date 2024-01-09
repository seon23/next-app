// 'use client';

import { useRouter } from 'next/navigation';

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

export default async function Slug({ params }: { params: { slug: string[] } }) {
  const router = useRouter();
  const { slug } = params;
  console.log('🚀 ~ Slug ~ slug:', slug);
  const todos = await getData();
  const todo = todos[+slug[0]];

  if (!slug?.length) {
    router.push('/todos/1');
    return;
  }
  return (
    <div>
      <h2>Todo</h2>
      <h2 className={todo.completed && 'line-through'}>{todo.title}</h2>
    </div>
  );
}
