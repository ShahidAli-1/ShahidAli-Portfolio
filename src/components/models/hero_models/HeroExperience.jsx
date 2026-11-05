
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Line,
  OrbitControls,
  RoundedBox,
  Sparkles,
  Text,
} from "@react-three/drei";
import * as THREE from "three";

const colors = {
  blue: "#35C8FF",
  cyan: "#8AF5FF",
  purple: "#9B70FF",
  pink: "#E879F9",
  white: "#EAF7FF",
};

// Reusable code text
function CodeLine({ text, color = colors.white, position, size = 0.16 }) {
  return (
    <Text
      position={position}
      fontSize={size}
      color={color}
      anchorX="left"
      anchorY="middle"
      outlineWidth={0.002}
      outlineColor={color}
    >
      {text}
    </Text>
  );
}

// Main coding screen
function MainScreen() {
  const screenRef = useRef();

  useFrame((state) => {
    if (screenRef.current) {
      screenRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.7) * 0.035;
    }
  });

  return (
    <group ref={screenRef}>
      {/* Main monitor frame */}
      <RoundedBox
        args={[7.2, 4.8, 0.22]}
        radius={0.16}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#071426"
          metalness={0.85}
          roughness={0.2}
          emissive="#07345B"
          emissiveIntensity={0.45}
        />
      </RoundedBox>

      {/* Display */}
      <RoundedBox
        args={[6.94, 4.54, 0.035]}
        radius={0.09}
        position={[0, 0, 0.13]}
      >
        <meshBasicMaterial color="#080F1D" />
      </RoundedBox>

      {/* Top title bar */}
      <mesh position={[0, 2.12, 0.16]}>
        <boxGeometry args={[6.85, 0.34, 0.015]} />
        <meshBasicMaterial color="#111E31" />
      </mesh>

      <Text
        position={[-3.25, 2.12, 0.19]}
        fontSize={0.13}
        color="#8CAAC8"
        anchorX="left"
      >
        ●  ●  ●
      </Text>

      <Text position={[0, 2.12, 0.19]} fontSize={0.13} color="#D6E8FF">
        SHAHID-PORTFOLIO — Visual Studio Code
      </Text>

      {/* File explorer */}
      <mesh position={[-2.83, -0.02, 0.16]}>
        <boxGeometry args={[1.05, 3.75, 0.015]} />
        <meshBasicMaterial color="#0C192B" />
      </mesh>

      <Text
        position={[-3.28, 1.55, 0.2]}
        fontSize={0.12}
        color="#67C9FF"
        anchorX="left"
      >
        EXPLORER
      </Text>

      <CodeLine text="▼ PORTFOLIO" position={[-3.27, 1.2, 0.2]} color="#B5C9E5" size={0.12} />
      <CodeLine text="◇ src" position={[-3.12, 0.88, 0.2]} color="#78C9FF" size={0.12} />
      <CodeLine text="◇ components" position={[-3.0, 0.58, 0.2]} color="#A9B8D0" size={0.105} />
      <CodeLine text="◆ App.jsx" position={[-3.0, 0.28, 0.2]} color="#E8D47C" size={0.11} />
      <CodeLine text="◆ Home.cs" position={[-3.0, -0.02, 0.2]} color="#83D7A5" size={0.11} />
      <CodeLine text="◇ Models" position={[-3.12, -0.32, 0.2]} color="#A9B8D0" size={0.11} />
      <CodeLine text="◇ Controllers" position={[-3.12, -0.62, 0.2]} color="#A9B8D0" size={0.11} />
      <CodeLine text="◇ Database" position={[-3.12, -0.92, 0.2]} color="#A9B8D0" size={0.11} />

      {/* Main editor */}
      <mesh position={[0.58, 0.05, 0.17]}>
        <boxGeometry args={[5.6, 3.65, 0.012]} />
        <meshBasicMaterial color="#0A1526" />
      </mesh>

      <Text
        position={[-2.05, 1.55, 0.2]}
        fontSize={0.12}
        color="#72CFFF"
        anchorX="left"
      >
        HomeController.cs
      </Text>

      <CodeLine text="01  using Microsoft.AspNetCore.Mvc;" position={[-2.05, 1.15, 0.21]} color="#8D9FFF" size={0.135} />
      <CodeLine text="02  using System.Threading.Tasks;" position={[-2.05, 0.84, 0.21]} color="#8D9FFF" size={0.135} />
      <CodeLine text="03" position={[-2.05, 0.53, 0.21]} color="#71849E" size={0.13} />
      <CodeLine text="04  namespace Shahid.Portfolio" position={[-2.05, 0.22, 0.21]} color="#D88CFF" size={0.135} />
      <CodeLine text="05  {" position={[-2.05, -0.09, 0.21]} color="#F2D17D" size={0.135} />
      <CodeLine text="06    public class Developer" position={[-2.05, -0.40, 0.21]} color="#61D6C5" size={0.135} />
      <CodeLine text="07    {" position={[-2.05, -0.71, 0.21]} color="#F2D17D" size={0.135} />
      <CodeLine text="08      public string Name =" position={[-2.05, -1.02, 0.21]} color="#E6EDF7" size={0.135} />
      <CodeLine text='09        "Shahid Ali";' position={[-2.05, -1.33, 0.21]} color="#A8E6A3" size={0.135} />
      <CodeLine text="10    }" position={[-2.05, -1.64, 0.21]} color="#F2D17D" size={0.135} />

      {/* Bottom terminal */}
      <mesh position={[0.58, -1.91, 0.18]}>
        <boxGeometry args={[5.6, 0.43, 0.015]} />
        <meshBasicMaterial color="#101F32" />
      </mesh>

      <Text
        position={[-2.05, -1.83, 0.21]}
        fontSize={0.105}
        color="#5DDBA5"
        anchorX="left"
      >
        TERMINAL  &gt;  Build successful
      </Text>

      <Text
        position={[2.95, -1.83, 0.21]}
        fontSize={0.095}
        color="#65CFFF"
        anchorX="right"
      >
        ● RUNNING
      </Text>
    </group>
  );
}

