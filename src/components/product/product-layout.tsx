import React from 'react'


type LayoutProps = {
  children: React.ReactNode;
} & React.ComponentProps<'div'>;

export function ProductLayout({
  children,
 ...props
}: LayoutProps) {
  return (
    <div {...props} className="p-4 lg:p-6">
      {children}
    </div>
  )
}
