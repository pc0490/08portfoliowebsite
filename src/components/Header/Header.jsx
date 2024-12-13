import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-black border-b border-gray-800 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center animate-fadeIn">
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                            Portfolio Website
                        </span>
                    </Link>
                    
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-cyan-400" : "text-gray-300"
                                        } hover:text-cyan-400 hover:scale-110 hover:rotate-2 transition-all duration-300 ease-in-out lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-cyan-400" : "text-gray-300"
                                        } hover:text-cyan-400 hover:scale-110 hover:rotate-2 transition-all duration-300 ease-in-out lg:p-0`
                                    }
                                >
                                    GitHub API
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}