/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\\hut.glb
*/

import React, { useRef } from 'react'
import { Canvas, useLoader, extend } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

import Effects from './Effects'

export default function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/hut2.glb");

    // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    //     'textures/PavingStones092_1K_Color.jpg',
    //     'textures/PavingStones092_1K_Displacement.jpg',
    //     'textures/PavingStones092_1K_Normal.jpg',
    //     'textures/PavingStones092_1K_Roughness.jpg',
    //     'textures/PavingStones092_1K_AmbientOcclusion.jpg',
    // ])
    // const colorMap = useLoader(TextureLoader, 'textures/PavingStones092_1K_Color.jpg')

    // const composer = new THREE.EffectComposer(renderer);

    // Add to mesh
    // <meshStandardMaterial map={colorMap} />
    /* <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
    /> */

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.SketchUp.geometry} material={materials['material.002']} scale={0.03}>
                <group position={[-60, 0, 60]}>
                    <mesh geometry={nodes.ID4004.geometry} material={materials['Mirror_02.002']} />
                    <mesh geometry={nodes.ID4004_1.geometry} material={materials['Translucent_Glass_Blue.002']} />
                </group>
                <mesh geometry={nodes.group_1.geometry} material={materials['Wood_Veneer_02.003']} position={[54, 0, -54]} />
                <mesh geometry={nodes.group_10.geometry} material={materials['material.002']} position={[-61, 38.04, -19.2]} />
                <mesh geometry={nodes.group_11.geometry} material={materials['material.002']} position={[-61, 15.73, 20.05]} />
                <mesh geometry={nodes.group_12.geometry} material={materials['material.002']} position={[-61, 8.86, -42.33]} />
                <mesh geometry={nodes.group_2.geometry} material={materials['Stone_Marble.003']} position={[-54, 0, -42]} />
                <mesh geometry={nodes.group_3.geometry} material={materials['Stone_Marble.003']} position={[-53.5, 24, -42]} />
                <mesh geometry={nodes.group_4.geometry} material={materials['Metal_Steel_Textured_White.003']} position={[-66, 90, 48]} />
                <mesh geometry={nodes.group_5.geometry} material={materials['Metal_Steel_Textured_White.003']} position={[-66, 90, 12]} />
                <mesh geometry={nodes.group_6.geometry} material={materials['Metal_Steel_Textured_White.003']} position={[30, 6, 66]} />
                <mesh geometry={nodes.group_7.geometry} material={materials['material.002']} position={[-61, 107.35, -55]} />
                <mesh geometry={nodes.group_8.geometry} material={materials['material.002']} position={[-61, 85.23, -37.94]} />
                <mesh geometry={nodes.group_9.geometry} material={materials['material.002']} position={[-61, 56.23, -48.82]} />
                <mesh geometry={nodes.instance_0.geometry} material={materials['Chris_Shirt.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0001.geometry} material={materials['Chris_Shirt.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0002.geometry} material={materials['Chris_Shoe.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0003.geometry} material={materials['Chris_Shirt.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0004.geometry} material={materials['Chris_Skin.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0005.geometry} material={materials['Chris_Shoe_Sole.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0006.geometry} material={materials['Chris_Shoe_Sole.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0007.geometry} material={materials['Chris_Skin.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0008.geometry} material={materials['Chris_Hair.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0009.geometry} material={materials['Chris_Shoe_Sole.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0010.geometry} material={materials['Chris_Hair.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0011.geometry} material={materials['Chris_Skin.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0012.geometry} material={materials['Chris_Shoe.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0013.geometry} material={materials['Chris_Pants.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
                <mesh geometry={nodes.instance_0014.geometry} material={materials['Chris_Skin.004']} position={[-41.5, 0, 46]} rotation={[Math.PI, -1.27, Math.PI]} />
            </mesh>
        </group>
    );
}

useGLTF.preload('/hut.glb')