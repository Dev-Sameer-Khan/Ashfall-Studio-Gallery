import React from 'react'
import { SmoothScrollbar, GlobalCanvas } from "@14islands/r3f-scroll-rig"

const GlobalScene = () => {
    return (
        <>
            <SmoothScrollbar config={{ lerp: 0.05, wheelMutiplier: 0.5 , touchMultiplier: 0.5}}  />
            <GlobalCanvas flat />
        </>
    )
}

export default GlobalScene