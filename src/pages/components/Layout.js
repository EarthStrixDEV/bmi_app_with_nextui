import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
export default function Layout({children}) {
  return (
    <NextUIProvider>
      <div className="dark text-foreground bg-background h-screen flex flex-col justify-center items-center">
        {children}
      </div>
    </NextUIProvider>
  )
}
