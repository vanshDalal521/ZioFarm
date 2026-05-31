'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Egg from './Egg'
import * as THREE from 'three'

function DeliveryLights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 6, 4]} intensity={1.2} color="#FFE4B5" castShadow />
      <pointLight position={[-2, 2, 1]} intensity={0.6} color="#FFD700" />
      <hemisphereLight args={['#87CEEB', '#5B7B4A', 0.4]} />
    </>
  )
}

function House() {
  return (
    <group position={[0, -0.5, 0]}>
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 1, 1.5]} />
        <meshStandardMaterial color="#F5F0E1" roughness={0.6} />
      </mesh>
      <mesh position={[0, 1.2, 0]} castShadow>
        <coneGeometry args={[1.5, 0.8, 4]} />
        <meshStandardMaterial color="#C1694F" roughness={0.7} />
      </mesh>
      <mesh position={[0.4, 0.5, 0.76]} castShadow>
        <planeGeometry args={[0.4, 0.4]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      <mesh position={[-0.4, 0.5, 0.76]} castShadow>
        <planeGeometry args={[0.3, 0.5]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.1, 0.76]}>
        <planeGeometry args={[0.15, 0.25]} />
        <meshStandardMaterial color="#5C4033" />
      </mesh>
    </group>
  )
}

function DeliveryPerson() {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
    }
  })

  return (
    <group ref={ref} position={[1.2, -0.3, 0]}>
      <mesh position={[0, 0.3, 0]} castShadow>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshStandardMaterial color="#FFD5B8" />
      </mesh>
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.2, 0.4, 8]} />
        <meshStandardMaterial color="#3D5A30" />
      </mesh>
      <mesh position={[0.2, 0.05, 0]} castShadow>
        <boxGeometry args={[0.15, 0.08, 0.1]} />
        <meshStandardMaterial color="#F8F4EF" />
      </mesh>
    </group>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]} receiveShadow>
      <circleGeometry args={[5, 32]} />
      <meshStandardMaterial color="#8BAA7A" roughness={0.9} />
    </mesh>
  )
}

function Path() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.5, -0.88, 0]}>
      <planeGeometry args={[1.5, 0.8]} />
      <meshStandardMaterial color="#C4A882" roughness={0.9} />
    </mesh>
  )
}

export default function DeliveryScene() {
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
      style={{ background: 'linear-gradient(180deg, #0B132B 0%, #87CEEB 20%, #B8E0F7 40%, #8BAA7A 70%, #6B8B5A 100%)' }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 4], fov: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        style={{ position: 'sticky', top: 0, height: '100vh' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#87CEEB']} />
          <DeliveryLights />
          <Ground />
          <Path />
          <House />
          <DeliveryPerson />
          <Egg position={[1.3, -0.2, 0.1]} scale={0.25} color="#F5F0E1" roughness={0.1} clearcoat={0.3} floatAmplitude={0} />
          <ContactShadows position={[0, -0.85, 0]} opacity={0.25} scale={5} blur={2} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>

      <div ref={textRef} className="overlay-content" style={{ justifyContent: 'flex-end', paddingBottom: '8rem' }}>
        <p className="section-label" style={{ color: 'var(--terracotta)' }}>Scene 06 — Home Delivery</p>
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          Freshness{' '}<span className="em">At Your Doorstep</span>
        </h2>
        <p className="section-desc">
          Our dedicated delivery network ensures your order arrives fresh, safe, and on time — every single time.
        </p>
      </div>
    </section>
  )
}
