"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import DesignHeader from '../_components/DesignHeader';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import SideBar from '../_components/SideBar';
import CanvasEditor from '../_components/CanvasEditor';

function DesignEditor() {
    const { designId } = useParams(); 
    const DesignInfo = useQuery(api.designs.GetDesign, {
        id: designId  
    });

    return (
        <div> 
            <DesignHeader DesignInfo={DesignInfo} />
            <div className='flex'>
                <SideBar/>
                <CanvasEditor DesignInfo={DesignInfo}/>
            </div>
        </div>
    );
}

export default DesignEditor;
