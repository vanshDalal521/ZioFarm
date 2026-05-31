'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Egg from './Egg'
import * as THREE from 'three'

function BreakfastLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 3]} intensity={1.2} color="#FFF5E6" castShadow />
      <pointLight position={[-1, 2, 2]} intensity={0.8} color="#FFD700" />
      <pointLight position={[1, 1, 2]} intensity={0.6} color="#FFE4B5" />
      <spotLight position={[0, 4, 1]} angle={0.3} penumbra={0.5} intensity={1} color="#FFF8F0" />
    </>
  )
}

function Table() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
      <circleGeometry args={[2.5, 32]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
  )
}

function TableLegs() {
  const positions = [[-1.5, -0.9, -1.5], [1.5, -0.9, -1.5], [-1.5, -0.9, 1.5], [1.5, -0.9, 1.5]]
  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.04, 0.04, 0.6, 8]} />
          <meshStandardMaterial color="#8B6914" roughness={0.8} />
        </mesh>
      ))}
    </>
  )
}

function Plates() {
  return (
    <group position={[0, -0.45, 0]}>
      <mesh position={[-0.8, 0, 0.3]} receiveShadow>
        <cylinderGeometry args={[0.3, 0.25, 0.03, 24]} />
        <meshStandardMaterial color="white" roughness={0.3} />
      </mesh>
      <mesh position={[0.8, 0, -0.3]} receiveShadow>
        <cylinderGeometry args={[0.3, 0.25, 0.03, 24]} />
        <meshStandardMaterial color="white" roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0.6]} receiveShadow>
        <cylinderGeometry args={[0.35, 0.3, 0.03, 24]} />
        <meshStandardMaterial color="white" roughness={0.3} />
      </mesh>
    </group>
  )
}

function FriedEgg() {
  const groupRef = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[-0.8, -0.42, 0.3]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[0.15, 16]} />
        <meshStandardMaterial color="white" roughness={0.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[0.07, 16]} />
        <meshStandardMaterial color="#FFD700" roughness={0.1} emissive="#FFD700" emissiveIntensity={0.1} />
      </mesh>
    </group>
  )
}

function BreadSlice() {
  return (
    <group position={[0.8, -0.42, -0.3]}>
      <mesh>
        <boxGeometry args={[0.2, 0.03, 0.18]} />
        <meshStandardMaterial color="#D4A574" roughness={0.8} />
      </mesh>
    </group>
  )
}

function MilkGlass() {
  return (
    <group position={[0, -0.42, 0.6]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.08, 0.06, 0.2, 12]} />
        <meshPhysicalMaterial color="white" transparent opacity={0.6} roughness={0.1} clearcoat={0.5} />
      </mesh>
    </group>
  )
}

function FamilyFigures() {
  const members = [
    { pos: [-1.2, -0.3, 0.8], color: '#3D5A30', height: 0.6 },
    { pos: [1.2, -0.3, -0.5], color: '#C1694F', height: 0.55 },
    { pos: [-0.8, -0.3, -0.8], color: '#5B7B4A', height: 0.4 },
    { pos: [1.5, -0.3, 0.3], color: '#8FAF7F', height: 0.35 },
  ]

  return (
    <>
      {members.map((m, i) => (
        <group key={i} position={m.pos as [number, number, number]}>
          <mesh position={[0, m.height * 0.5, 0]} castShadow>
            <sphereGeometry args={[m.height * 0.2, 12, 12]} />
            <meshStandardMaterial color="#FFD5B8" />
          </mesh>
          <mesh position={[0, m.height * 0.2, 0]} castShadow>
            <cylinderGeometry args={[m.height * 0.15, m.height * 0.2, m.height * 0.4, 8]} />
            <meshStandardMaterial color={m.color} />
          </mesh>
        </group>
      ))}
    </>
  )
}

function WarmGlow() {
  return (
    <mesh position={[0, 0.5, 0.5]}>
      <planeGeometry args={[4, 3]} />
      <meshBasicMaterial color="#FFD700" transparent opacity={0.03} />
    </mesh>
  )
}

export default function BreakfastScene() {
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
      style={{ background: 'linear-gradient(180deg, #6B8B5A 0%, #F8F4EF 20%, #FFF8F0 50%, #F8F4EF 80%, #EDE5D8 100%)' }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 2, 3.5], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        style={{ position: 'sticky', top: 0, height: '100vh' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#FFF8F0']} />
          <BreakfastLights />
          <Table />
          <TableLegs />
          <Plates />
          <FriedEgg />
          <BreadSlice />
          <MilkGlass />
          <FamilyFigures />
          <WarmGlow />
          <ContactShadows position={[0, -0.55, 0]} opacity={0.15} scale={3} blur={2} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>

      <div ref={textRef} className="overlay-content" style={{ justifyContent: 'flex-end', paddingBottom: '8rem' }}>
        <p className="section-label" style={{ color: 'var(--terracotta)' }}>Scene 07 — Family Breakfast</p>
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          Goodness{' '}<span className="em">On Every Table</span>
        </h2>
        <p className="section-desc">
          Because family moments matter. Every ZioFarm egg brings nutrition, taste, and trust to your breakfast table.
        </p>
      </div>
    </section>
  )
}
