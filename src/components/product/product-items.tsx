import { Product } from '@/lib/shopify/types'
import React from 'react'
import { ProductCard } from './product-card';
import Link from 'next/link';

type ItemsProps = {
  products: Array<Product>;
}

export function ProductItems({
  products
}: ItemsProps) {
  console.log('ProductItems', products)
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6'>
      {products.map((product) => (
        <Link href={`/product/${product.handle}`} key={product.handle}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  )
}
