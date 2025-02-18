export const SectionHeader = ({ title, eyebrow, description, ...props }: { title: string; eyebrow: string; description: string }) => {
  return (
    <>
      <div className="flex justify-center">
        {/* 
            text-transparent: 文本透明
            bg-clip-text: 背景裁剪文本
          */}
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{eyebrow}</p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">{description}</p>
    </>
  )
}
