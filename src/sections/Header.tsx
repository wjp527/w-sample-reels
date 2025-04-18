'use client'
import { useState, useEffect } from 'react'

export function Header() {
  // 使用 state 跟踪当前活动的区域
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    /**
     * 节流函数 - 限制函数调用频率
     * @param func 需要节流的函数
     * @param limit 时间间隔（毫秒）
     * @returns 节流后的函数
     */
    const throttle = (func: Function, limit: number) => {
      let inThrottle: boolean
      return function (this: any, ...args: any[]) {
        if (!inThrottle) {
          func.apply(this, args)
          inThrottle = true
          setTimeout(() => (inThrottle = false), limit)
        }
      }
    }

    /**
     * 处理滚动事件，更新当前活动区域
     */
    const handleScroll = () => {
      // 定义所有区域的 ID
      const sections = ['home', 'projects', 'about', 'contact']

      // 获取所有区域的位置信息
      const sectionPositions = sections.map(id => {
        const element = document.getElementById(id)
        if (!element) return { id, top: 0 }
        const rect = element.getBoundingClientRect()
        return {
          id,
          top: rect.top,
        }
      })

      // 找到距离视口顶部最近的区域
      // 使用 reduce 比较每个区域到视口顶部的距离，返回最近的一个
      const currentSection = sectionPositions.reduce((closest, current) => {
        if (Math.abs(current.top - 100) < Math.abs(closest.top - 100)) {
          return current
        }
        return closest
      })

      // 更新活动区域状态
      setActiveSection(currentSection.id)
    }

    // 创建节流后的滚动处理函数，每 100ms 最多执行一次
    const throttledHandleScroll = throttle(handleScroll, 100)

    // 添加滚动事件监听器
    window.addEventListener('scroll', throttledHandleScroll)
    // 初始调用一次以设置初始状态
    handleScroll()

    // 组件卸载时清理事件监听器
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, []) // 空依赖数组表示只在组件挂载时运行一次

  /**
   * 处理导航链接点击事件
   * @param elementId 目标区域的 ID
   */
  const handleClick = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      // 计算滚动位置
      const offset = 100 // 顶部偏移量，可调整
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      // 执行平滑滚动
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      // 更新活动区域
      setActiveSection(elementId)
    }
  }

  // 导航项配置
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="flex justify-center items-center fixed top-3 z-10 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={e => {
              e.preventDefault() // 阻止默认的锚点跳转
              handleClick(id)
            }}
            className={`nav-item px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === id ? 'bg-white text-gray-900' : 'hover:bg-white/10'}`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}
