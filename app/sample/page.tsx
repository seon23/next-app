// app/sample/page.tsx  (또는 middleware.ts)
import { redirect } from 'next/navigation';
// import { auth, signOut } from '../_lib/auth';
import { auth, signOut } from '@/app/_lib/auth';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default async function AuthTTPage() {
  const session = await auth();
  if (!session) return redirect('/api/auth/signin');

  const { user } = session;
  console.log('🚀 ~ AuthTTPage ~ user:', user);

  return (
    <>
      <h1>
        {user?.email}::{user?.id}
      </h1>
      <Button variant='outline'>
        <Image
          src={user?.image || ''}
          alt={user?.name || ''}
          width={50}
          height={50}
          className='rounded-full'
        />
      </Button>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button variant='outline'>SignOut</Button>
      </form>
    </>
  );
}
