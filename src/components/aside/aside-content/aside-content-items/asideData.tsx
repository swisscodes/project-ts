import './asidedata.css'
import {ReactComponent as  Project } from './icons/project.svg'
import {ReactComponent as  Computer } from './icons/computer.svg'
import {ReactComponent as  Analytics } from './icons/analytics.svg'
import {ReactComponent as  RssFeed } from './icons/rss-feed.svg'
import {ReactComponent as  Atm } from './icons/atm.svg'



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
        icon:<Computer className='aside-icon'/>,
        label:'My Projects',
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
        icon:<Analytics className='aside-icon'/>,
        label:'Analytics',
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
        icon:<Atm className='aside-icon'/>,
        label:'Finacial Matters',
    },
    {
        id:4,
        url:'table',
        icon:<RssFeed className='aside-icon'/>,
        label:'Rss Feed',
    },
    {
        id:5,
        url:'create-project',
        icon:<Project className='aside-icon'/>,
        label:'Insight',
    },
    
]


export default sideBarData