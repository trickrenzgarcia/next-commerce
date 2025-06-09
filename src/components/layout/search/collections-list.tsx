import { shopifyGetCollection } from '@/lib/shopify'
import FilterList from './filter';

async function CollectionsMenu() {
  const collections = await shopifyGetCollection();

  return <FilterList list={collections} title='Collections' />
}

export default function CollectionsList() {
  return <CollectionsMenu />
}
