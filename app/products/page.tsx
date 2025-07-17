'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Products() {
  const searchParams = useSearchParams()
  const brandName = searchParams.get('brandName')

  return (
    <div className='min-h-screen flex justify-center items-center'>
      Ürünler sayfası - <span>{brandName}</span>
    </div>
  )
}
