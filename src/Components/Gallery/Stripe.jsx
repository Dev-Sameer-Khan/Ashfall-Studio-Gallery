import React from 'react'
import { useMemo } from 'react'
import Image from './Image'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'

const Stripe = ({ nplane = 6, radius = 3, y, texture }) => {

    const randTexture = gsap.utils.random(texture,true)


    const meshes = useMemo(() => {

        const ms = []

        for (let index = 0; index < nplane; index++) {
            const angle = Math.PI * 2 * index / nplane;
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;

            ms.push(
                <Image position={[x, 0, z]} lookAt={y} key={index} texture={randTexture()} />
            )
        }
        return ms;
    }, [nplane, radius, y, randTexture])

    const group = useRef()

    // useEffect(() => {
    //     const scala = gsap.utils.random(130, 170)

    //     if (group.current) {
    //         group.current.scale.set(scala, scala, scala)
    //     }

    // }, [])



    const direction = gsap.utils.random(-0.3, 0.3)

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime() * 0.5

        if (group.current) {
            group.current.rotation.y = time * direction
        }

    })


    return (
        <group ref={group} scale={150} position={[0, y, 0]}>
            {meshes}
        </group>
    )
}

export default Stripe