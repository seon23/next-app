import Link from 'next/link';

const times = ['morning', 'afternoon', 'evening'];

export default function HiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-blue-700 grid grid-cols-3 gap-3'>
      <ul className='text-right'>
        <li key='hi' className='font-bold'>
          <Link href={`/hi`}>HI</Link>
        </li>
        {times.map((time) => (
          <li key={time}>
            <Link href={`/hi/${time}`}>{time}</Link>
          </li>
        ))}
      </ul>
      <div className='border border-dotted p-2 col-span-2'>{children}</div>
    </div>
  );
}
