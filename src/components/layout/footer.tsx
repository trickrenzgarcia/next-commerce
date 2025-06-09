import { shopifyGetMenu } from '@/lib/shopify'
import Link from 'next/link'

export async function Footer() {
  const menu = await shopifyGetMenu("footer")

  return (
    <footer className='flex items-center justify-between p-4'>
      <div>
        <p className='text-gray-600'>© {new Date().getFullYear()} BroJava. All rights reserved.</p>
      </div>
      <div>
        <ul className='flex gap-4'>
          {menu.map((item) => (
            <li key={item.title}>
              <Link
                className='underline-offset-4 hover:underline font-medium text-gray-700'
                href={item.path}
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
