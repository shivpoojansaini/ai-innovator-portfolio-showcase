import React from 'react';

export default function Blobs() {
  return (
    <>
      <div className="absolute top-10 left-5 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-5 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply opacity-20 animate-blob" />
    </>
  );
}
