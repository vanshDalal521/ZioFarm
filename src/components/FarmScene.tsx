'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows, Float } from '@react-three/drei'
import { Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Egg from './Egg'
import * as THREE from 'three'

function FarmLights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#FFE4C4" castShadow />
      <directionalLight position={[-2, 3, -3]} intensity={0.4} color="#87CEEB" />
      <hemisphereLight args={['#87CEEB', '#5B7B4A', 0.6]} />
    </>
  )
}

function GrassBlades({ count = 300 }) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 2 + Math.random() * 5
    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = -0.5 + Math.random() * 0.2
    positions[i * 3 + 2] = Math.sin(angle) * radius
    const green = 0.3 + Math.random() * 0.4
    colors[i * 3] = 0.2 + Math.random() * 0.2
    colors[i * 3 + 1] = green
    colors[i * 3 + 2] = 0.1 + Math.random() * 0.2
  }
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[colors, 3]} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial size={0.15} vertexColors sizeAttenuation transparent opacity={0.7} />
    </points>
  )
}

function Chickens() {
  const groupRef = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y = -0.3 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.04
      })
    }
  })

  const chickenPositions = [
    [-2.5, -0.3, -1.5], [1.8, -0.3, 2], [-1, -0.3, 2.5], [3, -0.3, -1], [-3.5, -0.3, 0.5]
  ]

  return (
    <group ref={groupRef}>
      {chickenPositions.map((pos, i) => (
        <group key={i} position={pos as [number, number, number]} rotation={[0, Math.random() * Math.PI * 2, 0]}>
          <mesh position={[0, 0.2, 0]} castShadow>
            <sphereGeometry args={[0.25, 12, 12]} />
            <meshStandardMaterial color="#F5F0E1" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.45, 0]} castShadow>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshStandardMaterial color="#F5F0E1" roughness={0.6} />
          </mesh>
          <mesh position={[0.15, 0.1, 0]} rotation={[0, 0, 0.3]}>
            <coneGeometry args={[0.02, 0.08, 4]} />
            <meshStandardMaterial color="#FF8C00" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function FencePosts() {
  const posts = [
    [-3, -0.5, -3], [0, -0.5, -3.5], [3, -0.5, -3],
    [-3.5, -0.5, 0], [3.5, -0.5, 0],
    [-3, -0.5, 3], [0, -0.5, 3.5], [3, -0.5, 3],
  ]
  return (
    <>
      {posts.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={[0.08, 0.8, 0.08]} />
          <meshStandardMaterial color="#8B7355" roughness={0.9} />
        </mesh>
      ))}
    </>
  )
}

function FarmGround() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.7, 0]} receiveShadow>
      <circleGeometry args={[8, 64]} />
      <meshStandardMaterial color="#5B7B4A" roughness={0.9} />
    </mesh>
  )
}

export default function FarmScene() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current?.querySelector('.section-label') as Element, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 },
        y: 30,
        opacity: 0,
      })
      gsap.from(textRef.current?.querySelector('.section-title') as Element, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', end: 'top 25%', scrub: 1 },
        y: 40,
        opacity: 0,
      })
      gsap.from(textRef.current?.querySelector('.section-desc') as Element, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'top 20%', scrub: 1 },
        y: 30,
        opacity: 0,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="scroll-section-3d relative"
      style={{ background: 'linear-gradient(180deg, #3D5A30 0%, #4A6B3A 30%, #5B7B4A 60%, #6B8B5A 100%)' }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 3, 6], fov: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1 }}
        style={{ position: 'sticky', top: 0, height: '100vh' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#87CEEB']} />
          <FarmLights />
          <FarmGround />
          <GrassBlades />
          <FencePosts />
          <Chickens />
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
            <Egg position={[0, 0.8, 0]} scale={1.2} color="#F5F0E1" roughness={0.12} clearcoat={0.3} floatAmplitude={0} />
          </Float>
          <ContactShadows position={[0, -0.6, 0]} opacity={0.3} scale={8} blur={2.5} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>

      <div ref={textRef} className="overlay-content" style={{ justifyContent: 'flex-end', paddingBottom: '8rem' }}>
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Scene 01 — Organic Poultry Farm</p>
        <h2 className="section-title" style={{ color: 'white' }}>
          Born Free,{' '}<span className="em">Raised Right</span>
        </h2>
        <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Our hens roam freely on lush green pastures, soaking in the Bengal sun and breathing pure air.
        </p>
      </div>
    </section>
  )
}
