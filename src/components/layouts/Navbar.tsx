import { useEffect, useRef, useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import NavItem from '../elements/NavItem'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<string>('')
    const closeRef = useRef<HTMLDivElement>(null)
    const location = useLocation()

    const handleMobileDisplay = () => {
        const isMobileView = window.innerWidth <= 640
        setIsMobile(isMobileView)
        if (!isMobileView) {
            setSelectedItem('')
        }
    }

    useEffect(() => {
        handleMobileDisplay()
        window.addEventListener('resize', handleMobileDisplay)
        return () => {
            window.removeEventListener('resize', handleMobileDisplay)
        }
    }, [])

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleClickOutside = (e: MouseEvent) => {
        if (closeRef.current && !closeRef.current.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        setIsOpen(false)
        setSelectedItem('')
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [location.pathname])

    const handleSetSelectedItem = (item: string) => {
        setSelectedItem(item)
        if (isMobile) {
            setIsOpen(false)
        }
    }

    return (
        <nav ref={closeRef} className={`max-w-full w-full h-10 flex 
            items-center gap-x-6 p-10 absolute z-50 md:py-12 md:px-20
            ${isMobile ? 'justify-between' : 'justify-start'}`}>
            {isMobile ? (
                <div className=''>
                    {isOpen ? (
                        <>
                            <BiX
                                onClick={handleIsOpen}
                                className='size-10 text-white' />
                            <div className='relative w-32 '>
                                <div className='absolute top-2 flex flex-col text-start w-full overflow-hidden 
                                bg-white shadow-lg shadow-secondary rounded-bl-xl rounded-tr-xl'>
                                    <NavItem selectedItem={selectedItem} setIsOpen={setIsOpen}
                                        setSelectedItem={handleSetSelectedItem}
                                        isMobile={isMobile} select='' unSelect='text-tertiary'
                                        className='text-xs font-medium hover:text-white 
                                    hover:bg-secondary h-full py-3'/>
                                </div>
                            </div>
                        </>) :
                        (<BiMenu
                            onClick={handleIsOpen}
                            className='size-10 text-white' />
                        )}
                </div>
            ) : (<div className='hidden sm:flex gap-x-6'>
                <NavItem setIsOpen={setIsOpen}
                    selectedItem={selectedItem}
                    setSelectedItem={handleSetSelectedItem}
                    isMobile={isMobile} />
            </div>
            )}
        </nav>
    )
}

export default Navbar