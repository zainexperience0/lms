import Link from 'next/link'
import { Button } from '../../../../../components/ui/button'
import React from 'react'

const page = () => {
    return (
        <div className="p-6">
            <Link href="/teacher/create">
            <Button  className="cursor-pointer" >New Course</Button>
            </Link>
        </div>
    )
}

export default page