import { Home, LayoutDashboardIcon, Folder, WalletCardsIcon, LayoutTemplate, ShapesIcon, Settings, Text } from 'lucide-react'; // No need for the second import of LayoutTemplate
import { Type } from 'lucide-react';
import { Sparkle } from 'lucide-react';
import { Image } from 'lucide-react';
import { Component } from 'lucide-react';
import BackgroundSetting from './Components/BackgroundSetting';
import AddImageSetting from './Components/AddImageSetting';

export const WorkspaceMenu=[
    {
        name:'Home',
        icon: Home,
        path:'/workspace'
    },
    {
        name:'Projects',
        icon: Folder,
        path:'/workspace/projects'
    },
    {
        name:'Templates',
        icon: LayoutDashboardIcon,
        path:'/workspace/templates'
    },
    {
        name:'Billiing',
        icon: WalletCardsIcon,
        path:'/workspace/billing'
    },

] 

export const canvasSizeOption = [
    {
        name: 'Instagram Post',
        width: 500,
        height: 500,
        icon: '/instagram.png'
    },
    {
        name: 'Instagram Story',
        width: 1080,
        height: 1600,
        icon: '/instagram.png'
    },
    {
        name: 'YouuTube Thumbnail',
        width: 1280,
        height: 720,
        icon: '/youtube.png'
    },
    {
        name: 'YouTube Banner',
        width: 1600,
        height: 900,
        icon: '/youtube.png'
    },
    {
        name: 'YouTube Post',
        width: 1200,
        height: 500,
        icon: '/youtube.png'
    }
];

export const sideBarMenu=[
    {
        name:'Templates',
        desc:'Select Prebuild Template',
        icon:LayoutTemplate
    },
    {
        name:'Elements',
        desc:'Select Shapes and Stickers',
        icon:ShapesIcon
    },
    { 
        name:'Images',
        desc:'Add Image or Upload your own',
        icon: Image,
        component: <AddImageSetting />
    },
    {
        name:'Text',
        desc:'Add Text and Heading',
        icon:Type
    },
    {
        name:'AI',
        desc:'More AI Features to enhance',
        icon:Sparkle
    },
    {
        name: 'Background',
        desc: 'Change Canvas Background',
        icon: Component,
        component: <BackgroundSetting/>
    },
    {
        name:'Settings',
        desc:'Update Canvas Size and Background',
        icon:Settings
    }  
]
 