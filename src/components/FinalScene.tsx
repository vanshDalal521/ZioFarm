'use client'

import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Egg from './Egg'
import * as THREE from 'three'

function FinalLights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 4, 3]} intensity={1.5} color="#FFF5E6" />
      <pointLight position={[0, 1, 2]} intensity={2} color="#FFD700" />
      <pointLight position={[-2, 3, 1]} intensity={0.8} color="#87CEEB" />
    </>
  )
}

function LogoText() {
  return (
    <group position={[0, 0, 0]}>
      <mesh position={[-0.5, 0.2, 0]}>
        <planeGeometry args={[0.02, 0.4]} />
        <meshBasicMaterial color="#5B7B4A" />
      </mesh>
      <mesh position={[0.5, 0.2, 0]}>
        <planeGeometry args={[0.02, 0.4]} />
        <meshBasicMaterial color="#5B7B4A" />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <planeGeometry args={[0.4, 0.02]} />
        <meshBasicMaterial color="#5B7B4A" />
      </mesh>
    </group>
  )
}

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.to(ref.current.material, {
      opacity: 0.6,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.8, 2, 64]} />
      <meshBasicMaterial color="#C1694F" transparent opacity={0.2} side={THREE.DoubleSide} />
    </mesh>
  )
}

function FloatingElements() {
  const ref = useRef<THREE.Group>(null)
  const count = 50
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#D4C5A9" transparent opacity={0.3} sizeAttenuation />
    </points>
  )
}

export default function FinalScene() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.final-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'center center', scrub: 1 },
        y: 60,
        opacity: 0,
      })
      gsap.from('.final-desc', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', end: 'center center', scrub: 1 },
        y: 40,
        opacity: 0,
      })
      gsap.from('.final-actions', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'center center', scrub: 1 },
        y: 30,
        opacity: 0,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="scroll-section relative"
      style={{ height: '120vh', background: 'linear-gradient(180deg, #EDE5D8 0%, #F8F4EF 30%, #FFF8F0 60%, #1a0e08 100%)' }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1 }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#F8F4EF']} />
          <FinalLights />
          <GlowRing />
          <LogoText />
          <Egg position={[0, 0.3, 0]} scale={1.8} color="#F5F0E1" roughness={0.08} clearcoat={0.5} floatAmplitude={0.15} floatSpeed={0.6} />
          <FloatingElements />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>

      <div className="overlay-content" style={{ justifyContent: 'flex-end', paddingBottom: '6rem' }}>
        <p className="section-label final-title" style={{ color: 'var(--terracotta)' }}>ZioFarm</p>
        <h2 className="section-title final-title" style={{ color: 'var(--text-dark)' }}>
          From Nature&apos;s Best{' '}
          <span className="em">To Your Family&apos;s Table</span>
        </h2>
        <p className="section-desc final-desc">
          Premium organic eggs, ethically farmed and delivered with uncompromising quality.
        </p>
        <div className="final-actions flex gap-4 mt-8 flex-wrap justify-center" style={{ pointerEvents: 'auto' }}>
          <a href="#contact" className="btn btn-primary">Contact Us</a>
          <a href="#contact" className="btn btn-outline" style={{ borderColor: 'var(--brown)', color: 'var(--text-dark)' }}>Become Distributor</a>
          <a href="#verticals" className="btn btn-outline" style={{ borderColor: 'var(--brown)', color: 'var(--text-dark)' }}>Explore Products</a>
        </div>
      </div>
    </section>
  )
}
