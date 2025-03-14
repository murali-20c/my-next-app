import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div>
      <h2>Loading...</h2>
      <Image src="/loader.gif" alt="Loading" width={50} height={50} />
    </div>
  );
}