"use client"

import React from 'react'
import { type ListItem, type PathFilterItem } from '.'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { cn, createUrl } from '@/lib/utils'
import type { SortFilterItem } from '@/lib/constants'

interface FilterItemProps {
  item: ListItem
}

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? 'p' : Link;

  newParams.delete('q')

  return (
    <li className='mt-2 flex text-black dark:text-white' key={item.title}>
      <DynamicTag 
        className={cn(
          'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100',
          active && 'underline underline-offset-4'
        )}
        href={createUrl(item.path, newParams)}
      
      >
        {item.title}
      </DynamicTag>
    </li>
  )
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const active = searchParams.get('sort') === item.slug
  const q = searchParams.get('q');

  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && {q}),
      ...(item.slug && item.slug.length && {sort: item.slug})
    })
  )

  const DynamicTag = active ? 'p' : Link;
  
  return (
    <li className='mt-2 flex text-black dark:text-white' key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        className={cn(
          'w-full hover:underline hover:underline-offset-4',
          active && 'underline underline-offset-4'
        )}
        href={href}
      >
        {item.title}
      </DynamicTag>
    </li>
  )

}

export function FilterItem({ item }: FilterItemProps) {
  return 'path' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />
}
