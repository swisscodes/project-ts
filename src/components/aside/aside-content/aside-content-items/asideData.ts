import project1 from './icons/project1.svg'
import { IconType } from 'react-icons'


export interface sideBarType  {
    id:number,
    url:string,
    icon?:JSX.Element | string,
    label:string
    subItem?:Array<sideBarType>
}

export type ArrayOfSideMenu = Array<sideBarType>


const sideBarData:ArrayOfSideMenu = [
    {
        id:1,
        url:'/',
        icon:project1,
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
        icon:'',
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
        icon:'bx bx-desktop sideItems-icons',
        label:'Material Add',
    },
    {
        id:4,
        url:'table',
        icon:'bx bx-desktop sideItems-icons',
        label:'Bom Pro',
    },
    {
        id:5,
        url:'create-project',
        icon:'bx bx-desktop sideItems-icons',
        label:'Project',
    },
    
]



export default sideBarData