import {FcHome } from "react-icons/fc";
import { IconType } from "react-icons";

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
        label:'settings',
        icon:FcHome,
        url:'/',
        clicked:false
    },
    {
        id:3,
        label:'profile',
        icon:FcHome,
        url:'/',
        clicked:false
    },
    
]