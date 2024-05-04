import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex h-screen w-full flex-col">
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default layout
