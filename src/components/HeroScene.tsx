'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, Float, OrbitControls } from '@react-three/drei'
import { Suspense, useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Egg from './Egg'
import * as THREE from 'three'

function HeroLights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-3, 4, -2]} intensity={0.5} color="#FFE4B5" />
      <pointLight position={[0, -2, 3]} intensity={0.8} color="#FFF5E6" />
      <spotLight position={[0, 6, 0]} angle={0.5} penumbra={0.8} intensity={1.5} color="#FFF8F0" />
    </>
  )
}

function FloatingParticles({ count = 80 }: { count?: number }) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#D4C5A9"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

function FarmEnvironment() {
  const grassRef = useRef<THREE.Mesh>(null)
  const count = 200
  const positions = new Float32Array(count * 3)
  const scales = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 3 + Math.random() * 4
    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = -0.8
    positions[i * 3 + 2] = Math.sin(angle) * radius
    scales[i] = 0.1 + Math.random() * 0.3
  }

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <circleGeometry args={[6, 64]} />
        <meshStandardMaterial color="#5B7B4A" roughness={0.8} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute args={[positions, 3]} attach="attributes-position" />
          <bufferAttribute args={[scales, 1]} attach="attributes-size" />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#8FAF7F" sizeAttenuation transparent opacity={0.6} />
      </points>
    </group>
  )
}

export default function HeroScene() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom 40%', scrub: 1 },
        y: 60,
        opacity: 0,
      })
      gsap.to('.hero-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
        y: -80,
        opacity: 0,
      })
      gsap.to('.hero-scroll-indicator', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'bottom top', scrub: 1 },
        opacity: 0,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="scroll-section relative" style={{ height: '120vh', background: 'linear-gradient(180deg, #1a0e08 0%, #2C1810 50%, #3D5A30 100%)' }}>
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#1a0e08']} />
          <HeroLights />
          <FarmEnvironment />
          <FloatingParticles />
          <Egg
            position={[0, 0.5, 0]}
            scale={1.5}
            color="#F5F0E1"
            roughness={0.1}
            clearcoat={0.4}
            floatAmplitude={0.2}
            floatSpeed={0.8}
          />
          <ContactShadows position={[0, -0.9, 0]} opacity={0.4} scale={6} blur={2} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>

      <div className="overlay-content">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>ZioFarm</p>
        <h1 className="hero-title section-title" style={{ color: 'white', fontFamily: 'var(--font-playfair)' }}>
          From <span className="em">Farm</span> to{' '}
          <span className="em">Family</span>
        </h1>
        <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600 }}>
          Premium Organic Eggs Delivered With Uncompromising Quality
        </p>
        <div className="flex gap-4 mt-8" style={{ pointerEvents: 'auto' }}>
          <a href="#journey" className="btn btn-primary">Explore Journey</a>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>

      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
