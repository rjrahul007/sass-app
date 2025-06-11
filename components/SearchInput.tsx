'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
// import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Image from 'next/image';

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';

    const [searchQuery, setSearchQuery] = useState('');

    

  return (
  <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
    <Image src="/icons/search.svg" alt="Search Icon" width={15} height={15} />
    <input
      type="text"
      placeholder="Search companions..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full outline-none"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (searchQuery.trim() !== '') {
            router.push(`${pathname}?topic=${encodeURIComponent(searchQuery.trim())}`);
          }
        }
      }}
    />
  </div>
  )
}

export default SearchInput
