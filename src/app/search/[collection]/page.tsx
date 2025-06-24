import { ProductItems } from '@/components/product/product-items';
import { ProductLayout } from '@/components/product/product-layout';
import { defaultSort, sorting } from '@/lib/constants';
import { shopifyGetCollectionProducts } from '@/lib/shopify';
import React from 'react'

interface CategoryPageParams {
  params: Promise<{ collection: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function CategoryPage({
  params,
  searchParams
}: CategoryPageParams) {
  const { sort } = await searchParams as { [key: string]: string }
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await shopifyGetCollectionProducts({ collection: (await params).collection, sortKey, reverse });

  return (
    <section>
      {products.length === 0 ? (
        <p className='py-3 text-lg'>{`No products found in this collection`}</p>
      ) : (
        <ProductLayout>
          <ProductItems products={products} />
        </ProductLayout>
      )}
    </section>
  )
}
