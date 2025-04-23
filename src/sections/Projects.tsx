'use client'

import darkSaasLandingPage from '@/assets/images/picture.png'
import lightSaasLandingPage from '@/assets/images/code.png'
import aiStartupLandingPage from '@/assets/images/codes.png'
import grainImage from '@/assets/images/grain.jpg'

import Image from 'next/image'
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
const portfolioProjects = [
  {
    company: 'Private',
    year: '2024',
    title: 'π立方',
    results: [{ title: '前端: Vue3 + TS + Pinia + Ant-design-vue + WebSocket' }, { title: '后端: SpringBoot2 + MySQL + 多级缓存  + AI' }, { title: '项目亮点: 使用了Sa-Token 进行了统一的权限校验，使用了WebSocket进行了实时通信，Disruptor高性能无锁队列，采用了DDD驱动领域设计' }],
    link: 'http://cloudatlas.wcoder.online/',
    image: darkSaasLandingPage,
  },
  {
    company: 'Private',
    year: '2025',
    title: 'π智链',
    results: [{ title: '前端: Vue3 + Arco Design + OpenAPI + TS' }, { title: '后端: SpringBoot2 + MySQL + 多级缓存  + AI' }, { title: '项目亮点: 用户可以基于 AI 快速制作并发布答题应用，使用了Arco Design 进行了统一的UI设计，使用了OpenAPI 进行了API文档自动生成' }],
    link: 'http://wdada.wcoder.online/',
    image: lightSaasLandingPage,
  },
  {
    company: 'Private',
    year: '2025',
    title: 'π在线代码生成平台',
    results: [{ title: '前端: React + Ant Design Pro + OpenAPI + TS' }, { title: '后端: Java命令行应用开发 + FreeMaker模版引擎 + 多级缓存 + 分布式任务调度 + 对象存储' }, { title: '项目亮点: 可以在线的使用别人发布的项目代码(自己可以在下载前进行配置参数)' }],
    link: 'http://iwjp.online/',
    image: aiStartupLandingPage,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader title="项目展示" eyebrow="特色项目" description="项目介绍" />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((proejct, index) => (
            <Card
              key={proejct.title}
              className={`md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky  `}
              style={{
                top: `calc(${index} * 50px + 64px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm gap-2">
                    <span>{proejct.company}</span>
                    <span>&bull;</span>
                    <span>{proejct.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{proejct.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 overflow-hidden md:mt-5">
                    {proejct.results.map(result => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={proejct.link} className="" target="_blank">
                    <button
                      className="inline-flex justify-center items-center bg-white text-gray-950 h-12 w-full 
               md:w-auto px-4 rounded-xl font-semibold mt-8 gap-2"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative h-full overflow-hidden lg:w-[450px] lg:rounded-br-xl">
                  {/* <div className="lg:absolute lg:inset-y-0 lg:h-full"> */}
                  <Image src={proejct.image} alt={proejct.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                  {/* </div> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
