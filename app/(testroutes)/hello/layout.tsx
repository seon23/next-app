import Link from 'next/link';

const times = ['morning', 'afternoon', 'evening'];

export default function HelloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='text-blue-700 grid grid-cols-3 gap-3'>
      <ul className='text-right'>
        <li key='hello' className='font-bold'>
          <Link href={`/hello`}>HELLO</Link>
        </li>
        {times.map((time) => (
          <li key={time}>
            <Link href={`/hello/${time}`}>{time}</Link>
          </li>
        ))}
      </ul>
      <div className='text-blue-700'>{children}</div>
    </div>
  );
}
