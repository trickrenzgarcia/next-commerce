"use client"

import { useEffect, useRef, useState } from 'react'
import { ListItem } from '.'
import { usePathname, useSearchParams } from 'next/navigation'
import { ChevronDownIcon } from 'lucide-react'
import { FilterItem } from './item'

export default function FilterItemDropDown({ list }: { list: ListItem[] }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [active, setActive] = useState("")
  const [openSelect, setOpenSelect] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    list.forEach((listItem) => {
      if(('path' in listItem && pathname === listItem.path) || ('slug' in listItem && searchParams.get('sort') === listItem.slug)) {
        setActive(listItem.title)
      }
    })
  }, [pathname, list, searchParams])

  return (
    <div className='relative' ref={ref}>
      <div onClick={() => setOpenSelect(!openSelect)}
        className='flex w-full items-center justify-between rounded border px-4 py-2 text-sm'
      >
        {active}
        <ChevronDownIcon className='size-6'/>
      </div>
      {openSelect ? (
        <div onClick={() => setOpenSelect(false)} className=''>
          {list.map((item, i) => (
            <FilterItem item={item} key={i} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
