/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\\hut.glb
*/
import { useRef, useState } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, SpotLight, useVideoTexture, useTexture } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { easing } from 'maath'
import { useSpring, animated, config } from '@react-spring/three'
// import * as THREE from 'three'
// import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import Effects from './Effects'



function VideoMaterial({ url }) {
    const texture = useVideoTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
    const texture = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}

function GarageDoor() {

}
// make it glow - insert in mesh
{/* <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[0, 0, 0]} /> */ }

export default function HutModel() {
    const group = useRef();
    const { nodes, materials } = useGLTF("./maxtower.glb");

    const spotlight_01 = useRef();
    const spotlight_02 = useRef();
    const light_inside = useRef();
    const garage_door = useRef();

    const [active, setActive] = useState(false);

    const { scale } = useSpring({
        scale: active ? 1 : 1,
        config: config.wobbly
    });

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        console.log(a)

        let decimals = a % 1

        if (!active && garage_door.current.position.y < 100) garage_door.current.position.y += decimals * .1;

        if (active && garage_door.current.position.y > 0) garage_door.current.position.y -= 2;
    });


    const toggle_light = (light_ref) => {
        // light_ref.current.distance = light_ref.current.intensity == 0 ? 0 : 0;
        light_ref.current.intensity = light_ref.current.intensity == 0 ? 1 : 0;
    }

    return (
        <group dispose={null}>
            <group scale={0.03}>
                <group position={[-44.06, 88.16, 6]}>
                    <group position={[48.68, -4, -2]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.instance_0.geometry} material={materials['material.002']} position={[-1.45, 0, -11.48]} />
                        <mesh geometry={nodes.instance_0001.geometry} material={materials['material.002']} position={[-1.45, 0, -11.48]} />
                        <mesh geometry={nodes.instance_0002.geometry} material={materials['material.002']} position={[-1.45, 0, -11.48]} />
                        <mesh geometry={nodes.instance_1.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                        <mesh geometry={nodes.instance_1001.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                        <mesh geometry={nodes.instance_1002.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                        <mesh geometry={nodes.instance_1003.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                        <mesh geometry={nodes.instance_1004.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                        <mesh geometry={nodes.instance_1005.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                        <mesh geometry={nodes.instance_1006.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                        <mesh geometry={nodes.instance_1007.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                        <mesh geometry={nodes.instance_1008.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                        <mesh geometry={nodes.instance_1009.geometry} material={materials['material.002']} position={[-0.02, 0, 0]} />
                    </group>
                    <group position={[48.06, 115.62, -77.55]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh geometry={nodes.instance_2.geometry} material={materials['material.002']} position={[-1.49, 0, -11.83]} />
                        <mesh geometry={nodes.instance_2001.geometry} material={materials['material.002']} position={[-1.49, 0, -11.83]} />
                        <mesh geometry={nodes.instance_2002.geometry} material={materials['material.002']} position={[-1.49, 0, -11.83]} />
                        <mesh geometry={nodes.instance_2003.geometry} material={materials['material.002']} position={[-1.49, 0, -11.83]} />
                        <mesh geometry={nodes.instance_2004.geometry} material={materials['material.002']} position={[-1.49, 0, -11.83]} />
                        <mesh geometry={nodes.instance_3.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3001.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3002.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3003.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3004.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3005.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3006.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3007.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3008.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3009.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3010.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3011.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3012.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                        <mesh geometry={nodes.instance_3013.geometry} material={materials['material.002']} position={[-0.37, 0, 0]} />
                    </group>
                    <group position={[-67.69, 213.34, -112]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.instance_4.geometry} material={materials['material.002']} position={[1.15, 0, -14.17]} />
                        <mesh geometry={nodes.instance_4001.geometry} material={materials['material.002']} position={[1.15, 0, -14.17]} />
                        <mesh geometry={nodes.instance_4002.geometry} material={materials['material.002']} position={[1.15, 0, -14.17]} />
                        <mesh geometry={nodes.instance_4003.geometry} material={materials['material.002']} position={[1.15, 0, -14.17]} />
                        <mesh geometry={nodes.instance_4004.geometry} material={materials['material.002']} position={[1.15, 0, -14.17]} />
                        <mesh geometry={nodes.instance_5.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5001.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5002.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5003.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5004.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5005.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5006.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5007.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5008.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5009.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5010.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5011.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5012.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5013.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5014.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5015.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                        <mesh geometry={nodes.instance_5016.geometry} material={materials['material.002']} position={[2.81, 0, 0]} />
                    </group>
                </group>
                <group position={[105.99, 144, -89.26]} rotation={[0, 0, -Math.PI]}>
                    <mesh geometry={nodes.group_14.geometry} material={materials['Color_M02.001']} />
                    <mesh geometry={nodes.group_14001.geometry} material={materials['Color_M02.001']} />
                    <mesh geometry={nodes.group_15.geometry} material={materials['Color_M01.001']} position={[1, 2, -1]} />
                    <mesh geometry={nodes.group_16.geometry} material={materials['Color_M01.001']} position={[57, 2, -1]} />
                    <mesh geometry={nodes.group_17.geometry} material={materials['Color_M01.001']} position={[57, 2, -21]} />
                    <mesh geometry={nodes.group_18.geometry} material={materials['Color_M01.001']} position={[1, 2, -21]} />
                    <mesh geometry={nodes.group_19.geometry} material={materials['Color_M02.001']} position={[0, 12, 0]} />
                    <mesh geometry={nodes.group_19001.geometry} material={materials['Color_M02.001']} position={[0, 12, 0]} />
                </group>
                <group position={[58.99, 144, -100.57]}>
                    <mesh geometry={nodes.group_21.geometry} material={materials['Color_M07.001']} position={[11, 0, 0]} />
                    <mesh geometry={nodes.group_22.geometry} material={materials['Color_M07.001']} position={[15, 1, -2]} />
                    <mesh geometry={nodes.group_23.geometry} material={materials['Color_M06.002']} position={[15, 3, 0]} />
                    <mesh geometry={nodes.group_23001.geometry} material={materials['Color_M06.002']} position={[15, 3, 0]} />
                </group>
                <group position={[92.24, 24, 112.24]} rotation={[-Math.PI, -1.57, 0]}>
                    <mesh geometry={nodes.group_25.geometry} material={materials.afternoon_2} position={[0, -8.81, 0]} />
                    <mesh geometry={nodes.group_26.geometry} material={materials.afternoon_5} position={[1, 2, -1]} />
                    <mesh geometry={nodes.group_27.geometry} material={materials.afternoon_5} position={[45, 2, -1]} />
                    <mesh geometry={nodes.group_28.geometry} material={materials.afternoon_5} position={[45, 2, -21]} />
                    <mesh geometry={nodes.group_29.geometry} material={materials.afternoon_5} position={[1, 2, -21]} />
                </group>
                <group position={[111.44, 32.81, 76.34]} rotation={[0, -1.57, 0]} scale={0.7}>
                    <mesh geometry={nodes.group_31.geometry} material={materials['Color_M07.001']} position={[11, 0, 0]} />
                    <mesh geometry={nodes.group_32.geometry} material={materials['Color_M07.001']} position={[15, 1, -2]} />
                    <mesh geometry={nodes.group_33.geometry} material={materials['Color_M06.002']} position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]} />
                    <mesh geometry={nodes.group_33001.geometry} material={materials['Color_M06.002']} position={[15, 3.21, 1.05]} rotation={[-0.11, 0, 0]} />
                </group>
                <group position={[91.91, 6, 22]}>
                    <mesh geometry={nodes.group_35.geometry} material={materials['Color_M08.002']} />
                    <mesh geometry={nodes.group_36.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                    <mesh geometry={nodes.group_36001.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                    <mesh geometry={nodes.group_36002.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                    <mesh geometry={nodes.group_36003.geometry} material={materials.afternoon_3} position={[2.99, 1, 1]} />
                    <mesh geometry={nodes.group_37.geometry} material={materials.afternoon_4} position={[1, 19.38, 0.32]} scale={0.32} />
                    <mesh geometry={nodes.group_37001.geometry} material={materials.afternoon_4} position={[1, 19.38, 0.32]} scale={0.32} />
                    <mesh geometry={nodes.group_37002.geometry} material={materials.afternoon_4} position={[1, 19.38, 0.32]} scale={0.32} />
                    <mesh geometry={nodes.group_37003.geometry} material={materials.afternoon_4} position={[1, 19.38, 0.32]} scale={0.32} />
                </group>
                <group position={[66, 126, -6]}>
                    <mesh geometry={nodes.group_5.geometry} material={materials['Color_M02.001']} />
                    <mesh geometry={nodes.group_6.geometry} material={materials._0020_Red} position={[2.88, 12.36, -2.88]} scale={[0.88, 0.44, 0.88]} />
                    <mesh geometry={nodes.group_7.geometry} material={materials['material.002']} position={[13.44, 17.64, -5.2]} />
                    <mesh geometry={nodes.instance_6.geometry} material={materials['material.002']} position={[4.23, 17.64, -22.04]} scale={[0.64, 0.64, 0.88]} />
                    <mesh geometry={nodes.instance_6001.geometry} material={materials['material.002']} position={[4.23, 17.64, -22.04]} scale={[0.64, 0.64, 0.88]} />
                    <mesh geometry={nodes.instance_6002.geometry} material={materials['material.002']} position={[4.23, 17.64, -22.04]} scale={[0.64, 0.64, 0.88]} />
                    <mesh geometry={nodes.instance_6003.geometry} material={materials['material.002']} position={[4.23, 17.64, -22.04]} scale={[0.64, 0.64, 0.88]} />
                    <mesh geometry={nodes.instance_6004.geometry} material={materials['material.002']} position={[4.23, 17.64, -22.04]} scale={[0.64, 0.64, 0.88]} />
                    <mesh geometry={nodes.instance_6005.geometry} material={materials['material.002']} position={[4.23, 17.64, -22.04]} scale={[0.64, 0.64, 0.88]} />
                    <mesh geometry={nodes.instance_6006.geometry} material={materials['material.002']} position={[4.23, 17.64, -22.04]} scale={[0.64, 0.64, 0.88]} />
                </group>
                <group position={[-37.36, 6, 15.54]}>
                    <mesh geometry={nodes.group_47.geometry} material={materials._0136_Charcoal} position={[-10.19, 34.92, -7.99]} rotation={[0, -1.57, 0]} scale={[2, 1.5, 1.32]} />
                    <mesh geometry={nodes.group_48.geometry} material={materials['material.002']} position={[7.01, 0, -1.78]} />
                    <mesh geometry={nodes.group_48001.geometry} material={materials['material.002']} position={[7.01, 0, -1.78]} />
                    <mesh geometry={nodes.group_49.geometry} material={materials['material.002']} position={[-0.99, 30.49, -1.78]} />
                    <mesh geometry={nodes.group_49001.geometry} material={materials['material.002']} position={[-0.99, 30.49, -1.78]} />
                    <mesh geometry={nodes.group_50.geometry} material={materials._0020_Red} position={[-9.65, 38.56, 0.2]} />
                </group>
                <group position={[-12, 6, 124]}>
                    <mesh geometry={nodes.group_53.geometry} material={materials.afternoon_5} />
                    <animated.mesh scale={scale} onClick={() => setActive(!active)} ref={garage_door}>

                        <mesh geometry={nodes.group_54.geometry} material={materials.afternoon_1} position={[0, 0, -62.01]} />

                        {/* <GarageDoor /> */}
                        <mesh geometry={nodes.group_55.geometry} material={materials.Translucent_Glass_Gray} position={[-.1, 3.98, -65.99]}>
                            <meshStandardMaterial transparent={true} opacity={0.8} />
                        </mesh>
                    </animated.mesh>

                </group>
                <group position={[6, 127, -6]}>
                    <mesh geometry={nodes.group_10.geometry} material={materials['_0124_Purple.001']} position={[0, 9, 0]} />
                    <mesh geometry={nodes.group_11.geometry} material={materials['_0124_Purple.001']} position={[0, 18, 0]} />
                    <mesh geometry={nodes.group_12.geometry} material={materials['_0124_Purple.001']} />
                </group>
                <mesh geometry={nodes.group_38.geometry} material={materials['Grass_Dark_Green.002']} position={[-120, 3, 120]} />
                <group position={[-120, 0, 120]}>
                    <mesh geometry={nodes.ID698001.geometry} material={materials['Groundcover_Wood_Mix.002']} />
                    <mesh geometry={nodes.ID698001_1.geometry} material={materials['Vegetation_Bark_Ponderosa.002']} />
                </group>
                <mesh geometry={nodes.group_40.geometry} material={materials['material.002']} position={[51.5, 43.36, 5]} />
                <mesh geometry={nodes.group_41.geometry} material={materials.afternoon_3} position={[0, 126, 0]} />
                <mesh geometry={nodes.group_42.geometry} material={materials.afternoon_2} position={[-12, 6, 0]} />
                <mesh geometry={nodes.group_43.geometry} material={materials.afternoon_4} position={[-114, 246, -114]} />
                <mesh geometry={nodes.group_44.geometry} material={materials._0133_Gray} position={[100.17, 32.91, 77.64]} rotation={[0, -1.57, 0]} />
                <mesh geometry={nodes.group_45.geometry} material={materials.afternoon_5} position={[95.12, 32.81, 104.24]} />
                <mesh geometry={nodes.group_51.geometry} material={materials._0129_WhiteSmoke} position={[-120, 0, 120]} />
                <mesh geometry={nodes.group_56.geometry} material={materials.afternoon_3} position={[28, 6, 118]} />
                <mesh geometry={nodes.group_8.geometry} material={materials.js} position={[95.29, 147.88, -99.64]} scale={0.62}>
                    <mesh geometry={nodes.instance_7.geometry} material={materials['Color_M07.001']} position={[17.37, 2.76, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.24, 0.24, 0.23]} />
                    <mesh geometry={nodes.instance_7001.geometry} material={materials['Color_M07.001']} position={[17.37, 2.76, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.24, 0.24, 0.23]} />
                </mesh>
                <mesh geometry={nodes.image_0.geometry} material={materials['material_0.002']} position={[51.5, 43.36, 5.2]} rotation={[Math.PI / 2, 0, 0]} scale={[0.04, 1, 0.04]} />
                <mesh geometry={nodes.instance_10.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10001.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10002.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10003.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10004.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10005.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10006.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10007.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10008.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10009.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10010.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10011.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_10012.geometry} material={materials['material.002']} position={[-85.19, 257.33, -4.83]} rotation={[1.31, 0.26, -Math.PI / 4]} scale={0.74} />
                <mesh geometry={nodes.instance_8.geometry} material={materials['Chris_Shirt.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8001.geometry} material={materials['Chris_Shirt.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8002.geometry} material={materials['Chris_Shoe.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8003.geometry} material={materials['Chris_Shirt.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8004.geometry} material={materials['Chris_Skin.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8005.geometry} material={materials['Chris_Shoe_Sole.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8006.geometry} material={materials['Chris_Shoe_Sole.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8007.geometry} material={materials['Chris_Skin.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8008.geometry} material={materials['Chris_Hair.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8009.geometry} material={materials['Chris_Shoe_Sole.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8010.geometry} material={materials['Chris_Hair.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8011.geometry} material={materials['Chris_Skin.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8012.geometry} material={materials['Chris_Shoe.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8013.geometry} material={materials['Chris_Pants.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_8014.geometry} material={materials['Chris_Skin.002']} position={[71.14, 6, 97.99]} rotation={[0, 0.52, 0]} />
                <mesh geometry={nodes.instance_9.geometry} material={materials['__auto_.002']} position={[45.61, 158.96, -103.22]} scale={0.3} />
                <mesh geometry={nodes.instance_9001.geometry} material={materials['__auto_.002']} position={[45.61, 158.96, -103.22]} scale={0.3} />
                <mesh geometry={nodes.instance_9002.geometry} material={materials['__auto_1.002']} position={[45.61, 158.96, -103.22]} scale={0.3} />
                <mesh geometry={nodes.instance_9003.geometry} material={materials['__auto_1.002']} position={[45.61, 158.96, -103.22]} scale={0.3} />
            </group>
        </group>
    );
}