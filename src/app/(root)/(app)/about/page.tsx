import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ganesh from '@/assets/ganeshmain.jpg'
import { RESUME_URL } from '@/constans/common'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'About - Ganesh Alla',
  openGraph: {
    title: 'About - Ganesh Alla',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={ganesh} alt="Foto Ganesh Alla" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">Hey! I'm Ganesh Alla</h2>
          <div className="mb-6">
            <p className="mb-1">    
Passionate game designer and environment artist, constantly strives to create engaging game designs and stunning environments, <br/>works every day to learn new thing and improve to keep upto the current technology and i love making games and process of making it.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">My Work Experience</h2>
          <div className="mb-6">
            <p className="mb-1">
            <i>Cellec Games - Game designer/QA </i>
              <br />
              Worked as a Game Designer/QA at Cellec Games, Winter Park, FL, from April 2022 to March 2023. Contributed to the development and release of 6+ Unreal Engine games on Steam. Enhanced project workflows, tracked progress using Jira, and improved QA processes for heightened product quality.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">My Toolset</h2>
          <div className="mb-6">
            <p className="mb-1">Unreal Engine | Unity | BluePrints | Adobe Illustrator | Autodesk Maya | Adobe Photoshop | Jira | Substance 
Painter | Blender | GitHub | C programming | C# | Microsoft Office (Word, Excel) | AutoCAD | Confluence| 
ShotGrid | Adobe Suite</p>
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
