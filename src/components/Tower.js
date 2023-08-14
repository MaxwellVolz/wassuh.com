/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\\models\\02-assets\\raybans.glb 
*/

import { useRef, Suspense, useState, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { useGLTF, SpotLight, useVideoTexture, useTexture, useAspect, ContactShadows, Bounds, useBounds, } from '@react-three/drei';
import { Object3D } from 'three'; // Import Object3D class from Three.js
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import * as THREE from 'three';

const RectAreaLight = ({
  debug,
  color,
  position,
  intensity,
  rotation,
  visible,
}) => {
  return (
    <>
      {debug ? <Plane position={position} rotation={rotation} /> : null}

      <rectAreaLight
        visible={visible}
        rotation={rotation}
        color={color}
        intensity={intensity}
        position={position}
      />
    </>
  );
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const greenMaterial = new THREE.MeshBasicMaterial({ color: 'limegreen' });
const redMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
const blackMaterial = new THREE.MeshBasicMaterial({ color: 'black' });

export default function Tower(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/main.glb')
  RectAreaLightUniformsLib.init();

  const [raybansDisplay, setRaybansDisplay] = useState(false);

  const spotlight_ref = useRef();
  const spotlightTarget = useRef();
  const terragraph_btn = useRef();
  const terrazed_btn = useRef();
  const rayban_btn = useRef();

  const rayban_stand = useRef();
  const rayban_stand001 = useRef();
  const rayban_stand002 = useRef();
  const rayban_stand003 = useRef();
  const rayban_stand004 = useRef();
  const rayban_stand005 = useRef();
  const rayban_stand006 = useRef();
  const rayban_stand007 = useRef();
  const rayban_stand008 = useRef();

  // Loop through all the rayban_stand Refs
  const raybanRefs = [
    rayban_stand,
    rayban_stand001,
    rayban_stand002,
    rayban_stand003,
    rayban_stand004,
    rayban_stand005,
    rayban_stand006,
    rayban_stand007,
    rayban_stand008
  ];

  // Custom hook to trigger every X seconds if raybansDisplay
  useInterval(() => {
    raybanRefs.forEach((raybanRef) => {
      if (raybanRef.current.material === redMaterial) {
        raybanRef.current.material = blackMaterial;
      }
      else {
        raybanRef.current.material = redMaterial;
      }
    });

  }, raybansDisplay ? 1000 : null);


  useFrame(({ clock }) => {
    if (raybansDisplay) {
      // Do something specific when raybansDisplay is true
      console.log('Raybans are displaying'); // Example action when raybansDisplay is true
    }

  })

  const toggle_raybans = (mesh) => {
    setRaybansDisplay((prevDisplay) => !prevDisplay);

    if (raybansDisplay) {
      mesh.material = greenMaterial;

      // Do something specific when raybansDisplay is true
      console.log('Raybans are displayed!'); // Example action when raybansDisplay is true
    }
    else {
      rayban_stand.current.material = rayban_stand002.current.material = rayban_stand004.current.material = rayban_stand006.current.material = rayban_stand008.current.material = redMaterial;

      mesh.material = redMaterial;
    }
  };



  const toggle_terragraph = (mesh) => {
    // window.open("https://github.com/MaxwellVolz")
    console.log("toggle_terragraph")

    if (mesh.material === greenMaterial) {
      mesh.material = redMaterial;
    } else {
      mesh.material = greenMaterial;
    }

  }


  return (
    <group {...props} dispose={null}>
      <group name="lights">
        <pointLight position={[30, 100, 20]} intensity={.1} />
        {/* <RectAreaLight position={[35, 60, 0]} intensity={5} color={"white"} /> */}
        {/* <RectAreaLight position={[44, 60, 0]} intensity={5} color={"white"} /> */}
        {/* <RectAreaLight position={[17, 70, -5]} intensity={3} color={"red"} /> */}

        {/* <RectAreaLight position={[17, 77, -6]} intensity={3} color={"white"} /> */}
        {/* <group rotation={[.2, 0, 0]}>
          <RectAreaLight position={[17, 77, -19]} intensity={3} color={"white"} />
        </group> */}
      </group>
      <group name="Scene">
        <Suspense fallback={null}>
          <Bounds fit clip observe damping={6} margin={1.2}>

            <SelectToZoom>
              <mesh name="Terragraph_Display" geometry={nodes.Terragraph_Display.geometry} material={nodes.Terragraph_Display.material} position={[17.007, 62, -13.073]} scale={[6, 1, 6]} />
              <mesh name="Terrazed_Display002" geometry={nodes.Terrazed_Display002.geometry} material={materials['Material.014']} position={[17.007, 62, -30.256]} scale={[6, 1, 6]} />
              <mesh name="Rayban_Display001" geometry={nodes.Rayban_Display001.geometry} material={materials['Material.014']} position={[17.007, 62, -47.462]} scale={[6, 1, 6]} />


              <mesh name="base_floor" geometry={nodes.base_floor.geometry} material={nodes.base_floor.material} scale={[60, 1, 60]} />
              <mesh name="base_backwall" geometry={nodes.base_backwall.geometry} material={nodes.base_backwall.material} position={[0, 61, -59]} scale={[60, 60, 1]} />
              <mesh name="base_01" geometry={nodes.base_01.geometry} material={nodes.base_01.material} position={[30, 31, -30]} scale={30} />
              <mesh name="base_01_1" geometry={nodes.base_01_1.geometry} material={materials.Color_M07} position={[-30, 31, -30]} scale={30} />
              <mesh name="base_02" geometry={nodes.base_02.geometry} material={nodes.base_02.material} position={[-1, 90, -29]} rotation={[0, Math.PI / 2, 0]} scale={[29, 29, 1]} />
              <mesh name="base_02_1" geometry={nodes.base_02_1.geometry} material={nodes.base_02_1.material} position={[-31, 90, -1]} scale={[29, 29, 1]} />
              <mesh name="base_03" geometry={nodes.base_03.geometry} material={nodes.base_03.material} position={[-1, 120, 0]} scale={[59.016, 1, 60]} />
              <mesh name="base_03_1" geometry={nodes.base_03_1.geometry} material={nodes.base_03_1.material} position={[-30.5, 150, -59]} scale={[29.5, 29, 1]} />
              <mesh name="base_03_2" geometry={nodes.base_03_2.geometry} material={nodes.base_03_2.material} position={[-59, 150, -29]} rotation={[0, Math.PI / 2, 0]} scale={[29, 29, 1]} />
            </SelectToZoom>
          </Bounds>
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -35, 0]} opacity={0.2} width={200} height={200} blur={1} far={50} />
        </Suspense>

        <mesh ref={terragraph_btn} onClick={() => toggle_terragraph(terragraph_btn.current)} name="Terragraph_btn" geometry={nodes.Terragraph_btn.geometry} material={greenMaterial} position={[27.336, 77.011, -18.853]} rotation={[Math.PI / 2, 0.777, -Math.PI / 2]} />
        <mesh ref={terrazed_btn} onClick={() => toggle_terragraph(terrazed_btn.current)} name="Terrazed_btn001" geometry={nodes.Terrazed_btn001.geometry} material={greenMaterial} position={[27.336, 77.011, -36.036]} rotation={[Math.PI / 2, 0.777, -Math.PI / 2]} />
        <mesh ref={rayban_btn} onClick={() => toggle_raybans(rayban_btn.current)} name="Rayban_btn002" geometry={nodes.Rayban_btn002.geometry} material={greenMaterial} position={[27.336, 77.011, -53.242]} rotation={[Math.PI / 2, 0.777, -Math.PI / 2]} />

        <mesh ref={rayban_stand} name="rayban_stand" geometry={nodes.rayban_stand.geometry} material={materials['SVGMat.003']} position={[28.297, 78.517, -27.069]} rotation={[0, Math.PI / 2, 0]} scale={104.388} />
        <mesh ref={rayban_stand001} name="rayban_stand001" geometry={nodes.rayban_stand001.geometry} material={materials['SVGMat.003']} position={[28.297, 78.517, -27.069]} rotation={[0, Math.PI / 2, 0]} scale={104.388} />
        <mesh ref={rayban_stand002} name="rayban_stand002" geometry={nodes.rayban_stand002.geometry} material={materials['SVGMat.003']} position={[28.297, 78.517, -27.069]} rotation={[0, Math.PI / 2, 0]} scale={104.388} />
        <mesh ref={rayban_stand003} name="rayban_stand003" geometry={nodes.rayban_stand003.geometry} material={materials['SVGMat.003']} position={[28.297, 78.517, -27.069]} rotation={[0, Math.PI / 2, 0]} scale={104.388} />
        <mesh ref={rayban_stand004} name="rayban_stand004" geometry={nodes.rayban_stand004.geometry} material={materials['SVGMat.003']} position={[28.297, 78.517, -27.069]} rotation={[0, Math.PI / 2, 0]} scale={104.388} />
        <mesh ref={rayban_stand005} name="rayban_stand005" geometry={nodes.rayban_stand005.geometry} material={materials['SVGMat.003']} position={[28.297, 78.517, -27.069]} rotation={[0, Math.PI / 2, 0]} scale={104.388} />
        <mesh ref={rayban_stand006} name="rayban_stand006" geometry={nodes.rayban_stand006.geometry} material={materials['SVGMat.003']} position={[28.297, 78.517, -27.069]} rotation={[0, Math.PI / 2, 0]} scale={104.388} />
        <mesh ref={rayban_stand007} name="rayban_stand007" geometry={nodes.rayban_stand007.geometry} material={materials['SVGMat.003']} position={[28.297, 78.517, -27.069]} rotation={[0, Math.PI / 2, 0]} scale={104.388} />
        <mesh ref={rayban_stand008} name="rayban_stand008" geometry={nodes.rayban_stand008.geometry} material={materials['SVGMat.003']} position={[28.297, 78.517, -27.069]} rotation={[0, Math.PI / 2, 0]} scale={104.388} />

        {/* new model needs merging */}
        <mesh name="base_floor" geometry={nodes.base_floor.geometry} material={materials['5_human']} scale={[60, 1, 60]} />
        <mesh name="base_backwall" geometry={nodes.base_backwall.geometry} material={materials['04_yellow']} position={[0, 61, -59]} scale={[60, 60, 1]} />
        <mesh name="base_01" geometry={nodes.base_01.geometry} material={materials['03_dark']} position={[30, 31, -30]} scale={30} />
        <mesh name="base_01_1" geometry={nodes.base_01_1.geometry} material={materials['03_dark']} position={[-30, 31, -30]} scale={30} />
        <mesh name="base_02" geometry={nodes.base_02.geometry} material={materials['03_dark']} position={[-1, 90, -29]} rotation={[0, Math.PI / 2, 0]} scale={[29, 29, 1]} />
        <mesh name="base_02_1" geometry={nodes.base_02_1.geometry} material={materials['03_dark']} position={[-31, 90, -1]} scale={[29, 29, 1]} />
        <mesh name="base_03" geometry={nodes.base_03.geometry} material={materials['03_dark']} position={[-1, 120, 0]} scale={[59.016, 1, 60]} />
        <mesh name="base_03_1" geometry={nodes.base_03_1.geometry} material={materials['04_yellow']} position={[-30.5, 150, -59]} scale={[29.5, 29, 1]} />
        <mesh name="base_03_2" geometry={nodes.base_03_2.geometry} material={materials['04_yellow']} position={[-59, 150, -29]} rotation={[0, Math.PI / 2, 0]} scale={[29, 29, 1]} />
        <mesh name="Projects" geometry={nodes.Projects.geometry} material={materials['01_numbers']} position={[6, 36, 3.05]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 10]} />
        <mesh name="01" geometry={nodes['01'].geometry} material={materials['01_numbers']} position={[6, 44, 3.4]} rotation={[Math.PI / 2, 0, 0]} scale={20} />
        <mesh name="01_bg" geometry={nodes['01_bg'].geometry} material={materials['03_dark.001']} position={[30, 31, 1]} scale={[30, 30, 1]} />
        <mesh name="rayban_base001" geometry={nodes.rayban_base001.geometry} material={nodes.rayban_base001.material} position={[-36.884, 1.377, 19.545]} rotation={[0, 0.063, 0]} scale={0.126} />
        <mesh name="monitor_base002" geometry={nodes.monitor_base002.geometry} material={nodes.monitor_base002.material} position={[-44.502, 1.126, 19.175]} rotation={[0, 0.737, 0]} scale={0.126} />
        <mesh name="billboard_main001" geometry={nodes.billboard_main001.geometry} material={materials['Color_M08.001']} position={[-42.599, 1.252, 26.645]} rotation={[0, 0.955, Math.PI / 2]} scale={[0.252, 3.773, 1.824]} />
        <mesh name="base_01_1001" geometry={nodes.base_01_1001.geometry} material={materials['Color_M07.001']} position={[-41.696, 4.773, 14.047]} rotation={[-Math.PI, 0.486, -Math.PI]} scale={3.773} />
        <mesh name="01_bg001" geometry={nodes['01_bg001'].geometry} material={materials['edge_color000255.001']} position={[-30.693, 1.126, 22.029]} rotation={[-Math.PI / 2, 0, -2.405]} scale={[3.773, 3.773, 0.126]} />
        <mesh name="01001" geometry={nodes['01001'].geometry} material={materials['Material.018']} position={[-37.706, 1.013, 28.272]} rotation={[Math.PI / 2, 0, -1.157]} scale={2.515} />
        <mesh name="base_01_1002" geometry={nodes.base_01_1002.geometry} material={materials['Color_M07.002']} position={[-50.648, 4.773, 20.194]} rotation={[-Math.PI, 1.257, -Math.PI]} scale={3.773} />
        <mesh name="01_bg002" geometry={nodes['01_bg002'].geometry} material={materials['edge_color000255.002']} position={[-35.166, 4.773, 12.154]} rotation={[-1.178, 1.227, 1.11]} scale={[3.773, 3.773, 0.126]} />
        <mesh name="rayban_base002" geometry={nodes.rayban_base002.geometry} material={nodes.rayban_base002.material} position={[-49.106, 1.377, 26.814]} rotation={[0, -0.436, 0]} scale={0.126} />
        <mesh name="base_01_1003" geometry={nodes.base_01_1003.geometry} material={materials['Color_M07.003']} position={[-45.08, 12.319, 16.902]} rotation={[-Math.PI, -1.324, -Math.PI]} scale={3.773} />
        <mesh name="02001" geometry={nodes['02001'].geometry} material={materials['Material.019']} position={[-39.448, 8.559, 14.18]} rotation={[Math.PI / 2, 0, -1.02]} scale={2.396} />
        <mesh name="03001" geometry={nodes['03001'].geometry} material={materials['Material.020']} position={[-52.098, 8.559, 20.99]} rotation={[Math.PI / 2, 0, -0.81]} scale={2.396} />
        <mesh name="blokdodge001" geometry={nodes.blokdodge001.geometry} material={nodes.blokdodge001.material} position={[-15.058, 2, 37.769]} />
        <mesh name="blokdodge002" geometry={nodes.blokdodge002.geometry} material={nodes.blokdodge002.material} position={[-15.058, 2, 48.071]} />
        <mesh name="blokdodge003" geometry={nodes.blokdodge003.geometry} material={nodes.blokdodge003.material} position={[-11.811, 5.389, 39.442]} />
        <mesh name="blokdodge" geometry={nodes.blokdodge.geometry} material={nodes.blokdodge.material} position={[-9.554, 5.389, 44.973]} />
        <mesh name="blokdodge_blue" geometry={nodes.blokdodge_blue.geometry} material={materials['04_blue']} position={[-3.91, 2, 43.28]} />
        <mesh name="easel001" geometry={nodes.easel001.geometry} material={materials.wood} position={[38.652, 1.738, 14.833]} rotation={[-0.359, -0.563, -0.46]} scale={0.5} />
        <mesh name="easel" geometry={nodes.easel.geometry} material={materials.wood} position={[39.262, 9.305, 13.032]} rotation={[-0.359, -0.563, -0.198]} />
        <mesh name="easel003" geometry={nodes.easel003.geometry} material={materials.wood} position={[51.309, 1.738, 23.358]} rotation={[2.782, 0.563, 3.078]} scale={0.5} />
        <mesh name="easel002" geometry={nodes.easel002.geometry} material={materials.wood} position={[51.505, -0.687, 8.411]} rotation={[-3.105, -0.982, 3.039]} scale={0.5} />
        <mesh name="canvas" geometry={nodes.canvas.geometry} material={materials.offwhite} position={[38.231, 11.512, 12.772]} rotation={[-0.359, -0.563, -0.198]} />
        <mesh name="02" geometry={nodes['02'].geometry} material={materials['01_numbers']} position={[3.4, 104, -6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={20} />
        <mesh name="Work" geometry={nodes.Work.geometry} material={materials['01_numbers']} position={[3.05, 96, -6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[10, 15, 10]} />
        <mesh name="02_bg" geometry={nodes['02_bg'].geometry} material={materials['03_dark.001']} position={[1, 90, -29]} rotation={[0, Math.PI / 2, 0]} scale={[29, 29, 1]} />
        <mesh name="terragraph_base" geometry={nodes.terragraph_base.geometry} material={materials['04_yellow']} position={[10.357, 64, -6.423]} />
        <mesh name="city_building" geometry={nodes.city_building.geometry} material={materials['Material.015']} position={[21.508, 79.517, -17.574]} scale={[0.75, 1, 0.75]} />
        <mesh name="city_building001" geometry={nodes.city_building001.geometry} material={materials['Material.017']} position={[21.508, 79.207, -15.573]} scale={[0.75, 0.69, 0.75]} />
        <mesh name="round_city_building" geometry={nodes.round_city_building.geometry} material={materials['Material.016']} position={[19.493, 79.253, -17.588]} scale={0.736} />
        <mesh name="city_building002" geometry={nodes.city_building002.geometry} material={materials['Material.011']} position={[19.508, 79.207, -15.573]} scale={[0.75, 0.69, 0.75]} />
        <mesh name="city_building004" geometry={nodes.city_building004.geometry} material={materials['Material.017']} position={[21.508, 79.207, -8.572]} scale={[0.75, 0.69, 0.75]} />
        <mesh name="city_building003" geometry={nodes.city_building003.geometry} material={materials['Material.015']} position={[19.508, 79.207, -8.572]} scale={[0.75, 0.69, 0.75]} />
        <mesh name="city_building005" geometry={nodes.city_building005.geometry} material={materials['Material.016']} position={[21.508, 79.207, -10.573]} scale={[0.75, 0.69, 0.75]} />
        <mesh name="round_city_building001" geometry={nodes.round_city_building001.geometry} material={materials['Material.011']} position={[19.493, 79.253, -10.587]} scale={0.736} />
        <mesh name="stadium" geometry={nodes.stadium.geometry} material={materials.Color_M07} position={[13.662, 79.117, -16.418]} scale={[1.906, 0.6, 1.906]} />
        <mesh name="city_building008" geometry={nodes.city_building008.geometry} material={materials['Material.015']} position={[16.422, 79.055, -17.739]} scale={[0.585, 0.538, 0.585]} />
        <mesh name="round_city_building002" geometry={nodes.round_city_building002.geometry} material={materials['Material.017']} position={[15.989, 79.536, -14.092]} scale={1.019} />
        <mesh name="city_building009" geometry={nodes.city_building009.geometry} material={materials['Material.011']} position={[12.341, 79.055, -13.658]} rotation={[0, Math.PI / 2, 0]} scale={[0.585, 0.538, 0.585]} />
        <mesh name="round_city_building005" geometry={nodes.round_city_building005.geometry} material={materials['Material.015']} position={[21.523, 79.253, -13.809]} scale={0.736} />
        <mesh name="city_building012" geometry={nodes.city_building012.geometry} material={materials['Material.016']} position={[19.508, 79.207, -13.823]} rotation={[0, Math.PI / 2, 0]} scale={[0.75, 0.69, 0.75]} />
        <mesh name="park" geometry={nodes.park.geometry} material={materials.Color_G07} position={[12.756, 78.617, -8.822]} scale={[1, 0.1, 1]} />
        <mesh name="tree" geometry={nodes.tree.geometry} material={materials['Material.010']} position={[16.062, 79.117, -8.662]} scale={[0.059, 0.5, 0.059]} />
        <mesh name="tree001" geometry={nodes.tree001.geometry} material={materials.Color_G07} position={[16.037, 79.782, -8.659]} scale={0.543} />
        <mesh name="tree002" geometry={nodes.tree002.geometry} material={materials.Color_G07} position={[16.48, 79.438, -9.678]} scale={0.383} />
        <mesh name="tree003" geometry={nodes.tree003.geometry} material={materials['Material.010']} position={[16.498, 78.969, -9.68]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="tree004" geometry={nodes.tree004.geometry} material={materials['Material.010']} position={[15.04, 78.969, -8.116]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="tree005" geometry={nodes.tree005.geometry} material={materials.Color_G07} position={[15.022, 79.438, -8.114]} scale={0.383} />
        <mesh name="tree006" geometry={nodes.tree006.geometry} material={materials.Color_G07} position={[12.698, 79.438, -10.676]} scale={0.383} />
        <mesh name="tree007" geometry={nodes.tree007.geometry} material={materials['Material.010']} position={[12.715, 78.969, -10.678]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="tree008" geometry={nodes.tree008.geometry} material={materials['Material.010']} position={[13.652, 79.041, -10.433]} scale={[0.055, 0.467, 0.055]} />
        <mesh name="tree009" geometry={nodes.tree009.geometry} material={materials.Color_G07} position={[13.629, 79.662, -10.43]} scale={0.507} />
        <mesh name="tree010" geometry={nodes.tree010.geometry} material={materials.Color_G07} position={[12.359, 79.438, -9.348]} scale={0.383} />
        <mesh name="tree011" geometry={nodes.tree011.geometry} material={materials['Material.010']} position={[12.377, 78.969, -9.35]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="tree012" geometry={nodes.tree012.geometry} material={materials.Color_G07} position={[12.359, 79.317, -9.748]} scale={0.278} />
        <mesh name="tree013" geometry={nodes.tree013.geometry} material={materials.Color_G07} position={[16.037, 79.555, -8.243]} scale={0.371} />
        <mesh name="tree014" geometry={nodes.tree014.geometry} material={materials.Color_G07} position={[13.926, 80.008, -10.566]} scale={0.317} />
        <mesh name="terragraph_pole" geometry={nodes.terragraph_pole.geometry} material={materials.Color_M07} position={[11.962, 78.863, -7.456]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="terragraph" geometry={nodes.terragraph.geometry} material={materials['Material.013']} position={[11.888, 79.33, -7.341]} scale={0.115} />
        <mesh name="terragraph_pole001" geometry={nodes.terragraph_pole001.geometry} material={materials.Color_M07} position={[16.947, 78.863, -12.982]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="terragraph001" geometry={nodes.terragraph001.geometry} material={nodes.terragraph001.material} position={[16.874, 79.33, -12.868]} scale={0.115} />
        <mesh name="terragraph_pole002" geometry={nodes.terragraph_pole002.geometry} material={materials.Color_M07} position={[21.067, 80.916, -9.044]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="terragraph002" geometry={nodes.terragraph002.geometry} material={nodes.terragraph002.material} position={[20.994, 81.383, -8.929]} scale={0.115} />
        <mesh name="terragraph_pole003" geometry={nodes.terragraph_pole003.geometry} material={materials.Color_M07} position={[21.021, 80.714, -17.108]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="terragraph003" geometry={nodes.terragraph003.geometry} material={nodes.terragraph003.material} position={[20.948, 81.181, -16.993]} scale={0.115} />
        <mesh name="terragraph_pole004" geometry={nodes.terragraph_pole004.geometry} material={materials.Color_M07} position={[11.349, 78.863, -11.442]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="terragraph004" geometry={nodes.terragraph004.geometry} material={nodes.terragraph004.material} position={[11.276, 79.33, -11.327]} scale={0.115} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Color_M08} position={[11.946, 80.224, -16.464]} scale={[-0.05, -0.5, -1]} />
        <mesh name="water" geometry={nodes.water.geometry} material={materials['Material.012']} position={[13.48, 78.56, -9.036]} scale={[1, 0.01, 1]} />
        <mesh name="landing_strip" geometry={nodes.landing_strip.geometry} material={materials.edge_color000255} position={[26.244, 78.567, -35.48]} rotation={[0, -0.333, 0]} scale={[2, 0.05, 6]} />
        <mesh name="radar_support001" geometry={nodes.radar_support001.geometry} material={materials.Color_M07} position={[31.948, 78.567, -37.425]} rotation={[0, -Math.PI / 4, 0]} scale={[0.25, 0.05, 0.25]} />
        <mesh name="radar_dish" geometry={nodes.radar_dish.geometry} material={materials.Material} position={[31.937, 79.718, -37.416]} rotation={[0, -Math.PI / 4, 0]} />
        <mesh name="radar_dish001" geometry={nodes.radar_dish001.geometry} material={materials.Material} position={[27.155, 79.718, -27.502]} rotation={[0, -Math.PI / 4, 0]} />
        <mesh name="radar_support" geometry={nodes.radar_support.geometry} material={materials.Color_M07} position={[27.167, 78.567, -27.511]} rotation={[0, -Math.PI / 4, 0]} scale={[0.25, 0.05, 0.25]} />
        <mesh name="terrazed_base" geometry={nodes.terrazed_base.geometry} material={materials.Color_G07} position={[17.767, 64, -34.47]} rotation={[0, -Math.PI / 4, 0]} />
        <mesh name="tree015" geometry={nodes.tree015.geometry} material={materials.Color_G07} position={[21.26, 79.889, -32.887]} rotation={[0, -Math.PI / 4, 0]} scale={0.317} />
        <mesh name="tree016" geometry={nodes.tree016.geometry} material={materials.Color_G07} position={[20.153, 79.714, -34.62]} rotation={[0, -Math.PI / 4, 0]} scale={0.571} />
        <mesh name="tree017" geometry={nodes.tree017.geometry} material={materials.Color_G07} position={[20.954, 79.543, -33.001]} rotation={[0, -Math.PI / 4, 0]} scale={0.507} />
        <mesh name="tree018" geometry={nodes.tree018.geometry} material={materials['Material.010']} position={[20.972, 78.922, -32.986]} rotation={[0, 0.087, 0]} scale={[0.055, 0.467, 0.055]} />
        <mesh name="tree019" geometry={nodes.tree019.geometry} material={materials['Material.010']} position={[21.671, 78.85, -37.178]} rotation={[0, -Math.PI / 4, 0]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="tree020" geometry={nodes.tree020.geometry} material={materials.Color_G07} position={[21.657, 79.319, -37.189]} rotation={[0, -Math.PI / 4, 0]} scale={0.383} />
        <mesh name="tree021" geometry={nodes.tree021.geometry} material={materials.Color_G07} position={[21.581, 79.319, -31.657]} rotation={[0, -Math.PI / 4, 0]} scale={0.383} />
        <mesh name="tree022" geometry={nodes.tree022.geometry} material={materials['Material.010']} position={[21.595, 78.85, -31.646]} rotation={[0, -Math.PI / 4, 0]} scale={[0.042, 0.353, 0.042]} />
        <mesh name="tree025" geometry={nodes.tree025.geometry} material={materials.Color_G07} position={[20.606, 80.063, -35.073]} rotation={[0, -Math.PI / 4, 0]} scale={0.835} />
        <mesh name="tree026" geometry={nodes.tree026.geometry} material={materials['Material.010']} position={[20.636, 79.039, -35.049]} rotation={[0, -Math.PI / 4, 0]} scale={[0.091, 0.769, 0.091]} />
        <mesh name="tree023" geometry={nodes.tree023.geometry} material={materials['Material.010']} position={[22.834, 78.922, -38.251]} rotation={[0, -Math.PI / 4, 0]} scale={[0.055, 0.467, 0.055]} />
        <mesh name="tree024" geometry={nodes.tree024.geometry} material={materials.Color_G07} position={[22.816, 79.543, -38.266]} rotation={[0, -Math.PI / 4, 0]} scale={0.507} />
        <mesh name="tree027" geometry={nodes.tree027.geometry} material={materials.Color_G07} position={[23.122, 79.889, -38.152]} rotation={[0, -Math.PI / 4, 0]} scale={0.317} />
        <mesh name="demo_stuff" geometry={nodes.demo_stuff.geometry} material={materials['Material.010']} position={[31.606, 79.517, -32.808]} rotation={[0, -Math.PI / 4, 0]} scale={[0.05, 1, 0.05]} />
        <mesh name="demo_stuff004" geometry={nodes.demo_stuff004.geometry} material={materials['Material.010']} position={[31.677, 78.767, -32.878]} rotation={[0, -Math.PI / 4, 0]} scale={[0.05, 0.25, 0.05]} />
        <mesh name="demo_stuff006" geometry={nodes.demo_stuff006.geometry} material={materials['Material.010']} position={[33.785, 79.517, -34.987]} rotation={[0, -Math.PI / 4, 0]} scale={[0.05, 1, 0.05]} />
        <mesh name="demo_window" geometry={nodes.demo_window.geometry} material={materials.glass} position={[31.677, 79.267, -32.878]} rotation={[0, -Math.PI / 4, 0]} scale={[0.05, 0.25, 0.05]} />
        <mesh name="demo_stuff005" geometry={nodes.demo_stuff005.geometry} material={materials['Material.010']} position={[31.606, 80.567, -32.808]} rotation={[0, -Math.PI / 4, 0]} scale={0.05} />
        <mesh name="demo_stuff009" geometry={nodes.demo_stuff009.geometry} material={materials['Material.010']} position={[32.574, 78.667, -33.338]} rotation={[0, -Math.PI / 4, 0]} scale={[0.05, 0.15, 0.05]} />
        <mesh name="demo_big_screen" geometry={nodes.demo_big_screen.geometry} material={materials.Color_M08} position={[32.574, 78.967, -33.338]} rotation={[0, -Math.PI / 4, 0]} scale={[0.05, 0.15, 0.05]} />
        <mesh name="demo_stuff007" geometry={nodes.demo_stuff007.geometry} material={materials['Material.010']} position={[33.3, 78.667, -34.064]} rotation={[0, -Math.PI / 4, 0]} scale={[0.05, 0.15, 0.05]} />
        <mesh name="demo_stuff008" geometry={nodes.demo_stuff008.geometry} material={materials['Material.010']} position={[33.959, 78.612, -34.697]} rotation={[0, -Math.PI / 4, 0]} scale={[0.032, 0.095, 0.032]} />
        <mesh name="demo_right_screen" geometry={nodes.demo_right_screen.geometry} material={materials.Color_M08} position={[33.498, 78.803, -34.236]} rotation={[0, -Math.PI / 4, 0]} scale={[0.032, 0.095, 0.032]} />
        <mesh name="demo_stuff003" geometry={nodes.demo_stuff003.geometry} material={materials['Material.010']} position={[33.498, 78.612, -34.236]} rotation={[0, -Math.PI / 4, 0]} scale={[0.032, 0.095, 0.032]} />
        <mesh name="demo_stuff002" geometry={nodes.demo_stuff002.geometry} material={materials['Material.010']} position={[31.945, 78.612, -32.683]} rotation={[0, -Math.PI / 4, 0]} scale={[0.032, 0.095, 0.032]} />
        <mesh name="demo_left_screen" geometry={nodes.demo_left_screen.geometry} material={materials.Color_M08} position={[31.945, 78.803, -32.683]} rotation={[0, -Math.PI / 4, 0]} scale={[0.032, 0.095, 0.032]} />
        <mesh name="demo_stuff001" geometry={nodes.demo_stuff001.geometry} material={materials['Material.010']} position={[32.406, 78.612, -33.144]} rotation={[0, -Math.PI / 4, 0]} scale={[0.032, 0.095, 0.032]} />
        <mesh name="rayban_base" geometry={nodes.rayban_base.geometry} material={materials['04_blue']} position={[42.069, 64, -51]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh name="rayban_stand" geometry={nodes.rayban_stand.geometry} material={materials['SVGMat.003']} position={[28.326, 78.517, -33.06]} scale={104.388} />
        <mesh name="rayban_stand001" geometry={nodes.rayban_stand001.geometry} material={materials['SVGMat.003']} position={[28.326, 78.517, -33.06]} scale={104.388} />
        <mesh name="rayban_stand002" geometry={nodes.rayban_stand002.geometry} material={materials['SVGMat.003']} position={[28.326, 78.517, -33.06]} scale={104.388} />
        <mesh name="rayban_stand003" geometry={nodes.rayban_stand003.geometry} material={materials['SVGMat.003']} position={[28.326, 78.517, -33.06]} scale={104.388} />
        <mesh name="rayban_stand004" geometry={nodes.rayban_stand004.geometry} material={materials['SVGMat.003']} position={[28.326, 78.517, -33.06]} scale={104.388} />
        <mesh name="rayban_stand005" geometry={nodes.rayban_stand005.geometry} material={materials['SVGMat.003']} position={[28.326, 78.517, -33.06]} scale={104.388} />
        <mesh name="rayban_stand006" geometry={nodes.rayban_stand006.geometry} material={materials['SVGMat.003']} position={[28.326, 78.517, -33.06]} scale={104.388} />
        <mesh name="rayban_stand007" geometry={nodes.rayban_stand007.geometry} material={materials['SVGMat.003']} position={[28.326, 78.517, -33.06]} scale={104.388} />
        <mesh name="rayban_stand008" geometry={nodes.rayban_stand008.geometry} material={materials['SVGMat.003']} position={[28.326, 78.517, -33.06]} scale={104.388} />
        <mesh name="pdf" geometry={nodes.pdf.geometry} material={materials.Color_G07} position={[37.933, 102.827, -58.325]} scale={[4.819, 3.855, 0.193]} />
        <mesh name="pdf001" geometry={nodes.pdf001.geometry} material={materials['04_blue']} position={[36.411, 106.755, -57.603]} rotation={[-0.066, 0, 0]} scale={[2.891, 3.855, 0.096]} />
        <mesh name="pdf002" geometry={nodes.pdf002.geometry} material={materials['5_human']} position={[39.69, 105.408, -56.933]} scale={[2.891, 3.855, 0.096]} />
        <mesh name="pdf003" geometry={nodes.pdf003.geometry} material={materials['03_dark.001']} position={[37.864, 105.251, -56.559]} rotation={[0.111, 0, 0]} scale={[2.891, 3.855, 0.096]} />
        <mesh name="Text" geometry={nodes.Text.geometry} material={materials['5_human']} position={[15.549, 111.397, -57.825]} rotation={[Math.PI / 2, 0, 0]} scale={[7.459, 1.243, 6.216]} />
        <mesh name="Text001" geometry={nodes.Text001.geometry} material={materials['5_human']} position={[18.198, 86.685, -57.825]} rotation={[Math.PI / 2, 0, 0]} scale={[6.216, 1.243, 4.972]} />
        <mesh name="pdf_arrow" geometry={nodes.pdf_arrow.geometry} material={materials['Material.012']} position={[26.88, 102.413, -57.887]} rotation={[0, 0, -Math.PI / 2]} scale={[3.771, 3.771, 0.754]} />
        <mesh name="About" geometry={nodes.About.geometry} material={materials['01_numbers']} position={[-54.95, 155, -6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[10, 15, 10]} />
        <mesh name="03" geometry={nodes['03'].geometry} material={materials['01_numbers']} position={[-54.6, 163, -6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={20} />
        <mesh name="03_bg" geometry={nodes['03_bg'].geometry} material={materials['03_dark.001']} position={[-57, 150, -29]} rotation={[0, Math.PI / 2, 0]} scale={[29, 29, 1]} />
        <mesh name="frisbee" geometry={nodes.frisbee.geometry} material={materials['04_yellow']} position={[-50.76, 123.403, -14.532]} scale={2.403} />
        <mesh name="frisbee001" geometry={nodes.frisbee001.geometry} material={materials.Color_G07} position={[-52.341, 123.767, -11.797]} rotation={[0.097, -0.036, 0.03]} scale={2.403} />
        <mesh name="frisbee002" geometry={nodes.frisbee002.geometry} material={materials['5_human']} position={[-52.81, 124.172, -17.331]} rotation={[0, 0, -1.168]} scale={2.403} />
        <mesh name="desk" geometry={nodes.desk.geometry} material={materials.wood} position={[-26.566, 135.697, -46.857]} scale={[14.26, 0.437, 7.998]} />
        <mesh name="desk001" geometry={nodes.desk001.geometry} material={materials.wood} position={[-17.296, 128.218, -49.17]} scale={0.713} />
        <mesh name="desk003" geometry={nodes.desk003.geometry} material={materials.wood} position={[-37.261, 128.13, -49.17]} scale={[0.713, 7.13, 3.779]} />
        <mesh name="desk005" geometry={nodes.desk005.geometry} material={materials.wood} position={[-37.261, 129.344, -49.17]} scale={[0.713, 7.13, 0.713]} />
        <mesh name="desk002" geometry={nodes.desk002.geometry} material={materials.wood} position={[-15.87, 129.344, -49.17]} scale={[0.713, 7.13, 0.713]} />
        <mesh name="desk004" geometry={nodes.desk004.geometry} material={materials.wood} position={[-15.87, 128.13, -49.17]} scale={[0.713, 7.13, 3.779]} />
        <mesh name="monitor_base" geometry={nodes.monitor_base.geometry} material={materials.edge_color000255} position={[-26.327, 137.134, -49.622]} />
        <mesh name="monitor_screen001" geometry={nodes.monitor_screen001.geometry} material={nodes.monitor_screen001.material} position={[-19.82, 138.633, -48.059]} rotation={[Math.PI / 2, 0, Math.PI / 6]} />
        <mesh name="monitor_base001" geometry={nodes.monitor_base001.geometry} material={materials.edge_color000255} position={[-15.826, 137.134, -46.687]} rotation={[0, -Math.PI / 6, 0]} />
        <mesh name="monitor_base2" geometry={nodes.monitor_base2.geometry} material={materials.edge_color000255} position={[-35.1, 137.134, -48.041]} rotation={[0, 0.436, 0]} />
        <mesh name="monitor_screen002" geometry={nodes.monitor_screen002.geometry} material={nodes.monitor_screen002.material} position={[-30.472, 138.633, -48.813]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="monitor_screen2" geometry={nodes.monitor_screen2.geometry} material={nodes.monitor_screen2.material} position={[-38.515, 138.633, -45.557]} rotation={[Math.PI / 2, 0, -0.436]} />
        <mesh name="billboard_support" geometry={nodes.billboard_support.geometry} material={materials.edge_color000255} position={[-59, 102, 2]} scale={[1, 2, 2]} />
        <mesh name="billboard_support_1" geometry={nodes.billboard_support_1.geometry} material={materials.edge_color000255} position={[-59, 80, 2]} scale={[1, 2, 2]} />
        <mesh name="billboard_main" geometry={nodes.billboard_main.geometry} material={materials.Color_M08} position={[-59, 100.242, 18.56]} scale={[2, 30, 14.5]} />
        <mesh name="billboard_text" geometry={nodes.billboard_text.geometry} material={materials['Material.008']} position={[-55.95, 118.087, 16.632]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[20, 15, 13]} />
      </group>
    </group>
  )
}

// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
function SelectToZoom({ children }) {
  const api = useBounds()
  return (
    <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
      {children}
    </group>
  )
}