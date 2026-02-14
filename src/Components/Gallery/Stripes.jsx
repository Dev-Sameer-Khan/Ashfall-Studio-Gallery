import React from 'react'
import { useMemo } from 'react'
import Stripe from './Stripe'
import { useEffect } from 'react'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { useRef } from 'react'
import { useTexture } from '@react-three/drei'



const Stripes = ({ nStripe = 10 }) => {

  const texture = useTexture([
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
    "/12.png",
  ])


  const meshes = useMemo(() => {

    const ms = []

    for (let index = 0; index < nStripe; index++) {

      ms.push(<Stripe key={index} y={(index - 7) * 300} texture={texture} />)

    }
    return ms;
  }, [nStripe, texture])



  const { __lenis } = useScrollbar()
  const group = useRef()


  useEffect(() => {
    if (!__lenis) return

    const handleScroll = ({ progress, velocity }) => {
      if (group.current) {
        let scale = -(velocity * 0.003) + 1;
        group.current.position.y = progress * 200 * (nStripe - 2);
        group.current.rotation.y = -progress * Math.PI * 2;
        group.current.scale.set(scale, scale, scale)
      }
    }

    __lenis.on("scroll", handleScroll)
    return () => {
      __lenis.off("scroll", handleScroll)
    }
  }, [__lenis, nStripe])


  return (
    <group ref={group}>
      {meshes}
    </group>
  )
}

export default Stripes