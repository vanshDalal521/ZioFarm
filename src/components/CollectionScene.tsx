'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Egg from './Egg'
import * as THREE from 'three'

function CollectionLights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 5, 4]} intensity={1.2} color="#FFF5E6" castShadow />
      <pointLight position={[0, 3, 0]} intensity={0.8} color="#FFD700" />
      <pointLight position={[-2, 1, 2]} intensity={0.5} color="#87CEEB" />
    </>
  )
}

function ConveyorBelt() {
  return (
    <group>
      <mesh position={[0, -0.4, 0]} receiveShadow>
        <boxGeometry args={[6, 0.15, 0.8]} />
        <meshStandardMaterial color="#4A4A4A" roughness={0.7} metalness={0.3} />
      </mesh>
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={i} position={[-2.5 + i * 0.5, -0.1, 0.4]} castShadow>
          <boxGeometry args={[0.02, 0.3, 0.02]} />
          <meshStandardMaterial color="#888" />
        </mesh>
      ))}
    </group>
  )
}

function CollectionBaskets() {
  const positions = [[-3.5, -0.3, 1.5], [-3.5, -0.3, -1.5], [3.5, -0.3, 1.5]]
  return (
    <>
      {positions.map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh position={[0, 0.2, 0]} castShadow>
            <cylinderGeometry args={[0.6, 0.5, 0.4, 16]} />
            <meshStandardMaterial color="#C4A882" roughness={0.9} />
          </mesh>
          {Array.from({ length: 3 }).map((_, j) => (
            <mesh key={j} position={[-0.2 + j * 0.2, 0.4, 0]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#F5F0E1" roughness={0.3} />
            </mesh>
          ))}
        </group>
      ))}
    </>
  )
}

function CollectionRoom() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#E8E0D0" roughness={0.8} />
      </mesh>
      <mesh position={[-4.5, 1.5, 0]}>
        <planeGeometry args={[0.1, 3]} />
        <meshStandardMaterial color="#D4C5A9" />
      </mesh>
      <mesh position={[4.5, 1.5, 0]}>
        <planeGeometry args={[0.1, 3]} />
        <meshStandardMaterial color="#D4C5A9" />
      </mesh>
    </group>
  )
}

function FloatingEggs() {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        child.position.y = -0.3 + Math.sin(state.clock.elapsedTime * 1.5 + i * 2) * 0.08
      })
    }
  })
  return (
    <group ref={ref}>
      <Egg position={[-1, 0.2, 0.5]} scale={0.4} color="#F5F0E1" roughness={0.15} clearcoat={0.3} floatAmplitude={0} />
      <Egg position={[0.5, 0.2, -0.3]} scale={0.35} color="#FFF5E6" roughness={0.12} clearcoat={0.2} floatAmplitude={0} />
      <Egg position={[1.8, 0.2, 0.6]} scale={0.3} color="#F0E8D0" roughness={0.2} clearcoat={0.25} floatAmplitude={0} />
    </group>
  )
}

export default function CollectionScene() {
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
      style={{ background: 'linear-gradient(180deg, #6B8B5A 0%, #E8E0D0 40%, #D4C5A9 70%, #C4B8A0 100%)' }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 2.5, 5], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1 }}
        style={{ position: 'sticky', top: 0, height: '100vh' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#E8E0D0']} />
          <CollectionLights />
          <CollectionRoom />
          <ConveyorBelt />
          <CollectionBaskets />
          <FloatingEggs />
          <Egg position={[0, 0.4, 0]} scale={0.9} color="#F5F0E1" roughness={0.1} clearcoat={0.35} floatAmplitude={0.1} />
          <ContactShadows position={[0, -0.55, 0]} opacity={0.2} scale={6} blur={2} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>

      <div ref={textRef} className="overlay-content" style={{ justifyContent: 'flex-end', paddingBottom: '8rem' }}>
        <p className="section-label" style={{ color: 'var(--terracotta)' }}>Scene 02 — Collection Center</p>
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          Hand-Picked{' '}<span className="em">With Care</span>
        </h2>
        <p className="section-desc">
          Each egg is gently collected by hand, inspected for quality, and placed with the utmost hygiene.
        </p>
      </div>
    </section>
  )
}
