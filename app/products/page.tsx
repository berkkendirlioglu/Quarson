import React, { Suspense } from 'react'
import ProductsClient from './ProductsClient'

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ProductsClient />
    </Suspense>
  )
}