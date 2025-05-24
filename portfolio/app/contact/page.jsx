"use client"
import React from 'react'
import {Button} from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    
} from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
import { Description } from '@radix-ui/react-dialog'
import {motion} from "framer-motion"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        Description: "(+55) 71 9 9955-6770",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        Description: "caiopassosmagalhaes.2004@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        Description: "Camacari/ BA",
    }
]

const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
            opacity: 1,
            transition: {delay:2.4,duration:0.4,ease: 'easeIn'},
            }}
            className = "py-6"
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* form */}
                    <div className='xl:w-[54%] order-2 xl:order-none'>
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-4xl text-accent'>Lets Work Together</h3>
                            <p className='text-white/60'>
                            Hello, my name is Caio! I'm a Software Engineering student with a passion for technology and development, with knowledge of 
                            JavaScript, Python, HTML, CSS and Next.js. I also have experience with cloud services on AWS, where I earned two 
                            certifications: AWS Cloud Practitioner and AWS Solutions Architect Associate. I'm always looking for new challenges, 
                            learning and opportunities to develop efficient solutions. Let's work together.
                            </p>
                            {/* input */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type="firstname" placeholder="First Name" />
                                <Input type="lastname" placeholder="Last Name" />
                                <Input type="email" placeholder="Email Name" />
                                <Input type="phone" placeholder="Phone Name" />
                            </div>
                                {/* Select */}
                                <Select>
                                    <SelectTrigger className='w-full'>
                                        <SelectValue placeholder='Select a Service' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select a Service</SelectLabel>
                                            <SelectItem value="est">Web Development</SelectItem>
                                            <SelectItem value="cst">UI/UX Design</SelectItem>
                                            <SelectItem value="mst">Logo Design</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {/* TextArea */}
                                <Textarea 
                                    className="h-[200px]"
                                    placeholder="Type your message here"
                                />
                                {/* Button */}
                                <Button size="md" className="max-w-40"> 
                                    Send Message
                                </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 
                    xl:order-none mb-8 xl:mb-0'></div>
                    <ul className='flex flex-col gap-10'>
                        {info.map((item,index) => {
                            return (
                                <li key={index} className='flex items-center gap-6'>
                                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                        <div className='text-[28px]'>{item.icon}</div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-white/60'>{item.title}</p>
                                        <h3 className='text-xl '>{item.Description}</h3>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div> 
        </motion.section>
    );
};

export default Contact;   