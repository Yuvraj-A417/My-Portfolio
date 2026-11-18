"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useAdaptiveQuality } from "@/hooks/useAdaptiveQuality";
import { useMouseVector } from "@/hooks/useMouseVector";
import type { ScrollProgressStore } from "@/hooks/useScrollProgress";

type CoreSceneProps = {
  scroll: ScrollProgressStore;
  /** Fixed progress to show instead of the live scroll position (mobile stack beat). */
  progressOverride: number | null;
  hoveredSkill: string | null;
  isActive: boolean;
};

/**
 * Scroll progress is read inside useFrame instead of being passed as a prop,
 * so scrolling never re-renders the React tree of the scene.
 */
type GetProgress = () => number;

type SceneChildProps = {
  getProgress: GetProgress;
  hoveredSkill: string | null;
  isActive: boolean;
};

const SCENE_STACK_LABELS = [
  { name: "C++", color: "#6aa7ff" },
  { name: "Python", color: "#ffd95a" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "React.js", color: "#61dafb" },
  { name: "Next.js", color: "#f3f7ff" },
  { name: "Node.js", color: "#5fa04e" },
  { name: "Spring Boot", color: "#6db33f" },
  { name: "PostgreSQL", color: "#4169e1" },
  { name: "Docker", color: "#2496ed" },
  { name: "Kubernetes", color: "#326ce5" },
  { name: "Codeforces", color: "#ff5c8a" },
  { name: "LeetCode", color: "#ffa116" }
] as const;

const CHIP_COUNT = 14;
const PILLAR_LAYERS = 9;
const RING_RADII = [2.7, 3.2, 3.75] as const;

function createStackLabelTexture(label: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = 320;
  const height = 96;

  canvas.width = width;
  canvas.height = height;

  if (context) {
    context.clearRect(0, 0, width, height);
    context.font = "800 30px Inter, -apple-system, BlinkMacSystemFont, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.shadowColor = "rgba(0, 255, 65, 0.4)";
    context.shadowBlur = 22;
    context.fillStyle = "rgba(0, 255, 65, 0.2)";
    context.fillText(label, width / 2, height / 2);
    context.shadowColor = "rgba(0, 114, 198, 0.82)";
    context.shadowBlur = 14;
    context.lineWidth = 5;
    context.strokeStyle = "rgba(3, 3, 3, 0.96)";
    context.strokeText(label, width / 2, height / 2);
    context.fillStyle = "#f6fbff";
    context.fillText(label, width / 2, height / 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;

  return texture;
}

export function CoreScene({ scroll, progressOverride, hoveredSkill, isActive }: CoreSceneProps) {
  const quality = useAdaptiveQuality();
  const overrideRef = useRef(progressOverride);
  overrideRef.current = progressOverride;
  const getProgress = useCallback(() => overrideRef.current ?? scroll.getScene(), [scroll]);

  return (
    <Canvas
      camera={{ position: [0, 0.2, quality.isCompact ? 8.4 : 7.2], fov: quality.isCompact ? 48 : 42 }}
      dpr={quality.dpr}
      frameloop={isActive ? "always" : "demand"}
      gl={{ antialias: !quality.isCompact, alpha: true, powerPreference: "high-performance" }}
      className="core-canvas"
    >
      <ScrollInvalidator scroll={scroll} progressOverride={progressOverride} />
      <color attach="background" args={["#030303"]} />
      <fog attach="fog" args={["#030303", 8, 18]} />
      <ambientLight intensity={quality.isCompact ? 0.42 : 0.36} />
      <pointLight position={[4, 3, 5]} color="#0072c6" intensity={quality.isCompact ? 20 : 32} />
      <pointLight position={[-3, -1.5, 3]} color="#00ff41" intensity={quality.isCompact ? 6 : 9} />
      <pointLight position={[0, 2.6, 3.8]} color="#ffffff" intensity={quality.isCompact ? 3 : 5} />
      <SceneRig getProgress={getProgress} hoveredSkill={hoveredSkill} isActive={isActive} segments={quality.segments} />
    </Canvas>
  );
}

/** With frameloop="demand", request exactly one frame per scroll update. */
function ScrollInvalidator({ scroll, progressOverride }: { scroll: ScrollProgressStore; progressOverride: number | null }) {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => scroll.subscribe(() => invalidate()), [scroll, invalidate]);
  useEffect(() => invalidate(), [progressOverride, invalidate]);

  return null;
}

function SceneRig({ getProgress, hoveredSkill, isActive, segments }: SceneChildProps & { segments: number }) {
  const group = useRef<THREE.Group>(null);
  const mouse = useMouseVector();
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const progress = getProgress();

    if (!isActive) {
      group.current.rotation.y = progress * Math.PI * 2.3;
      return;
    }

    const time = state.clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, progress * Math.PI * 2.3 + mouse.current.x * 0.08, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.18 + mouse.current.y * 0.05, 0.05);
    group.current.position.y = Math.sin(time * 0.45) * 0.08;
    group.current.scale.setScalar(viewport.width < 5 ? 0.72 : 1);
  });

  return (
    <group ref={group}>
      <BlueprintRings getProgress={getProgress} />
      <CoreShell getProgress={getProgress} hoveredSkill={hoveredSkill} isActive={isActive} segments={segments} />
      <OrbitingSkills getProgress={getProgress} hoveredSkill={hoveredSkill} isActive={isActive} />
      <DataPillar getProgress={getProgress} />
      <HologramViewport getProgress={getProgress} />
      <GridField getProgress={getProgress} />
    </group>
  );
}

