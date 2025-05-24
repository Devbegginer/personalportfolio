"use client"
import React from 'react';
import { FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,FaPython, FaJava} from 'react-icons/fa';
import {SiTailwindcss,SiNextdotjs} from 'react-icons/si';
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import {motion } from "framer-motion";
// About data
const about = {
    title: "About Me",
    // Nessa parte aqui voce vai descrever sobre voce!
    description: "Bachelor’s Degree in Software Engineering.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Caio Passos",
        },
        {
            fieldName: "Phones",
            fieldValue: "(+55) 71 9 9955-6770",
        },
        {
            fieldName: "Experience",
            fieldValue: "1+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Brazilian",
        },
        {
            fieldName: "Freelancer",
            fieldValue: "Available" ,
        }, {
            fieldName: "Email",
            fieldValue: "caiopassosmagalhaes.2004@gmail.com",
            //fieldValue: "caiopassosmagalhaes.2004@gmail.com",
        },
        {
            fieldName: "Language",
            fieldValue: "Portuguese, English ",
            //fieldValue: "Portuguese, English ",

        },
    ]

};
// experience area
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "I worked as a trainee in the I.T. support area",
    items: [
        {
            // aqui e experiencia em empresa
            company: "EuropackNE Nordeste BR",
            position: "IT technical support",
            date: "2022 - 2023",
            description: "I assembled computers, maintained printers and updated operating systems. Provided support to representatives using remote access software and managed company calls using the GLPI System.."
        },
    ]
}; 
// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    description: "I studied through courses to learn and develop web applications through teaching platforms.",
    items: [
        {
            // aqui e a parte dos cursos de programacao
            Institution: "Online Course Plataform",
            degree: "Web Developer",
            date: "2024",
        },
        {
            // aqui e a parte dos cursos de programacao
            Institution: "Infinity High School",
            degree: "Developer Full Stack",
            date: "2024",
        },
        {
            // aqui e a parte dos cursos de programacao
            Institution: "Fiap ON - NANO COURSES  Programa Eu Capacito",
            degree: "Python",
            date: "2024",
        },
        {
            // aqui e a parte dos cursos de programacao
            Institution: "Fiap ON - NANO COURSES  Programa Eu Capacito",
            degree: "Java fundamentals",
            date: "2024",
        },
        {
            // aqui e a parte dos cursos de programacao
            Institution: "Fiap ON - NANO COURSES  Programa Eu Capacito",
            degree: "Linux fundamentals",
            date: "2024",
        },
        {
            // aqui e a parte dos cursos de programacao
            Institution: "IBM",
            degree: "Artificial Intelligence Fundamentals",
            date: "2024",
        },
        {
            // aqui e a parte dos cursos de programacao
            Institution: "Escola da Nuvem",
            degree: "AWS Cloud practitioner - CLF-C02",
            date: "2024",
        }
    ]
};
//const skills 
const skills = {
    title: "My Skills",
    description: "Description of my skills in backend and frontend programming.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5 ",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs/>,
            name: "Javascript",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML 5 ",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.Js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.Js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <FaJava />,
            name: "Java",
        }
    ]

};
const Resume = () => {
    return (  
        <motion.div
        initial={{ opacity: 0}}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs
                defaultValue='experience'
                className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about me'>About Me</TabsTrigger>
                    </TabsList>
                    {/* Content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                    <p className='max-w-[600px] text-sm text-white/60 mx-auto xl:mx-0 '>{experience.description}</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                            {experience.items.map((item,index) => {
                                                return ( 
                                                <li key={index} 
                                                className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.date}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60x]
                                                    text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* Data */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                                )
                                            })}
                                        </ul>
                                    </ScrollArea>
                            </div> 
                        
                        </TabsContent>
                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                    <p className='max-w-[600px] text-sm text-white/60 mx-auto xl:mx-0 '>{education.description}</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                            {education.items.map((item,index) => {
                                                return ( 
                                                <li key={index} 
                                                className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.date}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60x]
                                                    text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* Data */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.Institution  }</p>
                                                    </div>
                                                </li>
                                                )
                                            })}
                                        </ul>
                                    </ScrollArea>
                            </div> 
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill,index) => {
                                        return <li key={index}>
                                            {/* eu tirei essa parte na frente do index {skill.name} */}
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className='capitalize'>{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about me */}
                        <TabsContent value="about me" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 '>
                                    {about.info.map((item,index)=> {
                                        return (  
                                        <li key={index}
                                        className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-white'>{item.fieldValue}</span>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};
export default Resume;