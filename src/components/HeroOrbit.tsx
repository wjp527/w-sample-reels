import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export const HeroOrbit = ({
  // 要渲染的内容
  children,
  // 星星大小
  size,
  // 星星选准角度
  rotation,
  // 是否旋转(周旋)
  shouldOrbit = false,
  // 旋转速度
  orbitDuration = '10s',
  // 是否旋转(自旋)
  shouldSpin = false,
  // 旋转速度
  spinDuration = '10s',
}: PropsWithChildren<{
  size: number
  rotation: number
  shouldOrbit?: boolean
  orbitDuration?: string
  shouldSpin?: boolean
  spinDuration?: string
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      {/* 
        [animation-duration:10s]: 中间不能携带空格
      */}
      <div
        className={twMerge(shouldOrbit == true && 'animate-spin')}
        style={{
          animationDuration: `${orbitDuration}`,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(shouldSpin == true && 'animate-spin')}
            style={{
              animationDuration: `${spinDuration}`,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