// Blue vertical panel behind coding screen
function HolographicPlatform() {
  return (
    <group position={[0, 0, -0.65]}>
      {/* Main rectangular blue panel */}
      <RoundedBox
        args={[7.6, 5.2, 0.12]}
        radius={0.2}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#075A9C"
          emissive="#0876C9"
          emissiveIntensity={1.1}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Glowing outer border */}
      <RoundedBox
        args={[7.75, 5.35, 0.06]}
        radius={0.22}
        position={[0, 0, -0.08]}
      >
        <meshBasicMaterial
          color="#35C8FF"
          transparent
          opacity={0.55}
        />
      </RoundedBox>
    </group>
  );
}

// Technology nodes
function TechNode({ position, title, subtitle, color }) {
  const nodeRef = useRef();

  useFrame((state) => {
    if (nodeRef.current) {
      nodeRef.current.position.y =
        position[1] +
        Math.sin(state.clock.elapsedTime * 1.4 + position[0]) * 0.13;

      nodeRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.08;
    }
  });

  return (
    <group ref={nodeRef} position={position}>
      <mesh>
        <torusGeometry args={[0.58, 0.025, 12, 64]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.47, 32, 32]} />
        <meshStandardMaterial
          color="#10243E"
          emissive={color}
          emissiveIntensity={0.35}
          metalness={0.8}
          roughness={0.18}
          transparent
          opacity={0.85}
        />
      </mesh>

      <Text
        position={[0, 0.02, 0.49]}
        fontSize={title.length > 7 ? 0.14 : 0.19}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>

      <Text
        position={[0, -0.76, 0]}
        fontSize={0.12}
        color={color}
        anchorX="center"
      >
        {subtitle}
      </Text>

      <mesh position={[0, 0, 0.55]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
}

// Energy core
function EnergyCore() {
  const coreRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.7;
      coreRef.current.rotation.x = Math.sin(t * 0.5) * 0.25;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.45;
    }
  });

  return (
    <group position={[0, -2.65, 0.4]}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.43, 2]} />
        <meshStandardMaterial
          color="#5CEBFF"
          emissive="#168DFF"
          emissiveIntensity={2.5}
          metalness={0.7}
          roughness={0.15}
          wireframe
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color="#B7F8FF" />
      </mesh>

      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2, 0.3, 0]}>
          <torusGeometry args={[0.72, 0.018, 12, 100]} />
          <meshBasicMaterial color={colors.blue} />
        </mesh>

        <mesh rotation={[0.5, Math.PI / 3, 0]}>
          <torusGeometry args={[0.9, 0.012, 12, 100]} />
          <meshBasicMaterial color={colors.purple} />
        </mesh>
      </group>
    </group>
  );
}

