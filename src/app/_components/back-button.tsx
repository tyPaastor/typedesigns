'use client';

import { useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';

type BackButtonProps = HTMLAttributes<HTMLButtonElement>;

export default function BackButton({ className, ...props }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={className}
      {...props}
    >
      <span className="inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
        Back to home
      </span>
    </button>
  );
}
