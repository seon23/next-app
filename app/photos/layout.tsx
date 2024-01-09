import { ReactNode } from 'react';

export default function PhotosLayout({
  viewer,
  children,
}: {
  // <질문>React Element 대신 React Node 쓰는 이유
  // --> 일반 component 쓰면 element 가능한데, 그러면 text node (<h1>text</h1>) 사용이 불가하다.
  viewer: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <div className='border-black border-2 border-solid'>{children}</div>
      <br />
      <div>{viewer}</div>
    </>
  );
}
