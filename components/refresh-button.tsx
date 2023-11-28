'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function RefreshButton(): JSX.Element {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className={`${
        isPending ? 'cursor-not-allowed text-gray-400' : 'text-gray-500'
      } text-sm hover:text-gray-900`}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.refresh();
        });
      }}
    >
      {isPending ? 'Refreshing...' : 'Refresh'}
    </button>
  );
}
