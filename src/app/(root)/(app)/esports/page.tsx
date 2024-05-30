import type { Metadata } from 'next'
import Image from 'next/image'
import ganesh from '@/assets/team.webp'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'E-Sports - Ganesh Alla',
  openGraph: {
    title: 'E-Sports - Ganesh Alla',
    url: '/esports',
  },
  alternates: {
    canonical: '/esports',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="E-Sports" />
      <div className="md:flex flex-col items-center">
        <div className="md:flex md:flex-row-reverse md:justify-between md:items-center mb-5 md:w-100">
          <div className="md:w-1/2 md:pr-6">
            <h2 className="mb-2 text-xl font-bold">Hey! I'm Ganesh Alla</h2>
            <div className="mb-6">
              <p className="mb-1">    
                I am so much passionate not only making the games but also interested to play  in a competitive scenario its been a dream for me to play valorant game in E-Sports Level and finally I participated in tryouts of Full Sail Armada (E-Sport collegiate team) for valorant game and I was selected for the main team among many other players which is like one of the dreams come true. This team gave me a opportunity to play in major tournaments like Cval, LCQ, NACE Star league .
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src={ganesh} alt="Foto Ganesh Alla" className="block w-full h-auto" placeholder="blur" layout="responsive" style={{ padding: '20px' }} />
          </div>
        </div>
      </div>
    </>
  )
}
