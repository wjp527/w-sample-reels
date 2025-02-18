import { twMerge } from 'tailwind-merge'
import { TechIcon } from './TechIcon'

export const ToolboxItems = ({
  toolboxItems,
  className,
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
  return (
    <div className={twMerge('flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]', className)}>
      <div className={twMerge('flex flex-none py-0.5 gap-6 pr-6', itemsWrapperClassName)}>
        {toolboxItems.map(item => (
          <div key={item.id} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
            <TechIcon component={item.iconType} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
