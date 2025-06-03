"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      
      slider.on("created", () => {
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen px-4 py-32 text-center relative overflow-hidden flex items-center bg-gradient-to-b from-white to-gray-50">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="max-w-6xl mx-auto relative">
          <div className="relative">
            <div className="relative">
              <h1 className="text-7xl font-bold sm:text-9xl text-black bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                Transform Your Ideas
              </h1>
              <h2 className="text-5xl font-bold sm:text-7xl mt-4 text-black bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500">
                Into Reality
              </h2>
            </div>
          </div>
          
          <p className="mt-12 text-xl leading-8 text-gray-600 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Experience world-class software development services. From full-stack web applications to mobile solutions, 
            we deliver innovative technology solutions that drive your business forward.
          </p>
          
          <div className="mt-16 flex items-center justify-center gap-x-8">
            <Link href="/marketplace">
              <Button size="lg" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-xl shadow-lg hover:shadow-xl">
                <span className="relative flex items-center text-black">
                  View Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-40 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-24">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                Our Services
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
              Technology Solutions That Scale
            </h2>
          </div>
          
          <div ref={sliderRef} className="keen-slider">
            {products.map((product) => (
              <div key={product.id} className="keen-slider__slide">
                <Card className="group relative border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden">
                  <CardContent className="relative p-8">
                    <div className="aspect-square relative overflow-hidden rounded-xl">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="mt-8">
                      <h3 className="font-semibold text-xl group-hover:text-secondary transition-colors duration-300 text-black">{product.name}</h3>
                      <p className="text-sm text-gray-600 mt-2 group-hover:text-secondary/80 transition-colors duration-300">{formatPrice(product.price)}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-40 sm:py-48 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                Our Expertise
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
              Built for Performance
            </h2>
          </div>
          
          <div className="mx-auto mt-24 max-w-2xl sm:mt-28 lg:mt-32 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="group relative">
                  <div className="relative flex flex-col p-8 rounded-xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <dt className="flex items-center gap-x-4 text-lg font-semibold leading-7 text-black">
                      <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                        {feature.icon && React.cloneElement(feature.icon, { className: "h-5 w-5 text-secondary" })}
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto group-hover:text-primary/80 transition-colors duration-300">{feature.description}</p>
                    </dd>
                  </div>
                </div>
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
    name: 'Modern Tech Stack',
    description: 'We use cutting-edge technologies like Next.js, React, Node.js, and cloud services to build scalable and performant applications.',
    icon: <Zap className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Expert Development',
    description: 'Our team of experienced developers delivers high-quality code with best practices, clean architecture, and comprehensive testing.',
    icon: <Cpu className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Reliable Support',
    description: 'We provide ongoing maintenance, updates, and technical support to ensure your applications run smoothly and securely.',
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
]