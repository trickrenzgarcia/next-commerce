"use client"

import { ShopifyMenu } from "@/lib/shopify/types";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RiMenu5Line } from "react-icons/ri";
import { useMediaQuery } from '@/hooks/use-media-query';
import Link from 'next/link';
import { Logo } from '../based/logo';

interface MobileMenuProps {
  menu: ShopifyMenu[];
}

export function MobileMenu({ menu }: MobileMenuProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  React.useEffect(() => {
    // Close the menu if the screen size changes to desktop
    if (isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className='flex md:hidden'
          size='icon'
        >
          <RiMenu5Line className='size-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle className='flex items-center'>
            <Logo />
            <span className='ml-2 text-lg'>Rwick Store</span>
          </SheetTitle>
          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>
        <div>
          <ul className='flex flex-col gap-5 px-4'>
            {menu.map((item) => (
              <Link href={item.path} prefetch key={item.title}>
                <li className='underline-offset-4 hover:underline'>
                  <span className='text-xl'>
                    {item.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