function CoreShell({ getProgress, hoveredSkill, isActive, segments }: SceneChildProps & { segments: number }) {
  const shell = useRef<THREE.Mesh>(null);
  const shellMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const wireMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const core = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const chipRefs = useRef<(THREE.Mesh | null)[]>([]);
  const bloom = hoveredSkill ? 1.55 : 1;

  const chips = useMemo(
    () => Array.from({ length: CHIP_COUNT }, (_, index) => ({ index, angle: (index / CHIP_COUNT) * Math.PI * 2 })),
    []
  );

  useFrame((state) => {
    const progress = getProgress();
    const expansion = THREE.MathUtils.smoothstep(progress, 0.16, 0.56);
    const reassemble = THREE.MathUtils.smoothstep(progress, 0.9, 1);
    const explode = Math.sin(Math.min(1, expansion) * Math.PI);
    const finalScale = 1 + reassemble * 0.25;

    if (shellMaterial.current) shellMaterial.current.emissiveIntensity = 0.18 + explode * 0.32;
    if (wireMaterial.current) wireMaterial.current.emissiveIntensity = 0.38 + explode * 0.45;
    core.current?.scale.setScalar(0.32 + explode * 0.12);
    ringA.current?.scale.set(1.62 + explode * 0.7, 1.62 + explode * 0.7, 0.02);
    ringB.current?.scale.set(1.9 + explode * 0.45, 1.9 + explode * 0.45, 0.02);

    for (const { index, angle } of chips) {
      const chip = chipRefs.current[index];
      if (!chip) continue;
      const radius = 0.46 + explode * (0.88 + (index % 3) * 0.12);
      chip.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.7) * 0.24, Math.sin(angle) * radius);
      (chip.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.22 + explode * 0.9;
    }

    if (!isActive) return;

    const time = state.clock.elapsedTime;
    if (shell.current) {
      shell.current.rotation.z = time * 0.08;
      shell.current.scale.setScalar((1 + Math.sin(time * 1.4) * 0.018 + explode * 0.14) * finalScale);
    }
    if (ringA.current) {
      ringA.current.rotation.x = Math.PI / 2 + time * 0.17;
      ringA.current.rotation.z = time * 0.1;
    }
    if (ringB.current) {
      ringB.current.rotation.y = Math.PI / 2 + time * 0.12;
      ringB.current.rotation.x = time * 0.08;
    }
  });

  return (
    <group>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.22, segments]} />
        {/* Standard material instead of a transmission material, which needs an extra render pass every frame. */}
        <meshStandardMaterial
          ref={shellMaterial}
          color="#d9f0ff"
          emissive="#0072c6"
          metalness={0.16}
          roughness={0.09}
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh scale={1.236}>
        <icosahedronGeometry args={[1.22, 2]} />
        <meshStandardMaterial
          ref={wireMaterial}
          color="#d8ecff"
          emissive="#0072c6"
          metalness={0.82}
          roughness={0.16}
          wireframe
          transparent
          opacity={0.36}
        />
      </mesh>
      <mesh ref={core}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#d7efff"
          emissive="#0072c6"
          emissiveIntensity={1.45 * bloom}
          metalness={0.35}
          roughness={0.08}
          transparent
          opacity={0.58}
        />
      </mesh>
      <mesh ref={ringA}>
        <torusGeometry args={[1, 0.01, 16, 180]} />
        <meshStandardMaterial
          color="#d7f2ff"
          emissive="#0072c6"
          emissiveIntensity={2.35 * bloom}
          metalness={0.78}
          roughness={0.14}
          transparent
          opacity={0.94}
        />
      </mesh>
      <mesh ref={ringB}>
        <torusGeometry args={[1, 0.006, 16, 180]} />
        <meshStandardMaterial
          color="#d7ffe0"
          emissive="#00ff41"
          emissiveIntensity={1.35 * bloom}
          metalness={0.86}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
      {chips.map(({ index, angle }) => (
        <mesh
          key={index}
          ref={(mesh) => {
            chipRefs.current[index] = mesh;
          }}
          rotation={[0, angle, angle * 0.35]}
        >
          <boxGeometry args={[0.18, 0.035, 0.3]} />
          <meshStandardMaterial
            color={index % 2 ? "#0b1f2d" : "#0c1412"}
            emissive={index % 2 ? "#0072c6" : "#00ff41"}
            metalness={0.88}
            roughness={0.22}
          />
        </mesh>
      ))}
    </group>
  );
}

