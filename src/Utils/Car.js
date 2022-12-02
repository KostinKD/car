import React from "react";
import {useLoader} from "@react-three/fiber";
import {useEffect} from "react";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import * as THREE from 'three'



export function Car(){

    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + 'model/car/scene.gltf'
    )

    useEffect(()=>{
        gltf.scene.scale.set(0.005, 0.005, 0.005)
        gltf.scene.position.set(0,-0.035, 0)
        gltf.scene.traverse((object)=>{
            // console.log(gltf.scene)
            if (object instanceof THREE.Mesh){
                object.castShadow = true
                object.receiveShadow = true
                object.material.envMapIntensity = 20
            }
        })
    }, [gltf])

    return <primitive object={gltf.scene}/>
}