//icons only
import {ReactComponent as  Project } from '../../aside-content-items/icons/project.svg'
import {ReactComponent as  Computer } from '../../aside-content-items/icons/computer.svg'
import {ReactComponent as  Analytics } from '../../aside-content-items/icons/analytics.svg'
import {ReactComponent as  RssFeed } from '../../aside-content-items/icons/rss-feed.svg'
import {ReactComponent as  Atm } from '../../aside-content-items/icons/atm.svg'
import {ReactComponent as  D3Pie } from '../../aside-content-items/icons/d3pie.svg'
import {ReactComponent as  Cart } from '../../aside-content-items/icons/cart.svg'
import {ReactComponent as  Dollar } from '../../aside-content-items/icons/dollar.svg'

//icons only end

const asideIcons:TasideIcons = {
  project:<Project className='aside-icon'/>,
  computer:<Computer className='aside-icon'/>,
  analytics:<Analytics className='aside-icon'/>,
  rssFeed:<RssFeed className='aside-icon'/>,
  atm:<Atm className='aside-icon'/>,
  d3pie:<D3Pie className='aside-icon'/>,
  cart:<Cart className='aside-icon'/>,
  dollar:<Dollar className='aside-icon'/>,
}

export type TasideIcons = {
	project:JSX.Element,
	computer:JSX.Element,
  analytics:JSX.Element,
  rssFeed:JSX.Element,
  atm:JSX.Element,
  d3pie:JSX.Element,
  cart:JSX.Element,
  dollar:JSX.Element,
}


export default asideIcons