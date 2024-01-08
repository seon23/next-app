'use client';

import { useState } from 'react';

export default function DateTime() {
  const [dtstr, setDtstr] = useState('');

  const dt = new Date().toString();
  console.log('🚀 ~ DateTime ~ dt:', dt);
  return (
    <div>
      <h1>DateTime</h1>
      {dtstr}
      <hr />
      <button className='btn' onClick={() => setDtstr(dt)}>
        DT
      </button>
    </div>
  );
}
