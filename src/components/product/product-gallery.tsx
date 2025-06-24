"use client";

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { GridTileImage } from '../grid/tile';
import { useProduct, useUpdateURL } from './product-context';

type ProductGalleryProps = {
  images: Array<{
    src: string;
    alt: string;
  }>
}

export default function ProductGallery({
  images
}: ProductGalleryProps) {

  const { state, updateImage } = useProduct();

  const updateURL = useUpdateURL();

  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex  = imageIndex + 1 < images.length ? imageIndex + 1 : 0;

  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonCn = "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center";

  return (
    <form>
      <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
        {images[imageIndex] && (
          <Image 
            className='h-full w-full object-contain'
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            src={images[imageIndex]?.src as string}
            alt={images[imageIndex]?.alt as string}
            priority={true}
          />
        )}
        {images.length > 1 ? (
          <div className='absolute bottom-[15%] flex w-full justify-center'>
            <div className='mx-auto flex h-11 items-center rounded-full border'>
              <button 
                formAction={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label='Previous product image' 
                className={buttonCn}
              >
                <ArrowLeftIcon className='size-6' />
              </button>
              <div className='mx-1 h-6 w-px' />
              <button 
                formAction={() => {
                  const newState = updateImage(nextImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label='Next product image' 
                className={buttonCn}
              >
                <ArrowRightIcon className='size-6' />
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {images.length > 1 ? (
        <ul className='my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0'>
          {images.map((image, index) => {
            const isActive = index === imageIndex;
            return (
              <li key={index} className='h-20 w-20'>
                <button
                  formAction={() => {
                    const newState = updateImage(index.toString());
                    updateURL(newState);
                  }}
                  aria-label='Select product image' 
                  className='h-full w-full'
                >
                  <GridTileImage
                    alt={image.alt}
                    src={image.src}
                    active={isActive}
                    width={80}
                    height={80}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </form>
  )
}