import GithubIcon from '@/assets/icons/github.svg'
import { TechIcon } from '@/components/TechIcon'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
const footerLinks = [
  {
    id: 0,
    title: 'Github',
    href: 'https://github.com/wjp527',
    iconType: GithubIcon,
  },
  {
    id: 1,
    title: 'Gitee',
    href: 'https://gitee.com',
    iconType: GithubIcon,
  },
]
export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-hidden">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(item => {
              return (
                <div key={item.id} className="flex items-center">
                  {/* <TechIcon component={item.iconType} /> */}
                  <a key={item.id} href={item.href} className="inline-flex items-center">
                    <span className="font-semibold">{item.title}</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
              )
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
