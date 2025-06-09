import { shopifyGetMenu } from '@/lib/shopify'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'
import { Search } from './search'
import { Cart } from './cart'
import { Logo } from '../based/logo'

export async function Navbar() {
  const menu = await shopifyGetMenu("main-menu")
  
  return (
    <nav className='flex items-center justify-between p-4'>
      <div className='flex items-center gap-4'>
        <div className='md:flex hidden'>
          <Link href='/' prefetch>
            <Logo />
          </Link>
        </div>
        <MobileMenu menu={menu} />
        <ul className='md:flex gap-4 hidden'>
          {menu.map((item) => (
            <li key={item.title}>
              <Link className='underline-offset-4 hover:underline font-medium' href={item.path} prefetch>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Search />

      <div>
        <Cart />
      </div>
    </nav>
  )
}
