/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\\hut.glb
*/
import { useRef, Suspense } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { useGLTF, SpotLight, useVideoTexture, useTexture, useAspect } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { easing } from 'maath'

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


export default function HutModel() {
    const group = useRef();
    const { nodes, materials } = useGLTF("./hut8.glb");

    const spotlight_01 = useRef();
    const spotlight_02 = useRef();

    const toggle_light = (light_ref) => {
        // light_ref.current.distance = light_ref.current.intensity == 0 ? 0 : 0;

        light_ref.current.intensity = light_ref.current.intensity == 0 ? 1 : 0;
    }


    return (
        <group dispose={null}>
            <group scale={0.03}>
                <group position={[-55.67, 39.53, 20.51]} rotation={[0, -1.57, 0]}>
                    <mesh geometry={nodes.group_2.geometry} material={materials.material} />
                    <mesh geometry={nodes.group_2001.geometry} material={materials.material} />
                    <mesh geometry={nodes.group_3.geometry} material={materials.Color_M00} position={[1, 1, -1]} />
                </group>

                <group position={[-18.88, 148, 50.45]} rotation={[Math.PI, 1.57, 0]}>
                    <mesh geometry={nodes.group_12.geometry} material={materials.material} />
                    <mesh geometry={nodes.group_12001.geometry} material={materials.material} />
                    <mesh geometry={nodes.group_13.geometry} material={materials.material} position={[1, 24, -1]} />
                    <mesh geometry={nodes.group_14.geometry} material={materials.material} position={[1, 24, -33]} />
                    <mesh geometry={nodes.group_15.geometry} material={materials.material} position={[3, 1, -1]} />

                    <group position={[3.6, 12, -18]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[35, 22, 0]}>
                        <mesh scale={[1, 1, 0]}>
                            <planeGeometry />
                            <Suspense fallback={<FallbackMaterial url="10.jpg" />}>
                                <VideoMaterial url="ally.mp4" />
                            </Suspense>
                        </mesh>
                    </group>

                </group>
                <group position={[-63.67, 7.44, -61.55]} rotation={[0, -1.57, 0]}>
                    <group position={[0, 26.86, 0]}>
                        <mesh geometry={nodes.group_18.geometry} material={materials.material} position={[6, 3, 0]} rotation={[0, 1.57, 0]} />
                        <mesh geometry={nodes.group_19.geometry} material={materials.material} position={[6, 53.81, 0]} rotation={[0, 1.57, 0]} />
                        <mesh geometry={nodes.group_20.geometry} material={materials.material} position={[40.95, 17.41, 0]} rotation={[0, 1.57, 0]} />
                        <mesh geometry={nodes.group_21.geometry} material={materials.material} position={[116, 22.7, 0]} rotation={[0, 1.57, 0]} />
                        <mesh geometry={nodes.group_22.geometry} material={materials.material} position={[98.27, 53.81, 0]} rotation={[0, 1.57, 0]} />
                        <mesh geometry={nodes.group_23.geometry} material={materials.material} position={[58.01, 73.14, 0]} rotation={[0, 1.57, 0]} />
                        <mesh geometry={nodes.group_24.geometry} material={materials.material} position={[68.73, 29.53, 0]} rotation={[0, 1.57, 0]} />
                    </group>
                    <group position={[0, 0, -35.95]}>
                        <mesh geometry={nodes.group_26.geometry} material={materials.material} position={[0, 15.11, -53.27]} />
                        <mesh geometry={nodes.group_27.geometry} material={materials.material} position={[0, 8.28, -6]} />
                        <mesh geometry={nodes.group_28.geometry} material={materials.material} position={[0, 3, -81.05]} />
                        <mesh geometry={nodes.group_29.geometry} material={materials.material} position={[0, 99.91, -81.05]} />
                        <mesh geometry={nodes.group_30.geometry} material={materials.material} position={[0, 58.72, -63.99]} />
                        <mesh geometry={nodes.group_31.geometry} material={materials.material} position={[0, 39.4, -23.73]} />
                    </group>
                </group>

                {/* Billboard */}
                <group position={[40.31, 157.24, 50.05]} rotation={[Math.PI, 1.57, 0]} scale={[1.1, 1.33, 1.5]}>
                    <mesh geometry={nodes.group_34.geometry} material={materials.material} />
                    <mesh geometry={nodes.group_34001.geometry} material={materials.material} />
                    <mesh geometry={nodes.group_35.geometry} material={materials.material} position={[1, 24, -1]} />
                    <mesh geometry={nodes.group_36.geometry} material={materials.material} position={[1, 24, -33]} />
                    <mesh geometry={nodes.group_37.geometry} material={materials.material} position={[2.55, 23, -35]} rotation={[-Math.PI, 0, 0]} scale={[0.91, 0.75, 0.67]} />

                    <group position={[3.5, 12, -18]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[35, 22, 0]}>
                        <mesh scale={[1, 1, 0]}>
                            <planeGeometry />
                            <Suspense fallback={<FallbackMaterial url="10.jpg" />}>
                                <VideoMaterial url="world.mp4" />
                            </Suspense>
                        </mesh>
                    </group>
                </group>
                <group position={[-67.67, 6, -66.55]} rotation={[0, -1.57, 0]}>
                    <mesh geometry={nodes.group_39.geometry} material={materials.material} position={[1, 15.69, -1]} />
                    <mesh geometry={nodes.group_40.geometry} material={materials.material} position={[0, 84, -54]} />
                    <mesh geometry={nodes.group_41.geometry} material={materials.material} position={[96, 0, 0]} />
                    <mesh geometry={nodes.group_42.geometry} material={materials.material} position={[0, 84, -18]} />
                </group>

                {/* Spotlight Lamppost */}
                <group position={[42.58, 120, -59.48]} rotation={[0, -1.57, 0]}>
                    <SpotLight ref={spotlight_02} penumbra={1} distance={4} angle={0.8} anglePower={4} intensity={0} position={[5, 76, -1]}>

                    </SpotLight>
                    <mesh geometry={nodes.group_44.geometry} material={materials.material} position={[0, 72, 0]} />
                    <mesh geometry={nodes.group_45.geometry} material={materials.material} position={[2, 0, -8]} />
                </group>

                <group position={[62.1, 0, 150.01]} rotation={[0, -1.57, 0]} onClick={() => toggle_light(spotlight_01)}  >
                    <group position={[-5.47, 0, -23.07]} rotation={[Math.PI / 2, 0, 0.96]} scale={3}>

                        <mesh geometry={nodes.group_48.geometry} material={materials.Color_M08} />
                        <mesh geometry={nodes.group_49.geometry} material={materials.Color_A05} position={[0.5, 0.5, -2]} />
                        <mesh geometry={nodes.group_50.geometry} material={materials.Color_A05} position={[1, 1, -2.5]} />
                        <mesh geometry={nodes.group_50001.geometry} material={materials.Color_A05} position={[1, 1, -2.5]} />
                    </group>
                    <group position={[0, 0, -4.9]} rotation={[0, -0.96, 0]}>
                        <mesh geometry={nodes.group_52.geometry} material={materials.Wood_Veneer_02_0} />
                        <group position={[0, 84, 0]}>
                            <SpotLight ref={spotlight_01} penumbra={1} distance={0} angle={0.7} anglePower={4} intensity={1} position={[0, 0, 0]}>

                            </SpotLight>
                            <mesh geometry={nodes.ID482.geometry} material={materials.Translucent_Glass_Gold} />
                            <mesh geometry={nodes.ID482_1.geometry} material={materials.Translucent_Glass_Gray} />
                        </group>
                    </group>
                </group>

                <group position={[46.33, 0, -54.05]} rotation={[0, -1.57, 0]}>
                    <mesh geometry={nodes.group_6.geometry} material={materials.Color_C04} position={[0, 24, 6]} />
                    <mesh geometry={nodes.group_7.geometry} material={materials.Color_C04} position={[-0.5, 0, 6]}>
                        <mesh geometry={nodes.group_8.geometry} material={materials.Color_M02} position={[24.5, 24.5, -35]} />
                    </mesh>
                    <mesh geometry={nodes.group_7001.geometry} material={materials.Color_C04} position={[-0.5, 0, 6]} />
                </group>

                {/* Spotlight Button */}
                <group position={[58.33, 103, -55.55]} rotation={[0, -1.57, 0]} scale={3} onClick={() => toggle_light(spotlight_02)} >
                    <mesh geometry={nodes.group_58.geometry} material={materials.Color_M08} />
                    <mesh geometry={nodes.group_59.geometry} material={materials.Color_G03} position={[0.5, 0.5, -2]} />
                    <mesh geometry={nodes.group_60.geometry} material={materials.Color_G03} position={[1, 1, -2.5]} />
                    <mesh geometry={nodes.group_60001.geometry} material={materials.Color_G03} position={[1, 1, -2.5]} />
                </group>

                <group position={[-55.67, 0, 59.45]} >
                    <mesh geometry={nodes.group_64.geometry} material={materials.material} position={[108, 0, -6]} rotation={[0, -1.57, 0]} />
                    <mesh geometry={nodes.group_65.geometry} material={materials.material} position={[0, 82.03, -2]} rotation={[0, -1.57, 0]} />
                    <mesh geometry={nodes.group_66.geometry} material={materials.material} position={[0, 0, -4]} rotation={[0, -1.57, 0]} />
                    <mesh geometry={nodes.group_67.geometry} material={materials.material} position={[112, 82, -114]} rotation={[0, -1.57, 0]} />
                </group>

                {/* Python Text */}
                <group position={[63.43, 30.23, 51.54]} rotation={[Math.PI / 2, 0, -1.94]} scale={1.76}>
                    <mesh geometry={nodes.instance_0.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0001.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0002.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0003.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0004.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0005.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0006.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0007.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0008.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0009.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0010.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0011.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0012.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0013.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0014.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0015.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0016.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0017.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0018.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0019.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0020.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0021.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0022.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0023.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0024.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0025.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0026.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0027.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0028.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0029.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0030.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0031.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0032.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0033.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0034.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0035.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0036.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0037.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0038.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0039.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0040.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0041.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0042.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0043.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0044.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0045.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0046.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0047.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0048.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0049.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0050.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0051.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0052.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0053.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0054.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_0055.geometry} material={materials.material} position={[-0.02, 0, 0]} />
                    <mesh geometry={nodes.instance_1.geometry} material={materials.material} position={[-0.02, 0, -14.08]} />
                    <mesh geometry={nodes.instance_1001.geometry} material={materials.material} position={[-0.02, 0, -14.08]} />
                    <mesh geometry={nodes.instance_1002.geometry} material={materials.material} position={[-0.02, 0, -14.08]} />
                    <mesh geometry={nodes.instance_1003.geometry} material={materials.material} position={[-0.02, 0, -14.08]} />
                    <mesh geometry={nodes.instance_1004.geometry} material={materials.material} position={[-0.02, 0, -14.08]} />
                    <mesh geometry={nodes.instance_1005.geometry} material={materials.material} position={[-0.02, 0, -14.08]} />
                    <mesh geometry={nodes.instance_1006.geometry} material={materials.material} position={[-0.02, 0, -14.08]} />
                    <mesh geometry={nodes.instance_1007.geometry} material={materials.material} position={[-0.02, 0, -14.08]} />
                </group>

                {/* Javascript Text */}
                <group position={[51.32, 29.59, -0.37]} rotation={[Math.PI / 2, 0, -1.1]} scale={1.79}>
                    <mesh geometry={nodes.instance_2.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_2001.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_2002.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_2003.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_2004.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_2005.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_2006.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_2007.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_2008.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_2009.geometry} material={materials.material} position={[-0.17, 0, -14.95]} />
                    <mesh geometry={nodes.instance_3.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3001.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3002.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3003.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3004.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3005.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3006.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3007.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3008.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3009.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3010.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3011.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3012.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3013.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3014.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3015.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3016.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3017.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3018.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3019.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3020.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3021.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3022.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3023.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3024.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3025.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3026.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3027.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3028.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3029.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3030.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3031.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3032.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3033.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3034.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3035.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3036.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3037.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3038.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3039.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3040.geometry} material={materials.material} position={[4.22, 0, 0]} />
                    <mesh geometry={nodes.instance_3041.geometry} material={materials.material} position={[4.22, 0, 0]} />
                </group>

                <group position={[13.74, 43.6, -54.55]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={1.27}>
                    <mesh geometry={nodes.group_2002.geometry} material={materials.material} />
                    <mesh geometry={nodes.group_2003.geometry} material={materials.material} />
                    <mesh geometry={nodes.group_3001.geometry} material={materials.Color_M00} position={[1, 1, -1]} />
                </group>
                <group position={[-61.67, 0, -60.55]} rotation={[0, -1.57, 0]}>
                    <mesh geometry={nodes.ID4.geometry} material={materials.Color_M02} />
                    <mesh geometry={nodes.ID4_1.geometry} material={materials.Translucent_Glass_Blue} />
                </group>
                <group position={[-61.67, 0, -60.55]} rotation={[0, -1.57, 0]}>
                    <mesh geometry={nodes.ID14.geometry} material={materials.Translucent_Glass_Blue} />
                    <mesh geometry={nodes.ID14_1.geometry} material={materials.Color_I02} />
                </group>
                <group position={[-61.67, 0, -60.55]} rotation={[0, -1.57, 0]}>
                    <mesh geometry={nodes.ID22.geometry} material={materials.Color_M02} />
                    <mesh geometry={nodes.ID22_1.geometry} material={materials.Translucent_Glass_Blue} />
                </group>
                <mesh geometry={nodes.group_10.geometry} material={materials.material} position={[-49.67, 120, -50.11]} rotation={[0, -1.57, 0]} scale={[1, 0.6, 1]} />
                <mesh geometry={nodes.group_10001.geometry} material={materials.Wood_Veneer_02} position={[-49.67, 120, -50.11]} rotation={[0, -1.57, 0]} scale={[1, 0.6, 1]} />
                <mesh geometry={nodes.group_10002.geometry} material={materials.Color_C06} position={[-49.67, 120, -50.11]} rotation={[0, -1.57, 0]} scale={[1, 0.6, 1]} />
                <mesh geometry={nodes.group_10003.geometry} material={materials.material} position={[-49.67, 120, -50.11]} rotation={[0, -1.57, 0]} scale={[1, 0.6, 1]} />
                <group position={[-49.67, 120, -50.11]} rotation={[0, -1.57, 0]} scale={[1, 0.6, 1]}>
                    <mesh geometry={nodes.ID163.geometry} material={materials.Wood_Veneer_02} />
                    <mesh geometry={nodes.ID163_1.geometry} material={materials.Metal_Silver} />
                </group>
                <mesh geometry={nodes.group_10005.geometry} material={materials.Metal_Silver} position={[-49.67, 120, -50.11]} rotation={[0, -1.57, 0]} scale={[1, 0.6, 1]} />
                <mesh geometry={nodes.group_10006.geometry} material={materials.Metal_Silver} position={[-49.67, 120, -50.11]} rotation={[0, -1.57, 0]} scale={[1, 0.6, 1]} />
                <mesh geometry={nodes.group_10007.geometry} material={materials.Metal_Silver} position={[-49.67, 120, -50.11]} rotation={[0, -1.57, 0]} scale={[1, 0.6, 1]} />
                <mesh geometry={nodes.group_32.geometry} material={materials.material} position={[75.85, 18, -9.48]} rotation={[Math.PI, -1.43, 0]} />
                <mesh geometry={nodes.group_4.geometry} material={materials.material} position={[76.85, 18, 20.02]} rotation={[0, -1.49, Math.PI]} />
                <mesh geometry={nodes.group_54.geometry} material={materials.material} position={[-38.71, 47.69, -54.55]} rotation={[0, -1.57, 0]} />
                <mesh geometry={nodes.group_55.geometry} material={materials.material} position={[-54.67, 0, 15.45]} rotation={[0, -1.57, 0]} />
                <mesh geometry={nodes.group_56.geometry} material={materials.Color_D01} position={[58.33, 67.79, 53.87]} rotation={[0, -1.57, 0]} />
                <mesh geometry={nodes.group_61.geometry} material={materials.Color_M03} position={[58.43, 73.93, 56.39]} rotation={[0, -1.57, 0]} />
                <mesh geometry={nodes.group_61001.geometry} material={materials.Color_M03} position={[58.43, 73.93, 56.39]} rotation={[0, -1.57, 0]} />
                <mesh geometry={nodes.group_62.geometry} material={materials.material} position={[78.73, 18, 44.15]} rotation={[Math.PI, -1.43, 0]} />
                <mesh geometry={nodes.instance_4.geometry} material={materials.material} position={[58.33, 90.08, 58.01]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                <mesh geometry={nodes.instance_4001.geometry} material={materials.material} position={[58.33, 90.08, 58.01]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                <mesh geometry={nodes.instance_4002.geometry} material={materials.material} position={[58.33, 90.08, 58.01]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                <mesh geometry={nodes.instance_5.geometry} material={materials.Chris_Shirt} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5001.geometry} material={materials.Chris_Shirt} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5002.geometry} material={materials.Chris_Shoe} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5003.geometry} material={materials.Chris_Shirt} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5004.geometry} material={materials.Chris_Skin} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5005.geometry} material={materials.Chris_Shoe_Sole} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5006.geometry} material={materials.Chris_Shoe_Sole} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5007.geometry} material={materials.Chris_Skin} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5008.geometry} material={materials.Chris_Hair} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5009.geometry} material={materials.Chris_Shoe_Sole} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5010.geometry} material={materials.Chris_Hair} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5011.geometry} material={materials.Chris_Skin} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5012.geometry} material={materials.Chris_Shoe} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5013.geometry} material={materials.Chris_Pants} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_5014.geometry} material={materials.Chris_Skin} position={[-29.29, 0, -23.99]} rotation={[0, 0.98, 0]} />
                <mesh geometry={nodes.instance_6.geometry} material={materials.material} position={[19.8, 90, 59.45]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh geometry={nodes.instance_6001.geometry} material={materials.material} position={[19.8, 90, 59.45]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh geometry={nodes.instance_6002.geometry} material={materials.material} position={[19.8, 90, 59.45]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh geometry={nodes.instance_6003.geometry} material={materials.material} position={[19.8, 90, 59.45]} rotation={[Math.PI / 2, 0, 0]} />
            </group>
        </group >
    );
}
