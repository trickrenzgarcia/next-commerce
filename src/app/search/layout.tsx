import CollectionsList from '@/components/layout/search/collections-list'
import FilterList from '@/components/layout/search/filter-list'
import React from 'react'

export default function SearchLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 md:flex-row'>
        <div>
          <CollectionsList />
        </div>
        <div className='order-last md:order-none w-full'>
          {children}
        </div>
        <div>
          <FilterList />
        </div>
      </div>
    </>
  )
}
