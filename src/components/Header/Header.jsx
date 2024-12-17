import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <header className={`fixed w-full top-0 z-50 flex justify-center transition-all duration-300 ${
            isScrolled ? 'backdrop-blur-md' : ''
        }`}>
            <nav className="px-6 py-3 bg-[#1A1A1A]/90 backdrop-blur-sm rounded-full mt-4">
                <div className="flex items-center space-x-8">
                    <NavLink
                        to="/"
                        onClick={scrollToTop}
                        className={({isActive}) =>
                            `text-base transition-colors duration-200 ${
                                isActive ? "text-white" : "text-gray-400"
                            } hover:text-white`
                        }
                    >
                        Home
                    </NavLink>
                    
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                            `text-base transition-colors duration-200 ${
                                isActive ? "text-white" : "text-gray-400"
                            } hover:text-white`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/github"
                        className={({isActive}) =>
                            `text-base transition-colors duration-200 ${
                                isActive ? "text-white" : "text-gray-400"
                            } hover:text-white`
                        }
                    >
                        Github
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}