import { useRouter } from 'next/navigation';
import { createContext, useContext } from 'react'

type ProductState = {
  [key: string]: string;
} & {
  image?: string;
}

type ProductContextType = {
  state: ProductState;
  updateOption: (name: string, value: string) => ProductState;
  updateImage: (image: string) => ProductState;
}

const ProductContext = createContext<ProductContextType | null>(null)

export function useProduct() {
  const context = useContext(ProductContext)

  if(!context) {
    throw new Error('useProduct must be used within a ProductProvider')
  }

  return context
}

export function useUpdateURL() {
  const router = useRouter()

  return (state: ProductState) => {
    const newParams = new URLSearchParams(window.location.search)
    Object.entries(state).forEach(([key, value]) => {
      newParams.set(key, value)
    })

    router.push(`?${newParams.toString()}`, {
      scroll: false
    })
  }
}