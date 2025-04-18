'use client'
import { twMerge } from 'tailwind-merge'
import { TechIcon } from './TechIcon'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
export const ToolboxItems = ({
  // 数据源
  toolboxItems,
  // 额外的类名
  className,
  // 额外的类名
  itemsWrapperClassName,
}: {
  toolboxItems: {
    id: number
    title: string
    iconType: React.ElementType
  }[]
  className?: string
  itemsWrapperClassName?: string
}) => {
  const isRightToLeft = itemsWrapperClassName?.includes('-translate-x-1/2')
  return (
    // [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]：这是一个CSS遮罩效果，用于在元素上创建一个渐变遮罩。它将透明度从左侧到右侧逐渐变化，开始时完全透明（10%的黑），然后过渡
    <div className={twMerge('flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]', className)}>
      <motion.div
        // 这里使用了twMerge来合并className和itemsWrapperClassName，确保了额外的类名也被正确应用。
        className={twMerge('flex flex-none py-0.5 gap-6 pr-6', itemsWrapperClassName)}
        // 这里使用了motion.div来创建动画效果，并通过initial、animate和transition属性定义了滚动动画。
        initial={{ x: isRightToLeft ? '-50%' : 0 }}
        animate={{ x: isRightToLeft ? 0 : '-50%' }}
        // 这里设置了动画的持续时间、重复次数和缓动函数，以及在鼠标悬停时暂停当前位置的效果。
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
        {[
          ...new Array(2).fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {toolboxItems.map(item => (
                <div key={item.id} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
