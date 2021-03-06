import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { Component } from 'react';

import Link from 'react-router-dom';

import * as WHS from 'whs';
import * as THREE from 'three';
// import * as OBJLoader from 'three-react-obj-loader';
import * as OBJLoader from 'three-obj-loader';
import * as PHYSICS from 'physics-module-ammonext';

import * as UTILS from '../../components/utils';
// import * as AMMO from '../../components/ammo';

import *  as mSquares from '../../3dcomponents/m';


// import modelJSON from '../../3dcomponents/marmelab.json';

OBJLoader(THREE);


export default class Header extends Component {

    constructor(props) {
        super(props)

        this.runWHS = this.runWHS.bind(this);
    }

    resize = () => this.forceUpdate()

    componentDidMount() {
        // this.THREE = THREE;



        

        

        this.runWHS();
    }

    componentDidUpdate() {
        this.runWHS();
    }

    runWHS() {

       

        const mouse = new WHS.VirtualMouseModule();

        const app = new WHS.App([
            new WHS.ElementModule(),
            new WHS.SceneModule(),
            new WHS.DefineModule('camera', new WHS.PerspectiveCamera({
                position: {
                    y: 50,
                    z: 60
                }
            })),
            new WHS.RenderingModule({
                bgColor: 0x162129,

                renderer: {
                    antialias: true,
                    shadowmap: {
                        type: THREE.PCFSoftShadowMap
                    }
                }
            }, { shadow: true }),
            new PHYSICS.WorldModule({
                ammo: 'https://cdn.rawgit.com/WhitestormJS/physics-module-ammonext/7a25628e/vendor/ammo.js'
            }),
            new WHS.OrbitControlsModule(),
            mouse
        ]);


        // Sphere

        const sphere = new WHS.Sphere({ // Create sphere comonent.
            geometry: {
                radius: 1,
                widthSegments: 32,
                heightSegments: 32
            },

            modules: [
                new PHYSICS.SphereModule({
                    mass: 500,
                    friction: 0,
                    
                }),

            ],

            material: new THREE.MeshPhongMaterial({
                color: 0xF2F2F2
            }),

            position: new THREE.Vector3(4, 60, 55)
        });

        sphere.addTo(app);

        // const objLoader = new OBJLoader();
        // console.log(objLoader);
        

        // Compound Module ( not working! )

        // const objLoader = new threeObjLoader(THREE);
        // threeObjLoader(THREE);

        // let loader = new THREE.OBJLoader();
        // var loader = new THREE.OBJLoader();


        // console.log(typeof loader);
        // console.log(loader);
// 
        // objLoader(THREE);
        

        // console.log(typeof THREE.OBJLoader);

        this.THREE = THREE;
        const objLoader = new this.THREE.OBJLoader();

        const compoundModule = new WHS.Importer({
            modules: [
                new PHYSICS.CompoundModule()
            ]
        })

        const part1 = new WHS.Importer({
            path: '../part1.obj',
            loader: objLoader,
            parser(object){
                this.applyBridge({geometry: object.geometry});
                return object;
            },
            modules: [
                new PHYSICS.ConvexModule()
            ]
        })

        // console.log(part1);

        new WHS.Model({
            geometry: {
                path: '../printer.json'
            },

            modules: [
                new PHYSICS.ConcaveModule({
                    friction: 1,
                    mass: 0,
                    path: '../printer.json',
                    scale: new THREE.Vector3(1, 1, 1)
                })
            ],
            useCustomMaterial: true,
            position: {
                x: 22 + offset,
                y: 67,

                z: -22 + offset,
            },
            rotation: {
                x: 0,
                y: -1.57079632679,
                z: 0,
            },
            scale: [1, 1, 1]
            // material: new THREE.MeshBasicMaterial({color: 0xff0000})
        });

        const part2 = new WHS.Importer({
            path: '../part2.obj',
            loader: objLoader,
            parser(object){
                this.applyBridge({geometry: object.geometry});
                return object;
            },
            modules: [
                new PHYSICS.ConvexModule()
            ]
        })

        // part1.addTo(compoundModule);
        // part2.addTo(compoundModule);
        // compoundModule.addTo(app);

        // Concave Model
        // const concaveModel = new WHS.Model({
        //     geometry: {
        //       path: '../marmelab.json'
        //     },
            
        //     modules: [
        //       new PHYSICS.ConcaveModule({
        //         friction: 1,
        //         mass: 200,
        //         restitution: 0.5,
        //         path: '../marmelab.json',
        //         scale: new THREE.Vector3(4, 4, 4)
                
        //       })
        //     ],
        //     useCustomMaterial: true,
        //     material: new THREE.MeshPhongMaterial({
        //         shading: THREE.SmoothShading,
        //         side: THREE.DoubleSide,
        //         color: 0x0000ff
        //     }),
        //     position: {
        //         z:60,
        //         y: 0,
        //         x:2
        //     },
        //     scale: [4, 4, 4]
        //     // material: new THREE.MeshBasicMaterial({color: 0xff0000})
        //   });
          
        //   concaveModel.addTo(app);

        //   console.log(concaveModel);
        //   concaveModel.position = new THREE.Vector3(2,0,60);

        // Convex Model

        const convexModel = new WHS.Importer({
            url: `../scene.json`,
            modules: [
                new PHYSICS.ConvexModule({
                    friction: 1,
                    mass: 500,
                    restitution: 0.5,
                    path: `../scene.json`,
                    scale: new THREE.Vector3(4, 4, 4)
                }),
            ],
            useCustomMaterial: true,
            material: new THREE.MeshPhongMaterial({
                side: THREE.DoubleSide,
                color: 0x0000ff
            }),
            position: {
                z:60,
                y: 0,
                x:2
            },
            scale: [4, 4, 4]
        });

        convexModel.addTo(app);

        // Plane

        const plane = new WHS.Plane({
            geometry: {
                width: 1000,
                height: 1000
            },
            modules: [
                new PHYSICS.PlaneModule({
                    mass: 0
                })
            ],
            material: new THREE.MeshPhongMaterial({ color: 0x447F8B }),
            rotation: {
                x: -Math.PI / 2,
                // z: 1cd
            }
        });
        plane.addTo(app);

        new WHS.Sphere({
            material: new THREE.MeshPhongMaterial({
                color: 0xF2F2F2,
                transparent: true,
                opacity: 0
            }),
            position: [0, 120, 110]
        }).addTo(app).then(mesh => {
            let angle = 0;

            new WHS.DirectionalLight({
                intensity: 1,
                shadow: {
                    mapSize: {
                        width: 4096,
                        height: 4096
                    },
                    bias: -0.003,
                    far: 150,
                    near: 5
                },
                position: [70, 35, 0]
            }).addTo(mesh);

        });


        // Collision

        sphere.on('collision', (otherObject, v, r, contactNormal) => {
            if (contactNormal.y < 0.5) sphere.material.color.set(0x0000ff);
        });

        // Mouse

        mouse.track(sphere);

        sphere.on('mouseover', () => {
            sphere.material.color.set(0xffff00);
            console.log('mouseover');
        });

        sphere.on('click', () => {
            sphere.material.color.set(0xff0000);
            console.log('click');
        });


        // Kickoff
       
        app.start();

    }



    render() {


        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">WHS Practice</h1>
                </header>

            </div>
        );
    }
}
