"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import CustomCanvasDialog from './CustomCanvasDialog';

function RecentDesign() {
    const [designList,setDesignList]=useState([]);
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2lx'>Recent Design</h2>

            {designList.length==0?
                <div className='flex flex-col gap-4 items-center mt-5'>
                    <Image src={'/edittool.png'} alt='edit' width={100} height={100}/>
                    <h2 className='text-center'>You don't have any new design, create one!</h2>
                    <CustomCanvasDialog>
                        <Button>+ Create New</Button>
                    </CustomCanvasDialog>
                </div>:
                null
            }
        </div>
  )
}

export default RecentDesign