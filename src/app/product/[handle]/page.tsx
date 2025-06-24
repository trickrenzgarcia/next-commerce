import ProductGallery from '@/components/product/product-gallery';
import { shopifyGetProduct } from '@/lib/shopify';

type ProductPageParams = {
  params: Promise<{
    handle: string;
  }>
}

export default async function ProductPage({
  params,
}: ProductPageParams) {
  const { handle } = await params;
  const product = await shopifyGetProduct(handle);

  if(!product) return null;
  
  return (
    <div className='mx-auto max-w-screen-2xl px-4'>
      <div className='flex flex-col rounded-lg border p-8 md:p-12 lg:flex-row lg:gap-8'>
        <div className='h-full w-full basis-full lg:basis-4/6'>
          <ProductGallery images={product?.images.slice(0, 5).map((image) => ({
            src: image.url,
            alt: image.altText
          }))} />
        </div>       
      </div>
    </div>
  )
}
