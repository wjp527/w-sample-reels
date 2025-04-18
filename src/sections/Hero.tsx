'use client'
// import { useScroll } from '@/context/ScrollContext'
// nuxt image
import Image from 'next/image'
import grainImage from '@/assets/images/grain.jpg'
// 引入图片
import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'

// 星星旋转组件，封装在HeroOrbit.tsx中
import { HeroOrbit } from '@/components/HeroOrbit'

export const HeroSection = () => {
  /**
   * 自动滚动到下一个区域
   */
  const handleScroll = () => {
    // 获取到对应区域的id
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      // 获取到对应区域距离顶部浏览器的距离
      const offset = projectsSection.offsetTop - 100 // 减去一些偏移量，使滚动更自然
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* 
        [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]:
        渐变遮罩，从上到下透明度逐渐增加，然后在底部达到70%的黑色，最后回到100%的透明。
      */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/* 
      
        shadow-[0_0_80px_inset]: 阴影效果，阴影大小为80px，而且是内阴影。
        shadow-emerald-300/5: 阴影颜色为emerald-300的透明度版本，这里是半透明的。
      */}
        <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>

        {/* 星星旋转的角度 */}
        {/* 星星(亮)) */}
        <HeroOrbit size={800} rotation={-60} shouldOrbit orbitDuration={'30s'} shouldSpin spinDuration={'6s'}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration={'32s'} shouldSpin spinDuration={'6s'}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration={'34s'} shouldSpin spinDuration={'6s'}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={890} rotation={-90} shouldOrbit orbitDuration={'34s'} shouldSpin spinDuration={'6s'}>
          <StarIcon className="size-18 text-emerald-300" />
        </HeroOrbit>

        {/* 星星(暗) */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration={'36s'} shouldSpin spinDuration={'6s'}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration={'38s'} shouldSpin spinDuration={'6s'}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration={'40s'} shouldSpin spinDuration={'6s'}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration={'42s'} shouldSpin spinDuration={'6s'}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        {/* 圆 */}
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={'44s'} shouldSpin spinDuration={'5'}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={'46s'} shouldSpin spinDuration={'5'}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={'48s'} shouldSpin spinDuration={'5'}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4   rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              {/* 
                animate-ping-large: 定义了一个动画，使其在更大的尺寸下看起来像是“ping”效果。 
              */}
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Availabel fro nenw projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md-text-5xl text-center mt-8 tracking-wide">π's的作品集</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">我专注于将精美设计转化为功能完备且高效能的网页应用。欢迎与我讨论您下一个项目的构思,下面是我的一些作品,请浏览.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-50">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-colors" onClick={handleScroll}>
            <span className="font-semibold">开始探索</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <a href="https://github.com/wjp527" className="inline-flex items-center gap-2 w-full h-full" target="_blank">
              <span>✨</span>
              <span>联系我</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
