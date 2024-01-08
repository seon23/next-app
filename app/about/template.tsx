import React from 'react';

export default function AboutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>This is About Template.</h1>
      <div className='border-2 border-slate-700'>{children}</div>
    </>
  );
}
