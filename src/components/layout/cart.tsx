"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '../ui/button';
import { MdOutlineShoppingCart } from "react-icons/md";

export function Cart() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className=''
          size='icon'
        >
          <MdOutlineShoppingCart className='size-6' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>
        <div>
          
        </div>
      </SheetContent>
    </Sheet>
  )
}
