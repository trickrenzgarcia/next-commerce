import { shopifyGetCollection } from '@/lib/shopify'
import FilterList from './filter';
import { Suspense } from 'react';

async function CollectionsMenu() {
  const collections = await shopifyGetCollection();

  return <FilterList list={collections} title='Collections' />
}

export default function CollectionsList() {

  return (
    <Suspense fallback={
      <div>Loading....</div>
    }>
      <CollectionsMenu />
    </Suspense>
  )
}
