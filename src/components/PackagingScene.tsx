'use client'

import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, Float } from '@react-three/drei'
import { Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Egg from './Egg'
import * as THREE from 'three'

function PackageLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 3]} intensity={1.5} color="#FFF8F0" castShadow />
      <pointLight position={[-2, 3, 1]} intensity={0.6} color="#FFD700" />
      <pointLight position={[2, -1, 3]} intensity={0.4} color="#87CEEB" />
    </>
  )
}

function PackageBox() {
  return (
    <group>
      <mesh position={[0, -0.35, 0]} receiveShadow castShadow>
        <boxGeometry args={[1.6, 0.6, 1.2]} />
        <meshStandardMaterial color="#5B7B4A" roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.05, 0.61]} castShadow>
        <boxGeometry args={[1.4, 0.4, 0.02]} />
        <meshStandardMaterial color="#F8F4EF" />
      </mesh>
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1.6, 0.02, 1.2]} />
        <meshStandardMaterial color="#F8F4EF" />
      </mesh>
      <TextLabel position={[0, 0.35, 0]} text="ZioFarm" color="#C1694F" />
    </group>
  )
}

function TextLabel({ position, text, color }: { position: [number, number, number], text: string, color: string }) {
  return (
    <mesh position={position}>
      <planeGeometry args={[0.8, 0.15]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  )
}

function BrandingElements() {
  return (
    <group position={[0, 0.6, 0]}>
      <TextLabel position={[0, 0, 0.62]} text="Premium Organic" color="#5B7B4A" />
      <TextLabel position={[0, -0.15, 0.62]} text="Farm Fresh Eggs" color="#5B7B4A" />
    </group>
  )
}

function PackagingLine() {
  return (
    <group>
      <mesh position={[-3, -0.7, 0]}>
        <boxGeometry args={[2, 0.08, 0.8]} />
        <meshStandardMaterial color="#555" roughness={0.5} metalness={0.4} />
      </mesh>
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[2, 0.08, 0.8]} />
        <meshStandardMaterial color="#555" roughness={0.5} metalness={0.4} />
      </mesh>
      <mesh position={[3, -0.7, 0]}>
        <boxGeometry args={[2, 0.08, 0.8]} />
        <meshStandardMaterial color="#555" roughness={0.5} metalness={0.4} />
      </mesh>
    </group>
  )
}

export default function PackagingScene() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current?.querySelector('.section-label') as Element, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 },
        y: 30, opacity: 0,
      })
      gsap.from(textRef.current?.querySelector('.section-title') as Element, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', end: 'top 25%', scrub: 1 },
        y: 40, opacity: 0,
      })
      gsap.from(textRef.current?.querySelector('.section-desc') as Element, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'top 20%', scrub: 1 },
        y: 30, opacity: 0,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="scroll-section-3d relative"
      style={{ background: 'linear-gradient(180deg, #0F3460 0%, #F8F4EF 30%, #EDE5D8 60%, #F8F4EF 100%)' }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 40 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        style={{ position: 'sticky', top: 0, height: '100vh' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#F8F4EF']} />
          <PackageLights />
          <PackagingLine />
          <Float speed={2} rotationIntensity={0.05} floatIntensity={0.2}>
            <PackageBox />
          </Float>
          <BrandingElements />
          <Egg position={[0, 0, 0]} scale={0.5} color="#F5F0E1" roughness={0.1} clearcoat={0.4} floatAmplitude={0} />
          <ContactShadows position={[0, -0.65, 0]} opacity={0.15} scale={4} blur={2} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>

      <div ref={textRef} className="overlay-content" style={{ justifyContent: 'flex-end', paddingBottom: '8rem' }}>
        <p className="section-label" style={{ color: 'var(--terracotta)' }}>Scene 04 — Premium Packaging</p>
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          Wrapped In{' '}<span className="em">Excellence</span>
        </h2>
        <p className="section-desc">
          Each egg is carefully placed in our signature packaging, designed to preserve freshness and reflect our commitment to quality.
        </p>
      </div>
    </section>
  )
}
