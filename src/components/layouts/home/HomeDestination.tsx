import { useState } from 'react'
import CardBasic from '../../fragments/cards/CardBasic'
import TextGroup from '../../elements/text/TextGroup'
import DropdownButton from '../../fragments/dropdowns/DropdownButton'
import CardHomestay from '../cards/CardHomestay'

const HomeDestination = () => {
     const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

     const handleDropdownOpen = () => {
          setDropdownOpen(!dropdownOpen)
     }

     return (
          <>
               {/* Card Bento grid */}
               <div className='flex flex-col gap-y-14 items-center lg:min-h-screen'>
                    <h1 className='text-xl xs:text-2xl font-bold w-80 xs:w-96 text-center 
                    md:text-3xl md:w-96 lg:text-3xl lg:w-[30rem]'>
                         Destinasi Wisata Terfavorit Bulan Ini
                    </h1>
                    <CardBasic />
               </div>
               {/* Cardtext blue Dropdown */}
               <div className='lg:min-h-full lg:w-full px-10 lg:mt-10'>
                    <div className='relative bg-blueCard bg-opacity-20 
                    w-full h-60 lg:h-80
                    rounded-2xl py-5 px-2 sm:px-5'>
                         <TextGroup />
                         <DropdownButton dropdownOpen={dropdownOpen} handleDropdownOpen={handleDropdownOpen} />
                    </div>
               </div>
               {/* Homestay Card */}
               <div className={`lg:min-h-screen px-10 lg:mt-20 ${dropdownOpen ? 'mt-60' : 'mt-0'} transition-all duration-300`}>
                    <CardHomestay />
               </div>
          </>
     )
}

export default HomeDestination