function OrbitingSkills({ getProgress, hoveredSkill, isActive }: SceneChildProps) {
  const group = useRef<THREE.Group>(null);
  const labelTextures = useMemo(
    () => SCENE_STACK_LABELS.map((skill) => ({ ...skill, texture: createStackLabelTexture(skill.name) })),
    []
  );

  useEffect(() => {
    return () => {
      labelTextures.forEach((skill) => skill.texture.dispose());
    };
  }, [labelTextures]);

  useFrame((state) => {
    if (!group.current) return;
    const progress = getProgress();
    const visible = isActive
      ? THREE.MathUtils.smoothstep(progress, 0.24, 0.38) * (1 - THREE.MathUtils.smoothstep(progress, 0.66, 0.76))
      : 0;

    if (isActive) {
      group.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
    group.current.scale.setScalar(visible);
    group.current.visible = visible > 0.01;
  });

  return (
    <group ref={group} scale={0} visible={false}>
      {labelTextures.map((skill, index) => {
        const angle = (index / labelTextures.length) * Math.PI * 2;
        const radius = 2.28 + (index % 2) * 0.34;
        const glow = hoveredSkill === skill.name ? 2.6 : 0.7;
        const labelWidth = Math.min(0.74, 0.28 + skill.name.length * 0.032);
        return (
          <group key={skill.name} position={[Math.cos(angle) * radius, Math.sin(index) * 0.54, Math.sin(angle) * radius]}>
            <mesh>
              <sphereGeometry args={[0.096, 12, 12]} />
              <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={glow} metalness={0.5} roughness={0.18} />
            </mesh>
            <sprite position={[0, -0.31, 0]} scale={[labelWidth, 0.24, 1]}>
              <spriteMaterial
                map={skill.texture}
                transparent
                depthWrite={false}
                depthTest={false}
                blending={THREE.AdditiveBlending}
                opacity={hoveredSkill === skill.name ? 0.34 : 0.18}
              />
            </sprite>
            <sprite position={[0, -0.31, 0.01]} scale={[labelWidth, 0.24, 1]}>
              <spriteMaterial map={skill.texture} transparent depthWrite={false} opacity={hoveredSkill === skill.name ? 1 : 0.92} />
            </sprite>
          </group>
        );
      })}
    </group>
  );
}

function DataPillar({ getProgress }: { getProgress: GetProgress }) {
  const group = useRef<THREE.Group>(null);
  const layerMaterials = useRef<(THREE.MeshStandardMaterial | null)[]>([]);
  const layers = useMemo(() => Array.from({ length: PILLAR_LAYERS }, (_, index) => index), []);

  useFrame(() => {
    if (!group.current) return;
    const progress = getProgress();
    const visible = THREE.MathUtils.smoothstep(progress, 0.64, 0.78) * (1 - THREE.MathUtils.smoothstep(progress, 0.82, 0.92));

    group.current.scale.setScalar(visible);
    // Skip drawing entirely while collapsed instead of rendering a zero-scale group.
    group.current.visible = visible > 0.001;
    for (const material of layerMaterials.current) {
      if (material) material.emissiveIntensity = 0.2 + visible * 0.8;
    }
  });

  return (
    <group ref={group} scale={0} visible={false}>
      {layers.map((index) => (
        <mesh key={index} position={[0, (index - 4) * 0.32, 0]} rotation={[0, index * 0.38, 0]}>
          <boxGeometry args={[1.75 - index * 0.055, 0.025, 1.75 - index * 0.055]} />
          <meshStandardMaterial
            ref={(material) => {
              layerMaterials.current[index] = material;
            }}
            color="#111820"
            emissive={index % 3 === 0 ? "#0072c6" : "#00ff41"}
            metalness={0.9}
            roughness={0.17}
            transparent
            opacity={0.78}
          />
        </mesh>
      ))}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3.4, 32]} />
        <meshStandardMaterial color="#c8f0ff" emissive="#0072c6" emissiveIntensity={1.6} />
      </mesh>
    </group>
  );
}

