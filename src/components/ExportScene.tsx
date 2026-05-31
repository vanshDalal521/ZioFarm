'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

function GlobeLights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 4, 3]} intensity={1.5} />
      <pointLight position={[0, 0, 2]} intensity={2} color="#00BFFF" />
    </>
  )
}

function Globe() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 48, 48]} />
      <meshStandardMaterial color="#1A5276" roughness={0.3} metalness={0.1} wireframe={false} />
      <mesh>
        <sphereGeometry args={[1.51, 48, 48]} />
        <meshBasicMaterial color="#2E86C1" transparent opacity={0.1} wireframe />
      </mesh>
    </mesh>
  )
}

function RouteLines() {
  const routes = [
    { from: [-0.8, 0.5, 1.2], to: [1.2, -0.3, 1] },
    { from: [0.5, 0.8, 1], to: [-1, -0.5, 1.2] },
    { from: [-0.3, -0.6, 1.4], to: [1.3, 0.6, 0.8] },
  ]

  return (
    <>
      {routes.map((route, i) => (
        <group key={i}>
          <mesh position={route.from as [number, number, number]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#00BFFF" />
          </mesh>
          <mesh position={route.to as [number, number, number]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#FFD700" />
          </mesh>
        </group>
      ))}
    </>
  )
}

function FloatingPackage() {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = 1.8 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2
      ref.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={ref}>
      <mesh castShadow>
        <boxGeometry args={[0.5, 0.3, 0.4]} />
        <meshStandardMaterial color="#5B7B4A" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.18, 0]} castShadow>
        <boxGeometry args={[0.4, 0.02, 0.3]} />
        <meshStandardMaterial color="#F8F4EF" />
      </mesh>
    </group>
  )
}

function ParticleTrails() {
  const count = 100
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 2 + Math.random() * 0.5
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.cos(phi)
    positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00BFFF" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

export default function ExportScene() {
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
      gsap.to('.export-particles', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 40%', end: 'bottom top', scrub: 1 },
        rotation: 360,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="scroll-section-3d relative"
      style={{ background: 'linear-gradient(180deg, #F8F4EF 0%, #0B132B 30%, #1A1A3E 60%, #0B132B 100%)' }}
    >
      <Canvas
        camera={{ position: [0, 1, 4], fov: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        style={{ position: 'sticky', top: 0, height: '100vh' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#0B132B']} />
          <GlobeLights />
          <Globe />
          <RouteLines />
          <FloatingPackage />
          <ParticleTrails />
          <Environment preset="night" />
        </Suspense>
      </Canvas>

      <div ref={textRef} className="overlay-content" style={{ justifyContent: 'flex-end', paddingBottom: '8rem' }}>
        <p className="section-label" style={{ color: '#00BFFF' }}>Scene 05 — Export & Logistics</p>
        <h2 className="section-title" style={{ color: 'white' }}>
          From Bengal,{' '}<span className="em">To The World</span>
        </h2>
        <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Our global supply chain delivers farm-fresh excellence across continents with precision logistics.
        </p>
      </div>
    </section>
  )
}
