import { useEffect, useState } from 'react'
import CardStack from './CardStack'

interface DestinasiWisata {
     id: number;
  attributes: {
    name: string;
    slug: string;
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
}

interface KategoriDetail {
     id: number;
  attributes: {
    name: string;
    slug: string;
    destinasi_wisatas: {
      data: DestinasiWisata[];
    }
  }
}

type itemProps = {
     detail: KategoriDetail | null
}

const CardHomestay = ({ detail }: itemProps) => {
     const [isDesktop, setIsDesktop] = useState<boolean>(false)

     const handleResize = () => {
          if (window.innerWidth >= 1024) {
               setIsDesktop(true)
          } else {
               setIsDesktop(false)
          }
     }

     useEffect(() => {
          handleResize()
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     })

     return (
          <div className='flex flex-col gap-y-10'>
               <CardStack detail={detail} />
               {
                    isDesktop &&
                    <CardStack detail={detail} />
               }
               <button className='text-white bg-primary w-32 mx-auto py-2 rounded-lg'>
                    Lainnya
               </button>
          </div>
     )
}

export default CardHomestay