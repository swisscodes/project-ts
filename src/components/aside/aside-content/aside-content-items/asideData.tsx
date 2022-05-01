import './asidedata.css'
// import {ReactComponent as  Project } from './icons/project.svg'
// import {ReactComponent as  Computer } from './icons/computer.svg'
// import {ReactComponent as  Analytics } from './icons/analytics.svg'
// import {ReactComponent as  RssFeed } from './icons/rss-feed.svg'
// import {ReactComponent as  Atm } from './icons/atm.svg'



export interface sideBarType  {
    id:number,
    url:string,
    icon:string,
    label:string
    subItem?:Array<sideBarType>
}

export type ArrayOfSideMenu = Array<sideBarType>


const sideBarData:ArrayOfSideMenu = [
    {
        id:1,
        url:'/',
        icon:'computer',
        label:'My Projects',
        subItem: [{
            id:1,
            url:'/d3',
            icon:'',
            label:'D3',
        }]
    },
    {
        id:2,
        url:'analytics',
        icon:'analytics',
        label:'Analytics',
        subItem: [
            {
                id:1,
                url:'orders',
                icon:'bx bx-notepad sideItems-icons',
                label:'Orders'
            },
            {
                id:2,
                url:'payments',
                icon:'bx bxs-package sideItems-icons',
                label:'Payments'
            },
        ]
    },
    {
        id:3,
        url:'addmaterial',
        icon:'atm',
        label:'Finacial Matters',
    },
    {
        id:4,
        url:'table',
        icon:'rssFeed',
        label:'Rss Feed',
    },
    {
        id:5,
        url:'create-project',
        icon:'project',
        label:'Insight',
    },
    
]


export default sideBarData