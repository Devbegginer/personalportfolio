"use client";
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
// motion: {}
// import AnimatedPresence nao esta instalado!
const PageTransition = ({children}) => {
    const pathname = usePathname();
    return (
        // <div>Page Transition</div>
        <AnimatePresence>
            <div key={pathname}>
                <motion.div 
                initial = {{opacity: 1}}
                animate = {{
                    opacity: 0,
                    transition: {delay: 1,duration: 0.4,ease: "easeInOut"},
                }}
                // Essa parte vai ser um efeito de mini delay no carregamento do site
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
            {children}
            </div>
        </AnimatePresence> 
    );
};

export default PageTransition;   