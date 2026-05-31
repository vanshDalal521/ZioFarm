'use client'

import dynamic from 'next/dynamic'
import SmoothScroll from '@/lib/smooth-scroll'

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false })
const FarmScene = dynamic(() => import('@/components/FarmScene'), { ssr: false })
const CollectionScene = dynamic(() => import('@/components/CollectionScene'), { ssr: false })
const FactoryScene = dynamic(() => import('@/components/FactoryScene'), { ssr: false })
const PackagingScene = dynamic(() => import('@/components/PackagingScene'), { ssr: false })
const ExportScene = dynamic(() => import('@/components/ExportScene'), { ssr: false })
const DeliveryScene = dynamic(() => import('@/components/DeliveryScene'), { ssr: false })
const BreakfastScene = dynamic(() => import('@/components/BreakfastScene'), { ssr: false })
const FinalScene = dynamic(() => import('@/components/FinalScene'), { ssr: false })

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <HeroScene />
        <FarmScene />
        <CollectionScene />
        <FactoryScene />
        <PackagingScene />
        <ExportScene />
        <DeliveryScene />
        <BreakfastScene />
        <FinalScene />
      </main>
    </SmoothScroll>
  )
}
