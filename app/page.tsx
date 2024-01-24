import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-primary'>Home Page</h1>
      <Button variant='outline' size='lg'>
        Button
      </Button>
      <div>
        <Link href='/about'>About</Link> | <Link href='/photos'>Photos</Link> |{' '}
        <Link href='/sample'>Sample</Link>
      </div>
    </main>
  );
}
