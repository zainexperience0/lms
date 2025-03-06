"use client"

import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { usePathname,useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

const NevbarRoute = () => {
    const pathname=usePathname()
    const router = useRouter()
     const isteacherpage=pathname?.startsWith("/teacher")
     const playerpage=pathname.includes("/chapter")
  return (
    <div className='flex items-center gap-4 px-5'>
         {isteacherpage|| playerpage?(
        <Button variant={'ghost'} size={'sm'} className='cursor-pointer border' onClick={()=>router.push('/')} >
            <LogOut className='  mr-2 h-4 w-4'/>
            Exit
        </Button>
    ):(
        <Link href="/teacher/courses">
        <Button className="cursor-pointer border" size={'sm'} variant={'ghost'}>
            Teacher Mode
        </Button>
        </Link>
    )}
        <UserButton afterSignOutUrl='/sign-in'/>
        </div>
  )
}

export default NevbarRoute