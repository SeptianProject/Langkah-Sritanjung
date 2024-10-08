type TextHeaderProps = {
     headerItems: {
          item: {
               title: string
               description: string
          }
     }
}

const TextHeader = ({ headerItems }: TextHeaderProps) => {
     return (
          <div className='text-white flex flex-col gap-y-2'>
               <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl'>
                    {headerItems.item.title}
               </h1>
               <p className='w-80 text-base font-extralight tracking-wide sm:w-[30rem] md:text-lg md:w-[31rem] lg:text-2xl lg:w-[45rem] lg:tracking-wider'>
                    {headerItems.item.description}
               </p>
          </div>
     )
}

export default TextHeader