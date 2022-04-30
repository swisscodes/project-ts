//icons only
import {ReactComponent as  Project } from '../../aside-content-items/icons/project.svg'
import {ReactComponent as  Computer } from '../../aside-content-items/icons/computer.svg'
import {ReactComponent as  Analytics } from '../../aside-content-items/icons/analytics.svg'
import {ReactComponent as  RssFeed } from '../../aside-content-items/icons/rss-feed.svg'
import {ReactComponent as  Atm } from '../../aside-content-items/icons/atm.svg'
import { JsxElement } from 'typescript'
//icons only end

const asideIcons = {
  project:<Project className='aside-icon'/>,
  computer:<Computer className='aside-icon'/>,
  analytics:<Analytics className='aside-icon'/>,
  rssFeed:<RssFeed className='aside-icon'/>,
  atm:<Atm className='aside-icon'/>,
}

export type TasideIcons = {
	project:JsxElement,
	computer:JsxElement,
  analytics:JsxElement,
  rssFeed:JsxElement,
  atm:JsxElement,
}


export default asideIcons