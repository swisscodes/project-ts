import {FcHome, FcServices } from "react-icons/fc";
import { IconType } from "react-icons";
import noti from './images/noti.svg'


export interface INavType {
    id:number,
    label: string,
    icon: IconType,
    url?: string,
    clicked?: boolean,
    ref?:any,
    subNav?: Array<INavType>
}

export const navDataRight:Array<INavType> = [
    {
        id:1,
        label:'mode',
        icon:FcHome,
        url:'/',
        clicked:false
    },
    
    {
        id:2,
        label:'profile',
        icon:FcHome,
        url:'/',
        clicked:false
    },

    {
        id:3,
        label:'settings',
        icon:FcServices,
        url:'/',
        clicked:false
    },
    
]