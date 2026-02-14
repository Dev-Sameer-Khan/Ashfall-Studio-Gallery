import React from 'react'
import { useRef } from 'react'
import { UseCanvas } from '@14islands/r3f-scroll-rig'
import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups'
import { Logo } from '../Models/Logo'
import Stripes from '../Gallery/Stripes'


const Scene = () => {

    const track = useRef()

    return (
        <main className='w-full h-[200vh] relative '>
            <section ref={track} className='w-full h-screen sticky top-0 left-0'>
                <UseCanvas>
                    <StickyScrollScene track={track}>
                        {() => {
                            return (
                                <>
                                    <Logo scale={100} />
                                    <Stripes />
                                </>
                            )
                        }}
                    </StickyScrollScene>
                </UseCanvas>
            </section>
        </main>
    )
}

export default Scene