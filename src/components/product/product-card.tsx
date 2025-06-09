import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Product } from '@/lib/shopify/types'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type ProductCardProps = {
  product: Product
}

export function ProductCard(props: ProductCardProps) {
  const { product } = props;

  return (
    <Card className={cn(
      "group p-0 gap-0 relative w-full max-w-sm overflow-hidden rounded-xl border shadow-none hover:shadow-sm transition-shadow"
    )}>
      <CardContent className="relative aspect-square w-full bg-muted p-0 overflow-hidden">
        <Image
          src={product.featuredImage?.url || '/placeholder.png'}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </CardContent>
      <CardFooter className='p-3'>
        <div className='w-full space-y-1'>
          <h3 className='truncate font-medium'>{product.title}</h3>
          <div className=''>
            <span className='text-lg font-semibold bg-blue-500 text-white rounded-md px-2'>
              {product.priceRange.minVariantPrice.currencyCode} {product.priceRange.minVariantPrice.amount}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
