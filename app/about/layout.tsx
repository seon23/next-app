import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='m-5 text-lg'>
        <h1 className='font-bold'>About Layout</h1>
        <div className='border-3 border-red-300'>{children}</div>
      </div>
    </>
  );
}
