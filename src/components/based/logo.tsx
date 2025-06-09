import Image from 'next/image'
import React from 'react'

export function Logo() {
  return (
    <Image
      className='rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm'
      src='/images/logo.png' alt='Logo' width={42} height={42}
    />
  )
}
