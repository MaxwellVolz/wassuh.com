/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\\models\\maxtower_base\\maxtower_base.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/maxtower_base.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh geometry={nodes.group_0.geometry} material={materials['material.004']} position={[-120, 0, 120]} />
        <mesh geometry={nodes.group_1.geometry} material={materials['Color_G07.002']} position={[-120, 3, 120]} />
        <group position={[-120, 0, 120]}>
          <mesh geometry={nodes.ID22002.geometry} material={materials['Color_I05.002']} />
          <mesh geometry={nodes.ID22002_1.geometry} material={nodes.ID22002_1.material} />
        </group>
        <mesh geometry={nodes.group_3.geometry} material={materials['noon_5.002']} position={[27.965, 144.15, -13.34]} />
        <mesh geometry={nodes.group_4.geometry} material={materials['noon_5.002']} position={[85.22, 144.15, -70.595]} />
        <mesh geometry={nodes.group_5.geometry} material={materials['noon_5.002']} position={[-27.759, 273.309, -7.761]} rotation={[-Math.PI, -1.571, 0]} />
        <mesh geometry={nodes.group_6.geometry} material={materials['noon_5.002']} position={[36.54, 150.15, -55.05]} />
        <mesh geometry={nodes.group_7.geometry} material={materials['noon_5.002']} position={[0, 126, 0]} />
        <mesh geometry={nodes.group_8.geometry} material={materials['noon_5.002']} position={[-114, 246, 0]} />
        <mesh geometry={nodes.group_9.geometry} material={materials['noon_5.002']} position={[-86.568, 6, 120]} />
      </group>
    </group>
  )
}

useGLTF.preload('/maxtower_base.glb')