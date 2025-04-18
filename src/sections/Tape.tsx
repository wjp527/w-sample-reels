'use client' // 添加这行声明为客户端组件
import { motion } from 'framer-motion'

import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react'

const words = ['Html', 'Css', 'Tailwindcss', 'Sass', 'Javascript', 'Typescript', 'Vue', 'React', 'Nodejs', 'KOA', 'NextJs', 'Webpack', 'Vite', 'Java', 'MySQL', 'Spring Boot', 'Redis', 'SSE', 'RabbitMQ', 'ESlasticSearch', 'WebSocket']
export function TapeSection() {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        {/* linear-gradient：不能有空格 */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* 
            第一种写法: 使用 tailwindcss 的 写法
          */}
          {/* <div className="flex gap-4 py-3 animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              // Fragment == Template
              <Fragment key={idx}>
                {words.map(word => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div> */}

          {/* 
            第二种写法: 使用 framer-motion
          */}
          <motion.div
            className="flex gap-4 py-3"
            initial={{ x: 0 }}
            // animate 动画的开始状态
            animate={{ x: '-50%' }}
            // transition 动画的结束状态
            transition={{
              // duration 动画持续时间
              duration: 30,
              // repeat 动画重复次数
              repeat: Infinity,
              // repeatType 动画重复类型
              // loop 动画循环
              repeatType: 'loop',
              // ease 动画缓动函数
              ease: 'linear',
            }}
            style={{
              // willChange 动画性能优化
              willChange: 'transform',
            }}
          >
            {[1, 2].map((_, idx) => (
              <Fragment key={idx}>
                {words.map(word => (
                  <motion.div
                    key={word}
                    className="inline-flex gap-4 items-center"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <span className="text-gray-900 font-extrabold text-sm whitespace-nowrap">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </motion.div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
