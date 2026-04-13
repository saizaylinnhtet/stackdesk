import { User } from '@clerk/nextjs/server'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/global/mode-toggle'


type Props = {
    user?: null | User
}

const Navigation = ({ user }: Props) => {
    return (
        <div className='p-4  flex items-center justify-between relative'>
            <div className='flex items-center gap-2'>
                <Image src='/assets/plura-logo.svg' alt='logo' width={50} height={50} />
                <span className='font-bold text-xl'>StackDesk</span>
            </div>
            <nav className='hidden md:block absolute left-[50%] top-[50%] transform 
        translate-x-[-50%] translate-y-[-50%]'>
                <ul className='flex items-center justify-center gap-8'>
                    <Link href='#' className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 
                after:bg-sky-500 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
                        Pricing
                    </Link>
                    <Link href='#' className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 
                after:bg-sky-500 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
                        About
                    </Link>
                    <Link href='#' className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 
                after:bg-sky-500 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
                        Documentation
                    </Link>
                    <Link href='#' className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 
                after:bg-sky-500 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
                        Features
                    </Link>
                </ul>
            </nav>
            <aside className='flex gap-2'>
                <Link href='/agency' className='bg-primary text-white p-2 px-4 
            rounded hover:bg-primary/70'>Login</Link>
                <UserButton />
                <ModeToggle />
            </aside>
        </div>
    )
}

export default Navigation