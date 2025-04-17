import { UserButton } from '@stackframe/stack'
import { User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader() {
  return (
    <div className='p-2 px-5 flex justify-between items-center shadow-sm'>
        <Image src={'/chayvaLogo.png'} alt="Chayva's logo" width={100} height={100}
        className='w-[85px] h-[80px]'
        />
        <UserButton/>
    </div>
  )
}

export default WorkspaceHeader