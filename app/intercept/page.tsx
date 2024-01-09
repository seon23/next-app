import Link from 'next/link';

export default function Intercept() {
  return (
    <div>
      <h1>Intercept Page</h1>
      <div className='flex justify-around gap-5'>
        <Link href='/intercept/ic1'>IC1</Link>
        <Link href='/intercept/ic2'>IC2</Link>
        <Link href='/intercept/ic3'>IC3</Link>
      </div>
    </div>
  );
}
