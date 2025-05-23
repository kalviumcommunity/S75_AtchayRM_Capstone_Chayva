import { UserButton } from '@stackframe/stack'
import { User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader() {
  return (
    <div className="p-1 flex items-center justify-between bg-gradient-to-r from-[#2b3338] via-[#36454F] to-[#495961] shadow-lg sticky top-0 z-50">

    <Image src={'/chayvaLogo.png'} alt="Chayva's logo" width={100} height={100}
        className='w-[85px] h-[80px]'
        />
        <UserButton/>
    </div>
  )
}

export default WorkspaceHeader