// Hologram rings
function HologramRings() {
  const ringOne = useRef();
  const ringTwo = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (ringOne.current) ringOne.current.rotation.z = t * 0.12;
    if (ringTwo.current) ringTwo.current.rotation.y = t * 0.18;
  });

  return (
    <group position={[0, 0, -0.8]}>
      <mesh ref={ringOne} rotation={[0.25, 0.2, 0]}>
        <torusGeometry args={[4.2, 0.012, 8, 160]} />
        <meshBasicMaterial color="#176BAA" transparent opacity={0.65} />
      </mesh>

      <mesh ref={ringTwo} rotation={[1.15, 0.1, 0]}>
        <torusGeometry args={[4.55, 0.009, 8, 160]} />
        <meshBasicMaterial color="#7549C9" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

// Scanning beam
function ScanBeam() {
  const beam = useRef();

  useFrame((state) => {
    if (beam.current) {
      beam.current.position.y =
        1.65 - ((state.clock.elapsedTime * 0.65) % 3.3);
    }
  });

  return (
    <mesh ref={beam} position={[0, 1.65, 0.24]}>
      <boxGeometry args={[5.9, 0.018, 0.012]} />
      <meshBasicMaterial color="#55E7FF" transparent opacity={0.8} />
    </mesh>
  );
}

// Decorative frame
function HolographicFrame() {
  return (
    <group position={[0, 0, -0.9]}>
      <mesh>
        <torusGeometry args={[4.9, 0.012, 8, 160]} />
        <meshBasicMaterial color="#246BCA" transparent opacity={0.6} />
      </mesh>

      <mesh rotation={[0.25, 0.4, 0]}>
        <torusGeometry args={[5.2, 0.009, 8, 160]} />
        <meshBasicMaterial color="#9C5AFF" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

// Main developer environment
function DeveloperEnvironment() {
  const sceneRef = useRef();

  useFrame((state) => {
    if (!sceneRef.current) return;

    const targetX = state.pointer.x * 0.12;
    const targetY = state.pointer.y * 0.08;

    sceneRef.current.rotation.y = THREE.MathUtils.lerp(
      sceneRef.current.rotation.y,
      targetX,
      0.035
    );

    sceneRef.current.rotation.x = THREE.MathUtils.lerp(
      sceneRef.current.rotation.x,
      -targetY,
      0.035
    );
  });

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.65} color="#B4D8FF" />

      <pointLight position={[0, 3, 5]} intensity={45} color="#25BFFF" distance={15} />
      <pointLight position={[-6, 1, 1]} intensity={30} color="#7545FF" distance={12} />
      <pointLight position={[6, -2, 2]} intensity={28} color="#D34DFF" distance={12} />

      <spotLight
        position={[0, 7, 5]}
        intensity={35}
        angle={0.7}
        penumbra={1}
        color="#65DFFF"
      />

      {/* Render back panel before the monitor */}
      <HolographicPlatform />

      <MainScreen />

      <TechNode position={[-4.2, 1.65, 0.2]} title="C#" subtitle="LANGUAGE" color="#A78BFA" />
      <TechNode position={[4.2, 1.65, 0.2]} title=".NET" subtitle="BACKEND" color="#55C8FF" />
      <TechNode position={[-4.7, -0.15, 0.2]} title="SQL" subtitle="DATABASE" color="#65E6CE" />
      <TechNode position={[4.7, -0.15, 0.2]} title="REACT" subtitle="FRONTEND" color="#61DAFB" />
      <TechNode position={[-3.9, -2.0, 0.2]} title="JS" subtitle="JAVASCRIPT" color="#F5D76E" />
      <TechNode position={[3.9, -2.0, 0.2]} title="GIT" subtitle="VERSION CONTROL" color="#FF886B" />
      <TechNode position={[-1.8, -3.0, 0.2]} title="PYTHON" subtitle="PROGRAMMING" color="#65B8FF" />
      <TechNode position={[1.8, -3.0, 0.2]} title="HTML" subtitle="WEB DEVELOPMENT" color="#D58BFF" />

      <Line
        points={[[-3.15, 0.85, 0.05], [-2.2, 0.55, 0.05], [-1.8, 0.35, 0.05]]}
        color={colors.blue}
        lineWidth={1}
        transparent
        opacity={0.65}
      />

      <Line
        points={[[3.1, 0.75, 0.05], [2.2, 0.5, 0.05], [1.8, 0.3, 0.05]]}
        color={colors.purple}
        lineWidth={1}
        transparent
        opacity={0.65}
      />

      <Line
        points={[[-3.0, -1.1, 0.1], [-2.1, -0.75, 0.1], [-1.8, -0.65, 0.1]]}
        color={colors.pink}
        lineWidth={1}
        transparent
        opacity={0.6}
      />

      <Line
        points={[[3.0, -1.1, 0.1], [2.1, -0.75, 0.1], [1.8, -0.65, 0.1]]}
        color={colors.cyan}
        lineWidth={1}
        transparent
        opacity={0.6}
      />

      <EnergyCore />
      <HologramRings />
      <ScanBeam />
      <HolographicFrame />

      <Sparkles
        count={150}
        scale={[11, 8, 5]}
        size={2.4}
        speed={0.35}
        opacity={0.8}
        color="#76DFFF"
      />

      <Sparkles
        count={55}
        scale={[8, 6, 3]}
        size={4}
        speed={0.2}
        opacity={0.45}
        color="#A77AFF"
      />
    </group>
  );
}

// Main canvas
export default function HeroExperience() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 48 }}
      dpr={[1, 1.7]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#030817"]} />

      <DeveloperEnvironment />

      <OrbitControls
        makeDefault
        enableRotate
        enablePan={false}
        enableZoom={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.7}
      />
    </Canvas>
  );
}
