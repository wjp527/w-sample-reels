'use client'
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
import AIICON from '@/assets/icons/ai.svg'

import mapImage from '@/assets/images/map1.png'
import smileMemoji from '@/assets/images/memoji-smile1.png'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from '@/components/ToolboxItems'

import { motion } from 'framer-motion'
import { useRef } from 'react'

// 掌握的技术栈
const toolboxItems = [
  {
    id: 0,
    title: 'Vue.js',
    iconType: VueIcon,
  },
  {
    id: 1,
    title: 'React',
    iconType: ReactIcon,
  },
  {
    id: 2,
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    id: 4,
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    id: 5,
    title: 'Tailwind CSS',
    iconType: TailwindIcon,
  },
  {
    id: 6,
    title: 'AI',
    iconType: AIICON,
  },
  {
    id: 7,
    title: 'Java',
    iconType: JavaIcon,
  },
  {
    id: 8,
    title: 'MySQL',
    iconType: MySQLcon,
  },
  {
    id: 9,
    title: 'Spring Boot',
    iconType: SpringBootIcon,
  },
  {
    id: 10,
    title: 'Git',
    iconType: GitIcon,
  },
  {
    id: 11,
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

export function AboutSection() {
  // 设置鼠标拖拽的限制区域，使其只在卡片内部移动
  const constraintRef = useRef(null)
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="一览我的世界" description="我是一名心怀热忱的开发者，钟情于构建优雅的解决之道。我的征途，贯穿着对未知的求索、对创新的执着，且于每一项目中，皆秉持精益求精、追求卓越之心." />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            {/* 
              卡片1: 我的阅读
            */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="阅读" description="学习永无止境." />
              <div className="w-40 mx-auto mt-1">
                <Image src={bookImage} alt="Book Cover" className="h-48" />
              </div>
            </Card>

            {/* 卡片2: 我的技术栈 */}
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader title="技术栈" description="使用过的技术." className="px-6 py-6" />
              <ToolboxItems toolboxItems={toolboxItems} className="mt-6 overflow-hidden" />
              <ToolboxItems toolboxItems={toolboxItems} className="mt-6 overflow-hidden" itemsWrapperClassName="-translate-x-1/2" />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            {/* 卡片3: 我的爱好 */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="兴趣爱好" description="永远热爱." className="px-6 pt-6" />
              <div ref={constraintRef} className="relative flex-1">
                {hobbies.map(item => (
                  <motion.div
                    key={item.id}
                    className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{item.title}</span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* 卡片4: 我的位置 */}
            <Card className="h-[340px] p-0 overflow-hidden relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute bottom-1 left-1/2 right-1/5 -translate-x-1/3 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:outline-gray-950/30 after:rounded-full h-[90px]">
                <div
                  className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 *:
-z-20 animate-ping [animation-duration:1.5s]
"
                ></div>
                <div
                  className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 *:
-z-10 
"
                ></div>
                <Image src={smileMemoji} alt="Smile Memoji" className="w-20 h-[90px] overflow-hidden rounded-full" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
