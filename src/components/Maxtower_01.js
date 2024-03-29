/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\\hut.glb
*/
import { useRef, Suspense } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { useGLTF, SpotLight, useVideoTexture, useTexture, useAspect } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { easing } from 'maath'
import { useSpring, animated, config } from '@react-spring/three'

// import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import Effects from './Effects'
import { Object3D } from 'three'; // Import Object3D class from Three.js



export default function HutModel() {
    const { nodes, materials } = useGLTF('/maxtower_01.glb')

    const spotlight_ref = useRef();
    const spotlightTarget = new Object3D();
    spotlightTarget.position.set(2, 0, -4); // Replace with your desired coordinates

    return (
        <group dispose={null}>
            <SpotLight
                ref={spotlight_ref}
                position={[-3.3, 10, -.4]}
                intensity={.8}
                angle={Math.PI / 7}
                penumbra={1}
                decay={1}
                distance={8}
                color="white"
                target={spotlightTarget} // Point the spotlight at the mesh_ref
            />
            <group scale={0.03}>
                <group position={[-110.17, 246, -2]}>
                    <group position={[80.07, 0.5, -5.76]}>
                        <group position={[0.37, 26.81, -48.36]} rotation={[0, -Math.PI / 6, 0]} scale={0.7}>
                            <mesh geometry={nodes.group_13.geometry} material={materials.Color_M06} position={[11, 0, 0]} />
                            <mesh geometry={nodes.group_14.geometry} material={materials.Color_M06} position={[15, 1, -2]} />
                            <mesh geometry={nodes.group_15.geometry} material={materials.Color_M06} position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]} />
                        </group>
                        <group position={[23.2, 26.81, -15.65]} rotation={[Math.PI, -Math.PI / 3, Math.PI]} scale={0.7}>
                            <mesh geometry={nodes.group_17.geometry} material={materials.Color_M06} position={[11, 0, 0]} />
                            <mesh geometry={nodes.group_18.geometry} material={materials.Color_M06} position={[15, 1, -2]} />
                            <mesh geometry={nodes.group_19.geometry} material={materials.Color_M06} position={[28.14, 18.12, -0.6]} rotation={[-0.09, 0.01, 1.57]} />
                        </group>
                        <group position={[2.35, 18, 0]} rotation={[-Math.PI, -1.57, 0]}>
                            <mesh geometry={nodes.group_3.geometry} material={materials.material} position={[0, -8.81, 0]} />
                            <mesh geometry={nodes.group_4.geometry} material={materials.material} position={[1, 2, -1]} />
                            <mesh geometry={nodes.group_5.geometry} material={materials.material} position={[45, 2, -1]} />
                            <mesh geometry={nodes.group_6.geometry} material={materials.material} position={[45, 2, -21]} />
                            <mesh geometry={nodes.group_7.geometry} material={materials.material} position={[1, 2, -21]} />
                        </group>
                        <group position={[6.1, 26.81, -11.98]}>
                            <mesh geometry={nodes.group_21.geometry} material={materials.noon1} position={[-2, -0.1, 3.73]} />
                        </group>
                        <group position={[21.55, 26.81, -35.9]} rotation={[0, -1.57, 0]} scale={0.7}>
                            <mesh geometry={nodes.group_10.geometry} material={materials.Color_M06} position={[15, 1, -2]} />
                            <mesh geometry={nodes.group_11.geometry} material={materials.Color_M06} position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]} />
                            <mesh geometry={nodes.group_9.geometry} material={materials.Color_M06} position={[11, 0, 0]} />
                        </group>
                    </group>
                    <group position={[108.66, 0, -88.65]} rotation={[-Math.PI, 1.48, -Math.PI]}>
                        <mesh geometry={nodes.group_24.geometry} material={materials.noon_2} />
                        <mesh geometry={nodes.group_25.geometry} material={materials.noon_3} position={[3, 15.81, -0.35]} rotation={[-1.49, 0, 0]} />
                        <mesh geometry={nodes.group_25001.geometry} material={materials.material} position={[3, 15.81, -0.35]} rotation={[-1.49, 0, 0]} />
                        <mesh geometry={nodes.group_25002.geometry} material={materials.noon1} position={[3, 15.81, -0.35]} rotation={[-1.49, 0, 0]} />
                        <mesh geometry={nodes.group_25003.geometry} material={materials.noon1} position={[3, 15.81, -0.35]} rotation={[-1.49, 0, 0]} />
                    </group>
                    <group position={[0, 0, -3.57]}>
                        <group position={[23.87, 0, 0]} rotation={[0, 1.47, 0]}>
                            <mesh geometry={nodes.group_28.geometry} material={materials.Black_Dots_4} />
                            <mesh geometry={nodes.group_29.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                            <mesh geometry={nodes.group_29001.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                            <mesh geometry={nodes.group_29002.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                            <mesh geometry={nodes.group_29003.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                            <mesh geometry={nodes.group_30.geometry} material={materials.afternoon_3} position={[1, 19.38, 0.32]} scale={0.32} />
                            <mesh geometry={nodes.group_30001.geometry} material={materials.afternoon_3} position={[1, 19.38, 0.32]} scale={0.32} />
                            <mesh geometry={nodes.group_30002.geometry} material={materials.afternoon_3} position={[1, 19.38, 0.32]} scale={0.32} />
                            <mesh geometry={nodes.group_30003.geometry} material={materials.afternoon_3} position={[1, 19.38, 0.32]} scale={0.32} />
                            <mesh geometry={nodes.group_31.geometry} material={materials.Sketchy_Siding_Straight} position={[2.01, 26.81, -2.01]} />
                        </group>
                        <mesh geometry={nodes.group_32.geometry} material={materials.Color_M08} position={[4.75, 30.81, -3.86]} />
                        <mesh geometry={nodes.group_32001.geometry} material={materials.Color_M08} position={[4.75, 30.81, -3.86]} />
                        <mesh geometry={nodes.group_33.geometry} material={materials.noon1} position={[4.75, 31.81, -3.86]} />
                        <mesh geometry={nodes.group_33001.geometry} material={materials.noon1} position={[4.75, 31.81, -3.86]} />
                        <group position={[4.75, 31.81, -3.86]}>
                            <mesh geometry={nodes.ID327.geometry} material={materials.noon1} />
                            <mesh geometry={nodes.ID327_1.geometry} material={materials.noon_5} />
                        </group>
                        <mesh geometry={nodes.group_34.geometry} material={materials.Color_M06} position={[17.54, 30.81, -18.96]} />
                        <mesh geometry={nodes.group_34001.geometry} material={materials.Color_M06} position={[17.54, 30.81, -18.96]} />
                        <mesh geometry={nodes.group_35.geometry} material={materials.material} position={[19.4, 31.06, -19.3]} />
                    </group>
                    <mesh geometry={nodes.group_22.geometry} material={materials.noon_5} position={[31.42, 0, 0]} />
                    <mesh geometry={nodes.group_36.geometry} material={materials.material} position={[-3.83, 25.69, -30.97]} />
                </group>
                <group position={[-35.33, 304.16, -110]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.instance_0.geometry} material={materials.noon_3} position={[-1.45, 0, -11.48]} />
                    <mesh geometry={nodes.instance_0001.geometry} material={materials.noon_3} position={[-1.45, 0, -11.48]} />
                    <mesh geometry={nodes.instance_0002.geometry} material={materials.noon_3} position={[-1.45, 0, -11.48]} />
                    <mesh geometry={nodes.instance_1.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1001.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1002.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1003.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1004.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1005.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1006.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1007.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1008.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1009.geometry} material={materials.noon_3} position={[-0.02, 0, 0]} />
                </group>
                <mesh geometry={nodes.group_37.geometry} material={materials.material} position={[-68.5, 283.36, -115]} />
                <mesh geometry={nodes.group_39.geometry} material={materials.noon1} position={[-114, 246, -110]} />
                <mesh geometry={nodes.image_0.geometry} material={materials.material} position={[-68.5, 283.36, -114.8]} rotation={[Math.PI / 2, 0, 0]} scale={[0.04, 1, 0.04]} />
            </group>
        </group>
    );
}
