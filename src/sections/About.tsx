import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'
import bookImage from '@/assets/images/book-cover.png'
import Image from 'next/image'

import JavascriptIcon from '@/assets/icons/square-js.svg'
import VueIcon from '@/assets/icons/Vuejs.svg'
import ReactIcon from '@/assets/icons/react.svg'
import TailwindIcon from '@/assets/icons/TailwindCSS.svg'
import TypeScriptIcon from '@/assets/icons/typescript.svg'
import JavaIcon from '@/assets/icons/java.svg'
import MySQLcon from '@/assets/icons/mysql.svg'
import SpringBootIcon from '@/assets/icons/springboot.svg'
import GitIcon from '@/assets/icons/git.svg'
import GithubIcon from '@/assets/icons/github.svg'

import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from '@/components/ToolboxItems'

// 掌握的技术栈
const toolboxItems = [
  {
    id: 0,
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    id: 1,
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    id: 2,
    title: 'Tailwind CSS',
    iconType: TailwindIcon,
  },

  {
    id: 4,
    title: 'Vue.js',
    iconType: VueIcon,
  },
  {
    id: 5,
    title: 'React',
    iconType: ReactIcon,
  },
  {
    id: 6,
    title: 'Java',
    iconType: JavaIcon,
  },
  {
    id: 7,
    title: 'MySQL',
    iconType: MySQLcon,
  },
  {
    id: 8,
    title: 'Spring Boot',
    iconType: SpringBootIcon,
  },
  {
    id: 9,
    title: 'Git',
    iconType: GitIcon,
  },
  {
    id: 10,
    title: 'Github',
    iconType: GithubIcon,
  },
]

// 兴趣爱好
const hobbies = [
  {
    id: 0,
    title: 'Photography',
    emoji: '📷',
    left: '5%',
    top: '5%',
  },
  {
    id: 1,
    title: 'Traveling',
    emoji: '🌍',
    left: '50%',
    top: '15%',
  },
  {
    id: 2,
    title: 'Music',
    emoji: '🎧',
    left: '3%',
    top: '35%',
  },
  {
    id: 3,
    title: 'Food',
    emoji: '🍜',
    left: '25%',
    top: '55%',
  },
  {
    id: 4,
    title: 'Sports',
    emoji: '🏃',
    left: '60%',
    top: '45%',
  },
  {
    id: 5,
    title: 'Reading',
    emoji: '📚',
    left: '5%',
    top: '75%',
  },
  {
    id: 6,
    title: 'Gaming',
    emoji: '🎮',
    left: '55%',
    top: '80%',
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="I'm a passionate developer with a knack for crafting elegant solutions. My journey is marked by curiosity, innovation, and a commitment to excellence in every project I undertake." />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-1">
                <Image src={bookImage} alt="Book Cover" className="h-48" />
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Explore the books shaping my perspectives." className="px-6 py-6" />
              <ToolboxItems toolboxItems={toolboxItems} className="mt-6 overflow-hidden" />
              <ToolboxItems toolboxItems={toolboxItems} className="mt-6 overflow-hidden" itemsWrapperClassName="-translate-x-1/2" />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 pt-6" />
              <div className="relative flex-1">
                {hobbies.map(item => (
                  <div
                    key={item.id}
                    className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">{item.title}</span>
                    <span>{item.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 overflow-hidden relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:outline-gray-950/30 after:rounded-full">
                <Image src={smileMemoji} alt="Smile Memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
