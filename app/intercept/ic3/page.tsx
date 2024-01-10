'use client';

import BasicModal from '@/components/BasicModal';
import Link from 'next/link';
import { useState } from 'react';

export default function Intercept() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Intercept Page</h1>
      <div className='flex justify-around gap-5'>
        <Link href='/intercept/ic2'>IC2</Link>
        <Link href='/about'>About</Link>
        <button onClick={() => setShowModal(true)}>Modal</button>
        {showModal && <BasicModal>Basic Modal</BasicModal>}
        {/* <BasicModal /> */}
      </div>
    </div>
  );
}
