import React, { useRef, useEffect } from 'react'
import { Vector3 } from 'three'

const Image = ({ position, texture, lookAt }) => {
    const mesh = useRef()

    useEffect(() => {
        if (mesh.current && lookAt !== undefined) {
            mesh.current.lookAt(new Vector3(0, lookAt - 500, 0))
        }
    }, [lookAt])

    const vertex = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            vec3 nPos = position;
            nPos.z -= sin(uv.x * PI) * 0.2;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(nPos, 1.0);
        }
    `

    const fragment = `
        varying vec2 vUv;
        uniform sampler2D uTexture;

        void main() {
            vec3 color = texture2D(uTexture, vUv).rgb;
            gl_FragColor = vec4(color, .8);
        }
    `

    return (
        <mesh ref={mesh} scale={[1.7, 1.2, 1]} position={position}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={{
                    uTexture: { value: texture }
                }}
                defines={{ PI: Math.PI }}
                side={2}
                transparent
            />
        </mesh>
    )
}

export default Image