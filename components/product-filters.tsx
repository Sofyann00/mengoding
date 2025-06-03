"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useFilter } from "@/contexts/filter-context"
import { products } from "@/lib/data"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"

// Get unique categories and brands from products
const categories = Array.from(new Set(products.map(product => product.category)))
const brands = Array.from(new Set(products.map(product => {
  // Extract brand from product name (assuming format "BRAND ProductName")
  return product.name.split(' ')[0]
})))

export function ProductFilters() {
  const { selectedCategories, selectedBrands, toggleCategory, toggleBrand, clearFilters } = useFilter()

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <SlidersHorizontal className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
          </div>
          {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <X className="h-4 w-4" />
              Clear all
            </button>
          )}
        </div>
      </div>

      <div className="p-6">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="category" className="border-b border-gray-200">
            <AccordionTrigger className="text-gray-700 hover:text-gray-900 py-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Category</span>
                {selectedCategories.length > 0 && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium">
                    {selectedCategories.length}
                  </span>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center space-x-3 group">
                    <Checkbox 
                      id={category} 
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                      className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                    />
                    <Label 
                      htmlFor={category} 
                      className="text-gray-600 cursor-pointer group-hover:text-gray-900 transition-colors"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brand" className="border-b border-gray-200">
            <AccordionTrigger className="text-gray-700 hover:text-gray-900 py-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Brand</span>
                {selectedBrands.length > 0 && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium">
                    {selectedBrands.length}
                  </span>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {brands.map(brand => (
                  <div key={brand} className="flex items-center space-x-3 group">
                    <Checkbox 
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                      className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                    />
                    <Label 
                      htmlFor={brand} 
                      className="text-gray-600 cursor-pointer group-hover:text-gray-900 transition-colors"
                    >
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}