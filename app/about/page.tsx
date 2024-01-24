'use client'

import { useState } from 'react';
import DateTime from '../ui/DateTime';
import { Button } from '@/components/ui/button';

export default function About() {
  const [name, setName] = useState('');
  return (
    <div>
      <h1>This is About Page</h1>
      <div>
        <DateTime />
      </div>

      <span>Name: {name}</span>
      <Button
        onClick={() => {
          setName('!!!');
        }}
        variant='outline'
        size='md'
      >
        Btn1
      </Button>
      <Button disabled={!!name} variant='outline' size='md'>
        Btn2
      </Button>
    </div>
  );
}
