import { FiHome, FiGlobe, FiClipboard, FiMail, FiUser, FiBookOpen } from 'react-icons/fi'
import { MdOutlineSportsEsports } from 'react-icons/md'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/esports', label: 'E-Sports', Icon: MdOutlineSportsEsports },
  { path: '/blog', label: 'Projects', Icon: FiClipboard },
  { path: '/contact', label: 'Contact', Icon: FiMail },
  { path: '/guestbook', label: 'Guestbook', Icon: FiBookOpen },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/esports': 'E-Sports',
  '/blog': 'Projects',
  '/contact': 'Contact',
  '/guestbook': 'G-book',
}

export const SOCIALS = {
  IG: 'https://www.instagram.com/ganeshalla',
  IN: 'https://www.linkedin.com/in/ganesh-alla-79951318b/',
  WA: 'https://api.whatsapp.com/send?phone=12407286051&text=%3CChatMe%20%2F%3E',
  AS: 'https://www.artstation.com/ganeshalla',
}

export const RESUME_URL = 'https://96d1de3e-7629-4ee6-ad90-0f1f897be326.filesusr.com/ugd/e8c5ff_05f0de32274d434aa83b561917825bc9.pdf'

export const FORMSPREE_KEY = 'mzbnqndo'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBVMdbOZhwseBhlPCFkvUyXubgCIABm0OI',
  authDomain: 'ganeshalla-portfolio.firebaseapp.com',
  databaseURL: 'https://ganeshalla-portfolio.firebaseio.com',
  projectId: 'ganeshalla-portfolio',
  storageBucket: 'ganeshalla-portfolio.appspot.com',
  messagingSenderId: '165970606078',
  appId: '1:165970606078:web:0e2ac009ae262cd968b2af',
  measurementId: 'G-SK4JTCKQ06',
}

/*
  apiKey: 'AIzaSyBVMdbOZhwseBhlPCFkvUyXubgCIABm0OI',
  authDomain: 'ganeshalla-portfolio.firebaseapp.com',
  databaseURL: 'https://ganeshalla-portfolio.firebaseio.com',
  projectId: 'ganeshalla-portfolio',
  storageBucket: 'ganeshalla-portfolio.appspot.com',
  messagingSenderId: '165970606078',
  appId: '1:165970606078:web:0e2ac009ae262cd968b2af',
  measurementId: 'G-SK4JTCKQ06',
*/
