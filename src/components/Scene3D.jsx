import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { wedding } from '../data.js'

const { photos } = wedding

const SCROLL_PAGES = 6

const scrollState = { current: 0 }

const lerp = (a, b, t) => a + (b - a) * t

function evalKeyframes(kfs, o) {
  if (o <= kfs[0].o) return kfs[0]
  const last = kfs[kfs.length - 1]
  if (o >= last.o) return last
  for (let i = 0; i < kfs.length - 1; i++) {
    const a = kfs[i]
    const b = kfs[i + 1]
    if (o >= a.o && o <= b.o) {
      const t = (o - a.o) / (b.o - a.o)
      const e = t * t * (3 - 2 * t)
      return {
        x: lerp(a.x, b.x, e),
        y: lerp(a.y, b.y, e),
        z: lerp(a.z, b.z, e),
        rx: lerp(a.rx, b.rx, e),
        ry: lerp(a.ry, b.ry, e),
        rz: lerp(a.rz, b.rz, e),
        s: lerp(a.s, b.s, e),
        opacity: lerp(a.o, b.o, e),
      }
    }
  }
  return last
}

const o = (t) => ({ x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0, s: 1, o: t })

function Card({ src, kfs, floatSeed }) {
  const group = useRef()
  const texture = useLoader(THREE.TextureLoader, src)

  const state = useMemo(
    () => ({
      pos: new THREE.Vector3(0, 0, 0),
      rot: new THREE.Euler(0, 0, 0),
      scale: 1,
      opacity: 1,
      target: null,
    }),
    [],
  )

  useMemo(() => {
    if (texture) texture.colorSpace = THREE.SRGBColorSpace
  }, [texture])

  useFrame((_, dt) => {
    const target = evalKeyframes(kfs, scrollState.current)

    state.pos.x = THREE.MathUtils.damp(state.pos.x, target.x, 4, dt)
    state.pos.y = THREE.MathUtils.damp(state.pos.y, target.y, 4, dt)
    state.pos.z = THREE.MathUtils.damp(state.pos.z, target.z, 4, dt)
    state.rot.x = THREE.MathUtils.damp(state.rot.x, target.rx, 4, dt)
    state.rot.y = THREE.MathUtils.damp(state.rot.y, target.ry, 4, dt)
    state.rot.z = THREE.MathUtils.damp(state.rot.z, target.rz, 4, dt)
    state.scale = THREE.MathUtils.damp(state.scale, target.s, 4, dt)
    state.opacity = THREE.MathUtils.damp(state.opacity, target.opacity, 4, dt)

    if (!group.current) return
    group.current.position.copy(state.pos)
    group.current.rotation.copy(state.rot)
    group.current.scale.setScalar(state.scale)

    const t = performance.now() * 0.001 + floatSeed
    const bob = Math.sin(t * 1.2) * 0.12
    const sway = Math.cos(t * 0.9) * 0.15
    group.current.position.x += sway
    group.current.position.y += bob

    group.current.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.opacity = state.opacity
      }
    })
  })

  return (
    <group ref={group}>
      <mesh>
        <planeGeometry args={[2.3, 2.95]} />
        <meshStandardMaterial color="#fdf7e8" roughness={0.7} transparent />
      </mesh>
      <mesh position={[0, 0.14, 0.012]}>
        <planeGeometry args={[1.9, 2.3]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
      <mesh position={[0, -1.3, 0.02]}>
        <boxGeometry args={[1.9, 0.05, 0.02]} />
        <meshStandardMaterial color="#e8b452" roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  )
}

function PointerRig({ children }) {
  const group = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((_, dt) => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      mouse.current.x * 0.28,
      3,
      dt,
    )
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -mouse.current.y * 0.16,
      3,
      dt,
    )
  })

  return <group ref={group}>{children}</group>
}

function CardGroup() {
  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight
      scrollState.current = Math.min(1, Math.max(0, window.scrollY / (vh * SCROLL_PAGES)))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const cards = [
    {
      src: photos[0],
      seed: 0,
      kfs: [
        { ...o(0), y: 0.15, ry: 1.15, o: 1 },
        { ...o(0.12), y: 0.1, o: 1 },
        { ...o(0.28), x: -3.4, y: 0.5, z: -0.6, ry: -0.35, rz: -0.05, s: 0.95, o: 1 },
        { ...o(0.45), x: -4, y: 0.8, z: -1.5, ry: -0.5, s: 0.85, o: 0 },
        { ...o(1), x: -4, y: 0.8, z: -1.5, ry: -0.5, s: 0.85, o: 0 },
      ],
    },
    {
      src: photos[1],
      seed: 2.1,
      kfs: [
        { ...o(0), y: 0.15, z: 0.55, ry: -1.15, o: 1 },
        { ...o(0.12), y: 0.1, o: 1 },
        { ...o(0.28), x: 3.4, y: 0.2, z: -0.6, ry: 0.35, rz: 0.05, s: 0.95, o: 1 },
        { ...o(0.45), x: 4, y: 0.4, z: -1.5, ry: 0.5, s: 0.85, o: 0 },
        { ...o(1), x: 4, y: 0.4, z: -1.5, ry: 0.5, s: 0.85, o: 0 },
      ],
    },
    {
      src: photos[2],
      seed: 4.3,
      kfs: [
        { ...o(0), y: 0.15, z: -1.3, ry: 0.6, s: 0.85, o: 1 },
        { ...o(0.12), y: -0.2, z: -1, ry: 0, s: 0.8, o: 1 },
        { ...o(0.28), y: 1.5, z: -2.2, ry: 0.2, s: 0.6, o: 0.85 },
        { ...o(0.45), y: 2.2, z: -3, ry: 0.25, s: 0.5, o: 0 },
        { ...o(1), y: 2.2, z: -3, ry: 0.25, s: 0.5, o: 0 },
      ],
    },
  ]

  return (
    <PointerRig>
      {cards.map((c, i) => (
        <Card key={i} src={c.src} kfs={c.kfs} floatSeed={c.seed} />
      ))}
    </PointerRig>
  )
}

export default function Scene3D() {
  return (
    <div className="scene3d" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#faf5ec']} />
        <ambientLight intensity={0.7} />
        <hemisphereLight skyColor={0xfaf5ec} groundColor={0xe5e0d5} intensity={0.5} />
        <directionalLight position={[4, 6, 5]} intensity={1.1} color="#fff3dc" />
        <directionalLight position={[-5, -3, 2]} intensity={0.4} color="#ffd9a0" />
        <pointLight position={[0, 2, 3]} intensity={0.9} color="#d4af37" />
        <Sparkles
          count={60}
          scale={[14, 7, 5]}
          size={2}
          speed={0.3}
          opacity={0.45}
          color="#d4af37"
          position={[0, 0.4, 0]}
        />
        <Sparkles
          count={40}
          scale={[12, 6, 4]}
          size={1.2}
          speed={0.2}
          opacity={0.3}
          color="#fff8ec"
          position={[0, -0.6, 0]}
        />
        <CardGroup />
      </Canvas>
    </div>
  )
}
