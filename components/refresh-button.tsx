'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function RefreshButton(): JSX.Element {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className={`${
        isPending ? 'cursor-not-allowed text-green-900' : 'text-green-600'
      } text-sm hover:text-red-700`}
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
