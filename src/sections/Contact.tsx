import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
export function ContactSection() {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">新的事物</h2>
              <p className="text-sm md:text-base mt-2">通过Github或Gitee联系我。我总是对新的机会和合作持开放态度！</p>
            </div>

            <div>
              {/*  
                w-max 是一个 CSS 类，用于设置元素的宽度为其内容的最大宽度。这意味着该元素将尽可能窄，只包含其内部内容所需的宽度。
              */}
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900">
                <a href="https://github.com/wjp527" target="_blank" className="flex gap-2 items-center">
                  <span className="font-semibold">联系我</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
