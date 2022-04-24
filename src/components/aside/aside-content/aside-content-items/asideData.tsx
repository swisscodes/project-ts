import './asidedata.css'
import {ReactComponent as  Project } from './icons/project.svg'
import {ReactComponent as  Software } from './icons/software.svg'



export interface sideBarType  {
    id:number,
    url:string,
    icon?:JSX.Element|string,
    label:string
    subItem?:Array<sideBarType>
}

export type ArrayOfSideMenu = Array<sideBarType>


const sideBarData:ArrayOfSideMenu = [
    {
        id:1,
        url:'/',
        icon:<Project className='aside-icon'/>,
        label:'My projects',
        subItem: [{
            id:1,
            url:'/d3',
            icon:undefined,
            label:'D3',
        }]
    },
    {
        id:2,
        url:'',
        icon:<Project className='aside-icon'/>,
        label:'Inquiries',
        subItem: [
            {
                id:1,
                url:'bom',
                icon:'bx bx-notepad sideItems-icons',
                label:'Bom'
            },
            {
                id:2,
                url:'steppart',
                icon:'bx bxs-package sideItems-icons',
                label:'Parts'
            },
        ]
    },
    {
        id:3,
        url:'addmaterial',
        icon:<Project className='aside-icon'/>,
        label:'Material Add',
    },
    {
        id:4,
        url:'table',
        icon:<Project className='aside-icon'/>,
        label:'Bom Pro',
    },
    {
        id:5,
        url:'create-project',
        icon:<Software className='aside-icon'/>,
        label:'Project',
    },
    
]


export default sideBarData