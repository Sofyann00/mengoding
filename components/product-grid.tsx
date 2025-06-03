"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'
import { products, formatPrice } from "@/lib/data"
import { useFilter } from "@/contexts/filter-context"
import { Star, Clock, ArrowRight, Shield, Zap, CheckCircle2 } from "lucide-react"

export function ProductGrid() {
  const { selectedCategories, selectedBrands } = useFilter()

  const filteredProducts = products.filter(product => {
    const brand = product.name.split(' ')[0]
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(brand)
    return categoryMatch && brandMatch
  })

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-200 hover:shadow-lg group h-full flex flex-col">
              <CardHeader className="p-0 relative">
                <div className="aspect-square relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-900">
                      {product.category}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">4.8</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">2-4 weeks</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="space-y-4 flex-grow">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span>Secure & Reliable</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      <Zap className="h-4 w-4 text-blue-600" />
                      <span>Fast Delivery</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Free consultation included</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</p>
                      </div>
                    </div>
                    <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}