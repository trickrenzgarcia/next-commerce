import { ProductItems } from '@/components/product/product-items';
import { ProductLayout } from '@/components/product/product-layout';
import { defaultSort, sorting } from '@/lib/constants';
import { shopifyGetProducts } from '@/lib/shopify';
import React from 'react'

interface SearchPageProps {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

export default async function Page({
  searchParams
}: SearchPageProps) {
  const { sort, q: searchValue } = await searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await shopifyGetProducts({ sortKey, reverse, query: searchValue })
  
  return (
    <>
      <ProductLayout>
        <ProductItems products={products} />
      </ProductLayout>
    </>
  )
}
