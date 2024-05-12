import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '@features/productsSlice'
import { Product } from '@models/Products'

export const useProductFilter = (selectedCategory: string | null, displayLimit: number): Product[] => {
  const allProducts: Product[] = useSelector(selectAllProducts)
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([])

  useEffect(() => {
    const filteredProducts = selectedCategory
      ? allProducts.filter(product => product.category === selectedCategory)
      : allProducts
    setDisplayedProducts(filteredProducts.slice(0, displayLimit))
  }, [allProducts, selectedCategory, displayLimit])

  return displayedProducts
}