function HologramViewport({ getProgress }: { getProgress: GetProgress }) {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;
    const visible = THREE.MathUtils.smoothstep(getProgress(), 0.74, 0.91);

    group.current.scale.setScalar(visible);
    group.current.visible = visible > 0.001;
  });

  return (
    <group ref={group} position={[0, 0, -0.15]} scale={0} visible={false}>
      <mesh>
        <boxGeometry args={[2.9, 1.55, 0.04]} />
        <meshStandardMaterial color="#07121b" emissive="#0072c6" emissiveIntensity={0.35} metalness={0.7} roughness={0.12} transparent opacity={0.62} />
      </mesh>
      <mesh position={[0, 0, 0.04]}>
        <planeGeometry args={[2.64, 1.26, 16, 8]} />
        <meshBasicMaterial color="#00ff41" wireframe transparent opacity={0.24} />
      </mesh>
    </group>
  );
}

function BlueprintRings({ getProgress }: { getProgress: GetProgress }) {
  const group = useRef<THREE.Group>(null);
  const ringMaterials = useRef<(THREE.MeshBasicMaterial | null)[]>([]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

    const pulse = 0.25 + THREE.MathUtils.smoothstep(getProgress(), 0.1, 0.3) * 0.25;
    RING_RADII.forEach((_, index) => {
      const opacity = pulse / (index + 1.3);
      const line = ringMaterials.current[index * 2];
      const glow = ringMaterials.current[index * 2 + 1];
      if (line) line.opacity = opacity;
      if (glow) glow.opacity = opacity * 0.22;
    });
  });

  return (
    <group ref={group}>
      {RING_RADII.map((radius, index) => {
        const color = index === 1 ? "#00ff41" : "#0072c6";

        return (
          <group key={radius} rotation={[Math.PI / 2, 0, index * 0.2]} scale={[radius, radius, 0.01]}>
            <mesh>
              <torusGeometry args={[1, 0.0025, 8, 160]} />
              <meshBasicMaterial
                ref={(material) => {
                  ringMaterials.current[index * 2] = material;
                }}
                color={color}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                toneMapped={false}
              />
            </mesh>
            <mesh scale={[1.004, 1.004, 1]}>
              <torusGeometry args={[1, 0.009, 8, 160]} />
              <meshBasicMaterial
                ref={(material) => {
                  ringMaterials.current[index * 2 + 1] = material;
                }}
                color={color}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                toneMapped={false}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function GridField({ getProgress }: { getProgress: GetProgress }) {
  const material = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(() => {
    if (material.current) material.current.opacity = 0.16 + getProgress() * 0.1;
  });

  return (
    <group position={[0, -2.55, -1.4]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[16, 42, "#0072c6", "#12222c"]}>
        <meshBasicMaterial ref={material} attach="material" transparent />
      </gridHelper>
    </group>
  );
}
