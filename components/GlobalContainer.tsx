import React, { ReactNode } from 'react'

export default function GlobalContainer({children, className}:{children:ReactNode, className?:string}) {
  return (
    <div className={`${className} w-[1640px] max-w-[1640px] lg:px-0 px-6`}>
      {children}
    </div>
  )
}
