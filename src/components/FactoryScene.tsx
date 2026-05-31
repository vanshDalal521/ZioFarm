'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows, Text } from '@react-three/drei'
import { Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Egg from './Egg'
import * as THREE from 'three'

function FactoryLights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 5, 3]} intensity={1.5} color="#E0F0FF" castShadow />
      <pointLight position={[-3, 4, 0]} intensity={2} color="#00BFFF" />
      <pointLight position={[3, 3, 2]} intensity={1.5} color="#FF69B4" />
      <pointLight position={[0, -1, 4]} intensity={0.8} color="#7CFC00" />
    </>
  )
}

function ConveyorSystem() {
  return (
    <group>
      <mesh position={[0, -0.8, 0]} receiveShadow>
        <boxGeometry args={[8, 0.1, 0.6]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.4} metalness={0.6} />
      </mesh>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[-3.8 + i * 0.4, -0.55, 0.3]}>
          <boxGeometry args={[0.3, 0.02, 0.02]} />
          <meshStandardMaterial color="#555" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  )
}

function ScanningRing() {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <mesh>
        <torusGeometry args={[1.2, 0.03, 16, 64]} />
        <meshStandardMaterial color="#00BFFF" emissive="#00BFFF" emissiveIntensity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.03, 16, 64]} />
        <meshStandardMaterial color="#00BFFF" emissive="#00BFFF" emissiveIntensity={0.3} />
      </mesh>
    </group>
  )
}

function QualityIndicators() {
  const indicators = [
    { label: 'High Protein', position: [-2.5, 1.8, 0], color: '#7CFC00' },
    { label: 'Rich Vitamins', position: [0, 2.2, 0], color: '#FFD700' },
    { label: 'Farm Fresh', position: [2.5, 1.8, 0], color: '#FF69B4' },
    { label: 'Export Quality', position: [0, -1.5, 1.5], color: '#00BFFF' },
  ]

  return (
    <>
      {indicators.map((ind, i) => (
        <group key={i} position={ind.position as [number, number, number]}>
          <mesh>
            <planeGeometry args={[1.8, 0.4]} />
            <meshBasicMaterial color={ind.color} transparent opacity={0.15} />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.12}
            color={ind.color}
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.woff"
          >
            {ind.label}
          </Text>
        </group>
      ))}
    </>
  )
}

function DataBars() {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        const bar = child as THREE.Mesh
        const scale = 0.3 + Math.sin(state.clock.elapsedTime * 0.5 + i * 1.5) * 0.15
        bar.scale.y = Math.max(0.1, scale)
      })
    }
  })

  return (
    <group ref={ref} position={[2.5, -0.2, 1.5]}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[i * 0.25 - 0.5, 0.1, 0]}>
          <boxGeometry args={[0.08, 0.4, 0.08]} />
          <meshStandardMaterial color="#00BFFF" emissive="#00BFFF" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

function FactoryFloor() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial color="#1A1A2E" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[-4, -0.5, 0]}>
        <boxGeometry args={[0.1, 1, 4]} />
        <meshStandardMaterial color="#2A2A3E" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[4, -0.5, 0]}>
        <boxGeometry args={[0.1, 1, 4]} />
        <meshStandardMaterial color="#2A2A3E" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  )
}

export default function FactoryScene() {
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
      style={{ background: 'linear-gradient(180deg, #C4B8A0 0%, #1A1A2E 30%, #16213E 60%, #0F3460 100%)' }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 2, 4], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.5 }}
        style={{ position: 'sticky', top: 0, height: '100vh' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#0F3460']} />
          <FactoryLights />
          <FactoryFloor />
          <ConveyorSystem />
          <ScanningRing />
          <QualityIndicators />
          <DataBars />
          <Egg position={[0, 0.2, 0]} scale={0.8} color="#F5F0E1" roughness={0.08} clearcoat={0.5} floatAmplitude={0} />
          <ContactShadows position={[0, -0.9, 0]} opacity={0.4} scale={6} blur={3} />
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>

      <div ref={textRef} className="overlay-content" style={{ justifyContent: 'flex-end', paddingBottom: '8rem' }}>
        <p className="section-label" style={{ color: '#00BFFF' }}>Scene 03 — Smart Processing Factory</p>
        <h2 className="section-title" style={{ color: 'white' }}>
          Precision{' '}<span className="em">Perfected</span>
        </h2>
        <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>
          AI-powered quality scanning ensures every egg meets our uncompromising standards.
        </p>
      </div>
    </section>
  )
}
