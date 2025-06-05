"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, Server, Shield, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen px-4 py-32 text-center relative overflow-hidden flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] animate-pulse" />
        
        {/* Floating elements with enhanced animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <h1 className="text-6xl font-bold sm:text-8xl text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 tracking-tight">
                Digital Innovation
              </h1>
              <h2 className="text-4xl font-bold sm:text-6xl mt-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 tracking-tight">
                Made Simple
              </h2>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-xl leading-8 text-gray-300 max-w-2xl mx-auto font-light"
          >
            We transform complex technology challenges into elegant solutions. From cloud architecture to digital transformation, 
            we're your strategic partner in navigating the digital landscape.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex items-center justify-center gap-x-8"
          >
            <Link href="/marketplace">
              <Button size="lg" className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-xl shadow-lg hover:shadow-xl">
                <span className="relative flex items-center">
                  Discover Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-40 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Background pattern with enhanced opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:text-center mb-24"
          >
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-600/20">
                Our Expertise
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600">
              Strategic Technology Solutions
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden h-full">
                  <CardContent className="relative p-8 flex flex-col h-full">
                    <div className="aspect-square relative overflow-hidden rounded-xl">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-8 flex-grow">
                      <h3 className="font-semibold text-xl group-hover:text-blue-600 transition-colors duration-300 text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600 mt-2 group-hover:text-blue-500 transition-colors duration-300">{formatPrice(product.price)}</p>
                    </div>
                    <div className="mt-6">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-40 sm:py-48 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background pattern with enhanced opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-500/20">
                Why Choose Us
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Excellence in Every Detail
            </h2>
          </motion.div>
          
          <div className="mx-auto mt-24 max-w-2xl sm:mt-28 lg:mt-32 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative flex flex-col p-8 rounded-xl bg-slate-800/50 border border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <dt className="flex items-center gap-x-4 text-lg font-semibold leading-7 text-white">
                      <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                        {feature.icon && React.cloneElement(feature.icon, { className: "h-5 w-5 text-blue-400" })}
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto group-hover:text-blue-300 transition-colors duration-300">{feature.description}</p>
                    </dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Cutting-Edge Technology',
    description: 'Leveraging the latest advancements in cloud computing, AI, and modern frameworks to build scalable and future-proof solutions.',
    icon: <Zap className="h-5 w-5 text-blue-400" />,
  },
  {
    name: 'Strategic Consulting',
    description: 'Expert guidance in digital transformation, helping businesses navigate complex technological challenges with confidence.',
    icon: <Cpu className="h-5 w-5 text-blue-400" />,
  },
  {
    name: 'Enterprise Security',
    description: 'Implementing robust security measures and best practices to protect your digital assets and ensure business continuity.',
    icon: <Shield className="h-5 w-5 text-blue-400" />,
  },
]