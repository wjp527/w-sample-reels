'use client'
import { motion, useAnimationControls } from 'framer-motion'
import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png'
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png'
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png'
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png'
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png'
import { SectionHeader } from '@/components/SectionHeader'
import Image from 'next/image'
import grainImage from '@/assets/images/grain.jpg'
import { Card } from '@/components/Card'
import { Fragment } from 'react'

const testimonials = [
  {
    name: '积分商城',
    position: '公司项目',
    text: '这是一个在线的积分购物商城项目，可以进行商品的浏览，购买，等功能物流!',
    avatar: memojiAvatar1,
    link: 'https://github.com/wjp527',
  },
  {
    name: '聚合搜索',
    position: '个人项目',
    text: '不仅仅是一个简单的搜索项目，他集成了 ElasticSearch 实现了强大的搜索功能！',
    avatar: memojiAvatar2,
    link: 'https://github.com/wjp527/wSo-fronted',
  },
  {
    name: '伙伴匹配系统',
    position: '个人项目',
    text: '让更多的用户可以找到与自己志同道合的伙伴,在该平台中可以进行加入队伍，发布文章，也可以进行私聊等功能。技术栈: 前端: Vue3 + Vant4 + pinia + Vue-Router + WebSocket,后端: SpringBoot2 + MyBatis Plus + Redis + Knife4j + WebSocket.',
    avatar: memojiAvatar3,
    link: 'https://github.com/wjp527/wpao-frontend',
  },
]

export function TestimonialsSection() {
  const controls = useAnimationControls()
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        {/* */}
        {/*  */}
        <SectionHeader eyebrow="What Clients Say About Me" title="其他的项目" description="Don't just take my word for it. See what my clients have to say about my work." />

        {/* 
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]:   
          这是一个CSS属性，用于创建一个遮罩效果。它定义了一个渐变图像，该图像沿着水平方向从透明过渡到10%的黑色，再到90%的黑色，最后 再过渡回透明。
        */}
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex-shrink-0 py-4 -my-4">
          <div className="flex flex-none gap-8">
            <motion.div
              className="flex gap-14 hover:[animation-play-state:paused]"
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
              whileHover={{
                x: 'current', // 这会在当前位置暂停
              }}
              style={{
                willChange: 'transform',
              }}
            >
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {testimonials.map(testimonial => (
                    <Card key={testimonial.name} className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
                      <a href={testimonial.link} target="_blank">
                        <div className="flex gap-4 items-center">
                          <div className="size-14 bg-gray-700 inline-flex justify-center items-center rounded-full">
                            <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                          </div>
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-white/40">{testimonial.position}</div>
                          </div>
                        </div>
                        <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                      </a>
                    </Card>
                  ))}
                </Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
