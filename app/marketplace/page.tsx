import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { Search, Sparkles } from "lucide-react"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Premium Software Solutions</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Software Development Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our comprehensive software development solutions. 
                We deliver high-quality, scalable applications using modern technology stacks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search services..."
                className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm font-medium">
              Apply Filters
            </button>
          </div>

          {/* Grid Layout */}
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
            <div className="lg:col-span-1">
              <ProductFilters />
            </div>
            <div className="lg:col-span-3 mt-8 lg:mt-0">
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}