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
        label:'Hey1',
        icon:FcHome,
        url:'/',
        clicked:false
    },
    {
        id:1,
        label:'Hey2',
        icon:FcHome,
        url:'/',
        clicked:false
    },
]