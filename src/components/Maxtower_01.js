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



export default function HutModel() {

    const { nodes, materials } = useGLTF('/maxtower_01.glb')

    return (
        <group dispose={null}>
            <group scale={0.03}>
                <group position={[-110.17, 246, -2]}>
                    <group position={[80.07, 0.5, -5.76]}>
                        <group position={[6.1, 26.81, -11.98]}>
                            <group position={[7.37, 2.76, 0]} rotation={[0, 0, -2.99]} scale={1.66}>
                                <mesh geometry={nodes.group_15.geometry} material={materials.Chris_Shoe_Sole} position={[0, 0.25, 0]} />
                                <group position={[0, 0.25, 0]}>
                                    <mesh geometry={nodes.ID101.geometry} material={materials.Color_M06} />
                                    <mesh geometry={nodes.ID101_1.geometry} material={materials.Chris_Shoe_Sole} />
                                </group>
                                <mesh geometry={nodes.group_15002.geometry} material={materials.Chris_Shoe_Sole} position={[0, 0.25, 0]} />
                                <mesh geometry={nodes.group_15003.geometry} material={materials.Chris_Shoe_Sole} position={[0, 0.25, 0]} />
                                <mesh geometry={nodes.group_15004.geometry} material={materials.Chris_Shoe_Sole} position={[0, 0.25, 0]} />
                                <mesh geometry={nodes.group_15005.geometry} material={materials.Chris_Shoe_Sole} position={[0, 0.25, 0]} />
                            </group>
                            <mesh geometry={nodes.group_13.geometry} material={materials.Color_M07} position={[1.97, 1.54, -19.27]} scale={1.66} />
                            <mesh geometry={nodes.group_16.geometry} material={materials.Color_G06} position={[1.93, 1.54, -7.83]} scale={1.66} />
                            <mesh geometry={nodes.group_17.geometry} material={materials.Color_A05} position={[1.93, 1.54, -13.51]} scale={1.66} />
                            <mesh geometry={nodes.group_18.geometry} material={materials.Color_I04} position={[1.93, 1.54, -2.11]} scale={1.66} />
                            <mesh geometry={nodes.group_19.geometry} material={materials.noon1} position={[-2, -0.1, 3.73]} />
                        </group>
                        <group position={[2.35, 18, 0]} rotation={[-Math.PI, -1.57, 0]}>
                            <mesh geometry={nodes.group_3.geometry} material={materials.material} position={[0, -8.81, 0]} />
                            <mesh geometry={nodes.group_4.geometry} material={materials.material} position={[1, 2, -1]} />
                            <mesh geometry={nodes.group_5.geometry} material={materials.material} position={[45, 2, -1]} />
                            <mesh geometry={nodes.group_6.geometry} material={materials.material} position={[45, 2, -21]} />
                            <mesh geometry={nodes.group_7.geometry} material={materials.material} position={[1, 2, -21]} />
                        </group>
                        <group position={[0.37, 26.81, -48.36]} rotation={[0, -Math.PI / 6, 0]} scale={0.7}>
                            <mesh geometry={nodes.group_21.geometry} material={materials.Color_M06} position={[11, 0, 0]} />
                            <mesh geometry={nodes.group_22.geometry} material={materials.Color_M06} position={[15, 1, -2]} />
                            <mesh geometry={nodes.group_23.geometry} material={materials.Color_M06} position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]} />
                            <group position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]}>
                                <mesh geometry={nodes.ID189.geometry} material={materials.Color_M06} />
                                <mesh geometry={nodes.ID189_1.geometry} material={materials.Color_M09} />
                            </group>
                            <mesh geometry={nodes.group_23002.geometry} material={materials.Color_M06} position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]} />
                        </group>
                        <group position={[21.55, 26.81, -35.9]} rotation={[0, -1.57, 0]} scale={0.7}>
                            <mesh geometry={nodes.group_10.geometry} material={materials.Color_M06} position={[15, 1, -2]} />
                            <mesh geometry={nodes.group_11.geometry} material={materials.Color_M06} position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]} />
                            <group position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]}>
                                <mesh geometry={nodes.ID67.geometry} material={materials.Color_M06} />
                                <mesh geometry={nodes.ID67_1.geometry} material={materials.Color_M09} />
                            </group>
                            <mesh geometry={nodes.group_11002.geometry} material={materials.Color_M06} position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]} />
                            <mesh geometry={nodes.group_9.geometry} material={materials.Color_M06} position={[11, 0, 0]} />
                        </group>
                    </group>
                    <group position={[108.66, 0, -88.65]} rotation={[-Math.PI, 1.48, -Math.PI]}>
                        <mesh geometry={nodes.group_26.geometry} material={materials.noon_2} />
                        <mesh geometry={nodes.group_27.geometry} material={materials.noon_3} position={[3, 15.81, -0.35]} rotation={[-1.49, 0, 0]} />
                        <mesh geometry={nodes.group_27001.geometry} material={materials.material} position={[3, 15.81, -0.35]} rotation={[-1.49, 0, 0]} />
                        <mesh geometry={nodes.group_27002.geometry} material={materials.noon1} position={[3, 15.81, -0.35]} rotation={[-1.49, 0, 0]} />
                        <mesh geometry={nodes.group_27003.geometry} material={materials.noon1} position={[3, 15.81, -0.35]} rotation={[-1.49, 0, 0]} />
                    </group>
                    <group position={[0, 0, -3.57]}>
                        <group position={[23.87, 0, 0]} rotation={[0, 1.47, 0]}>
                            <mesh geometry={nodes.group_30.geometry} material={materials.noon1} />
                            <mesh geometry={nodes.group_31.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                            <mesh geometry={nodes.group_31001.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                            <mesh geometry={nodes.group_31002.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                            <mesh geometry={nodes.group_31003.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                            <mesh geometry={nodes.group_32.geometry} material={materials.afternoon_3} position={[1, 19.38, 0.32]} scale={0.32} />
                            <mesh geometry={nodes.group_32001.geometry} material={materials.afternoon_3} position={[1, 19.38, 0.32]} scale={0.32} />
                            <mesh geometry={nodes.group_32002.geometry} material={materials.afternoon_3} position={[1, 19.38, 0.32]} scale={0.32} />
                            <mesh geometry={nodes.group_32003.geometry} material={materials.afternoon_3} position={[1, 19.38, 0.32]} scale={0.32} />
                            <mesh geometry={nodes.group_33.geometry} material={materials.Sketchy_Siding_Straight} position={[2.01, 26.81, -2.01]} />
                        </group>
                        <mesh geometry={nodes.group_34.geometry} material={materials.Color_M08} position={[4.75, 30.81, -3.86]} />
                        <mesh geometry={nodes.group_34001.geometry} material={materials.Color_M08} position={[4.75, 30.81, -3.86]} />
                        <mesh geometry={nodes.group_35.geometry} material={materials.noon1} position={[4.75, 31.81, -3.86]} />
                        <mesh geometry={nodes.group_35001.geometry} material={materials.noon1} position={[4.75, 31.81, -3.86]} />
                        <group position={[4.75, 31.81, -3.86]}>
                            <mesh geometry={nodes.ID350.geometry} material={materials.noon1} />
                            <mesh geometry={nodes.ID350_1.geometry} material={materials.noon_5} />
                        </group>
                        <mesh geometry={nodes.group_36.geometry} material={materials.Color_M06} position={[17.54, 30.81, -18.96]} />
                        <mesh geometry={nodes.group_36001.geometry} material={materials.Color_M06} position={[17.54, 30.81, -18.96]} />
                        <mesh geometry={nodes.group_37.geometry} material={materials.material} position={[19.4, 31.06, -19.3]} />
                    </group>
                    <mesh geometry={nodes.group_24.geometry} material={materials.noon_5} position={[31.42, 0, 0]} />
                    <mesh geometry={nodes.group_38.geometry} material={materials.material} position={[-3.83, 25.69, -30.97]} />
                </group>
                <mesh geometry={nodes.group_39.geometry} material={materials.material} position={[-68.5, 283.36, -115]} />
                <mesh geometry={nodes.image_0.geometry} material={materials.material} position={[-68.5, 283.36, -114.8]} rotation={[Math.PI / 2, 0, 0]} scale={[0.04, 1, 0.04]} />
            </group>
        </group>
    );
}