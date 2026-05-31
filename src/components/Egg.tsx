'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshPhysicalMaterial, type Mesh } from 'three'
import * as THREE from 'three'

interface EggProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  color?: string
  roughness?: number
  metalness?: number
  clearcoat?: number
  floatAmplitude?: number
  floatSpeed?: number
  receiveShadow?: boolean
  castShadow?: boolean
}

export default function Egg({
  position = [0, 0, 0],
  rotation: initialRotation = [0, 0, 0],
  scale = 1,
  color = '#F5F0E1',
  roughness = 0.15,
  metalness = 0.05,
  clearcoat = 0.3,
  floatAmplitude = 0.15,
  floatSpeed = 1,
  receiveShadow = true,
  castShadow = true,
}: EggProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime * floatSpeed
    meshRef.current.position.y = position[1] + Math.sin(t) * floatAmplitude
    meshRef.current.rotation.x = initialRotation[0] + Math.sin(t * 0.5) * 0.05
    meshRef.current.rotation.z = initialRotation[2] + Math.cos(t * 0.7) * 0.03
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={initialRotation}
      scale={scale}
      castShadow={castShadow}
      receiveShadow={receiveShadow}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color={color}
        roughness={roughness}
        metalness={metalness}
        clearcoat={clearcoat}
        clearcoatRoughness={0.2}
        envMapIntensity={1.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
