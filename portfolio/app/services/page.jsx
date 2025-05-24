"use client";
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import React from 'react'
import { motion } from "framer-motion";

//acredito que deve ser a parte da descricao dos servicos feito
//I believe it should be the part describing the services performed

const services = [
    {
        //eu vou chamar de Id mas e para ser chamado de num
        //I'll call it ID but what about num
        id: '01',
        title: 'Web Development',
        description: 'Build and Deploy a Portfolio Website Using Next JS, Tailwind CSS & Framer Motion',
        href: '/services/web-development',

    },
    //quando eu tiver mais projetos finalizados eu coloco 
    //when I have more finished projects I'll add them
    //eu vou botar os projetos descritos aqui como exemplo
    //I'll put the projects described here as an example
    {
        //eu vou chamar de Id mas e para ser chamado de num
        //I'll call it ID but what about num
        id:'02',
        title: 'UI/UX Design',
        description: 'Build and Deploy a Portfolio Website Using Next JS, Tailwind CSS & Framer Motion',
        href: '/services/web-development',

    },
    {
        //eu vou chamar de Id mas e para ser chamado de num
        //I'll call it ID but what about num
        id:'03',
        title: 'Logo Design',
        description: 'Build and Deploy a Portfolio Website Using Next JS, Tailwind CSS & Framer Motion',
        href: '/services/web-development',

    },
    {
        //eu vou chamar de Id mas e para ser chamado de num
        //I'll call it ID but what about num
        id:'04',
        title: 'SEO',
        description: 'Build and Deploy a Portfolio Website Using Next JS, Tailwind CSS & Framer Motion',
        href: '/services/web-development',

    }
]

const Services = () => {
    return (
        //este section coloca o nome services page em baixo
        //this section puts the name services page below
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
            <div className="container mx-auto" >
                {/* pelo que eu entendi esse motion div cria uma coluna com 4 nomes chamado services page */}
                {/* from what I understood this motion div creates a column with 4 names called services page */}
                <motion.div
                    initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    //aqui vai colocar os nomes dos servicos em 4 quando a tela tiver grande
                    //here it will put the names of the services in 4 when the screen is large
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"        
                >
                    {services.map((service,index) => {
                        return (  
                            <div key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top  */}
                                <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent
                                group-hover:text-outline-hover transition-all duration-500">{service.id}</div>
                                {/* esta linha vai transformar os arcos em bolas */}
                                {/*  this line will turn the arches into balls */}
                                <Link 
                                href={service.href}
                                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-700
                                flex justify-center items-center hover:-rotate-45" 
                                
                                
                                
                                >
                                    <BsArrowDownRight className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            {/* Heading */}
                            {/* Title names of IDS */}
                            <h2 className="text-[42px] font-bold leading-none text-white 
                            group-hover:text-accent transition-all duration-500">                                
                                {service.title}
                            </h2>
                            {/* Description */}
                            <p className="text-white/60">
                                {service.description}
                            </p>
                            {/* border */}
                            <div className="border-b border-white/20 w-full"></div>

                        </div>                                                       
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services; 