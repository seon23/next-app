import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-primary'>Next Project</h1>
      <div>
        <Link href='/about'>About</Link> | <Link href='/photos'>Photos</Link> |{' '}
        <Link href='/sample'>Sample</Link>
      </div>
    </main>
  );
}
