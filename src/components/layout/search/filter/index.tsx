import type { SortFilterItem } from '@/lib/constants';
import { FilterItem } from './item';
import FilterItemDropDown from './dropdown';

export type PathFilterItem = {
  title: string;
  path: string;
}

export type ListItem = SortFilterItem | PathFilterItem;

interface FilterListProps {
  // Define any props that FilterList might need
  list: ListItem[];
  title?: string;
}

type FilterItemListProps = { list: FilterListProps['list'] }

function FilterItemList({ list }: FilterItemListProps) {
  return (
    <>
      {list.map((item, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  )
}

export default function FilterList({
  list,
  title,
}: FilterListProps) {
  return (
    <>
      <nav>
        {title ? (
          <h3>{title}</h3>
        ) : null}
        <ul className='hidden md:block'>
          <FilterItemList list={list} />
        </ul>
        <ul className='md:hidden'>
          <FilterItemDropDown list={list} />
        </ul>
      </nav>
    </>
  )
}
