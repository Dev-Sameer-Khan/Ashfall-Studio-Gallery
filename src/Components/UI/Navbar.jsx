import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-start max-[599px]:items-center justify-between">
            <div className="text-zinc-400 text-sm font-medium tracking-widest flex  max-[599px]:gap-0 gap-[17vw]">
                ASHFALL . STUDIO
                <div className='flex flex-col max-[599px]:hidden'>
                <a href="#home" className="text-zinc-400 text-sm hover:opacity-70 transition-opacity cursor-pointer">
                    HOME
                </a>
                <a href="#projects" className="text-zinc-400 text-sm hover:opacity-70 transition-opacity cursor-pointer">
                    PROJECTS
                </a>
                <a href="#about" className="text-zinc-400 text-sm hover:opacity-70 transition-opacity cursor-pointer">
                    ABOUT
                </a>
                <a href="#lab" className="text-zinc-400 text-sm hover:opacity-70 transition-opacity cursor-pointer">
                    LAB
                </a>
                </div>
            </div>
            <div className="flex items-center gap-2 text-sm tracking-widest">
                <a href="#contact" className="text-zinc-400 text-sm hover:opacity-70 transition-opacity  hover:bg-white/10 transition-colors cursor-pointer">
                    LET'S TALK 
                </a>
                <button className='py-1 px-3 rounded-sm bg-zinc-400 text-white text-xl'>+</button>
            </div>
        </nav>
    )
}

export default Navbar
