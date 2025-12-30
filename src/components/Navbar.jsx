import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

// 1. Contexts Import
import { useCart } from '../Context/CartContext'; 
import { useAuth } from '../Context/AuthContext'; // 

// Icons
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch, IoChevronDownOutline, IoPerson } from "react-icons/io5"; 
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { FaSignOutAlt } from "react-icons/fa"; 

const Navbar = () => {
    
    const [showMenu, setShowMenu] = useState(false);
    const [showAuthDropdown, setShowAuthDropdown] = useState(false);

    // --- CONTEXT DATA ---
    const { cart, setSearchQuery } = useCart(); //for Cart/Search Data
    const { user, logout } = useAuth(); // for User Data & Logout Function

    const navigate = useNavigate();

    // --- HANDLERS ---
    const toggleMenu = () => setShowMenu(!showMenu);

    const closeMenu = () => {
        setShowMenu(false);
        setShowAuthDropdown(false);
    }

    // Search Logic 
    const handleSearch = (e) => {
        const text = e.target.value;
        setSearchQuery(text);
        if (text.trim().length > 0) {
            navigate('/products');
        }
    };

    // Logout Logic 
    const handleLogout = () => {
        logout();       // 1. clear data from context
        closeMenu();    // 2. close the menu 
        navigate('/login'); // 3. render to loginPage
    };

    // Active Link Style
    const activeLinkClass = ({ isActive }) => 
        isActive 
        ? "font-bold tracking-wider text-blue-600 cursor-pointer transition-colors"
        : "font-semibold tracking-wider text-zinc-800 hover:text-blue-700 cursor-pointer transition-colors";

    return (
        <>
            <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-gray-100">
                <nav className="flex justify-between items-center max-w-[1400px] mx-auto h-[12vh] md:h-[14vh] px-4 md:px-10 relative">

                    {/* Logo */}
                    <Link to="/" className="text-3xl font-bold shrink-0" onClick={closeMenu}>
                        sho<span className="text-blue-600">P</span>via
                    </Link>

                    {/* Desktop Nav Links */}
                    <ul className="hidden lg:flex items-center gap-x-8">
                        <li><NavLink to="/" className={activeLinkClass}>HOME</NavLink></li>
                        <li><NavLink to="/about" className={activeLinkClass}>About Us</NavLink></li>
                        <li><NavLink to="/products" className={activeLinkClass}>Products</NavLink></li>
                        <li><NavLink to="/help" className={activeLinkClass}>Help</NavLink></li>
                    </ul>

                    {/* Right Section */}
                    <div className="flex items-center gap-x-3 md:gap-x-5">

                        {/* --- SEARCH BAR --- */}
                        <div className="hidden md:flex items-center p-1 border border-zinc-200 focus-within:border-blue-500 rounded-full bg-white transition-all">
                            <input
                                type="text"
                                placeholder="Search products..."
                                onChange={handleSearch}
                                className="px-3 h-[5vh] focus:outline-none w-32 lg:w-48 bg-transparent text-sm"
                            />
                            <button className="bg-blue-600 text-white flex items-center justify-center w-10 h-10 rounded-full text-lg hover:bg-blue-700 transition-colors">
                                <IoSearch />
                            </button>
                        </div>

                        {/* --- ACCOUNT DROPDOWN  --- */}
                        <div className="hidden md:block relative">
                            <button 
                                onClick={() => setShowAuthDropdown(!showAuthDropdown)}
                                className="flex items-center gap-2 font-bold text-zinc-700 hover:text-blue-600 py-2 px-1 transition-colors outline-none"
                            >
                                {user ? (
                                    // LOGIC for AvaTAR if user login
                                    <>
                                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm shadow-md font-bold">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                                        <IoChevronDownOutline className={`transition-transform duration-300 ${showAuthDropdown ? "rotate-180" : ""}`} />
                                    </>
                                ) : (
                                    // LOGIC for showing account icon if user logout
                                    <>
                                        <IoPerson className="text-xl" />
                                        <span>Account</span>
                                        <IoChevronDownOutline className={`transition-transform duration-300 ${showAuthDropdown ? "rotate-180" : ""}`} />
                                    </>
                                )}
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-[120%] right-0 w-56 bg-white border border-gray-100 shadow-xl rounded-2xl p-2 transition-all duration-300 origin-top z-50
                                ${showAuthDropdown ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"}`}>
                                
                                {user ? (
                                    // LOGGED IN MENU
                                    <>
                                        <div className="px-4 py-3 border-b border-gray-50 mb-2">
                                            <p className="text-xs text-zinc-400 font-bold uppercase">Signed in as</p>
                                            <p className="text-sm font-bold text-zinc-800 truncate">{user.email}</p>
                                        </div>
                                        <button 
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-3 hover:bg-red-50 hover:text-red-600 rounded-xl font-semibold transition-colors text-sm flex items-center gap-2 text-red-500"
                                        >
                                            <FaSignOutAlt /> Logout
                                        </button>
                                    </>
                                ) : (
                                    // LOGGED OUT MENU
                                    <>
                                        <Link to="/login" onClick={closeMenu} className="block w-full text-left p-3 hover:bg-blue-50 hover:text-blue-600 rounded-xl font-semibold transition-colors text-sm">
                                            Login
                                        </Link>
                                        <Link to="/register" onClick={closeMenu} className="block w-full text-left p-3 hover:bg-blue-50 hover:text-blue-600 rounded-xl font-semibold transition-colors border-t border-zinc-50 mt-1 text-sm">
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Icons Section */}
                        <div className="flex items-center gap-x-4 text-2xl text-zinc-700">
                            {/* Wishlist */}
                            <Link to="/wishlist" className="hover:text-red-500 transition-colors"><GoHeartFill /></Link>
                            
                            {/* Cart */}
                            <Link to="/cart" className="relative hover:text-blue-600 transition-colors">
                                <HiShoppingBag />
                                {cart.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                        {cart.length}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* Hamburger Button */}
                        <button className="text-zinc-800 text-3xl flex items-center lg:hidden" onClick={toggleMenu}>
                            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                        </button>
                    </div>

                    {/* --- MOBILE MENU  --- */}
                    <div
                        className={`lg:hidden absolute top-[100%] left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-y-6 transition-all duration-300 origin-top z-40
                        ${showMenu ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"}`}
                    >
                        {/* Mobile User Greeting  */}
                        {user && (
                            <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
                                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-400">Welcome,</p>
                                    <p className="font-bold text-zinc-800">{user.name}</p>
                                </div>
                            </div>
                        )}

                        <ul className="flex flex-col items-center gap-y-4">
                            <li><NavLink to="/" onClick={toggleMenu} className={({isActive}) => isActive ? "font-bold text-blue-600" : "font-bold text-zinc-700"}>HOME</NavLink></li>
                            <li><NavLink to="/about" onClick={toggleMenu} className={({isActive}) => isActive ? "font-bold text-blue-600" : "font-bold text-zinc-700"}>About Us</NavLink></li>
                            <li><NavLink to="/products" onClick={toggleMenu} className={({isActive}) => isActive ? "font-bold text-blue-600" : "font-bold text-zinc-700"}>Products</NavLink></li>
                            <li><NavLink to="/help" onClick={toggleMenu} className={({isActive}) => isActive ? "font-bold text-blue-600" : "font-bold text-zinc-700"}>Help</NavLink></li>
                        </ul>
                        
                        {/* Mobile Search */}
                        <div className="flex md:hidden items-center p-1 border border-zinc-200 focus-within:border-blue-500 rounded-full bg-white transition-all w-full">
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={handleSearch}
                                className="px-3 h-[5vh] focus:outline-none w-full bg-transparent text-sm"
                            />
                            <button className="bg-blue-600 text-white flex items-center justify-center w-10 h-10 rounded-full text-lg">
                                <IoSearch />
                            </button>
                        </div>

                        {/* Mobile Auth Buttons  */}
                        <div className="flex flex-col gap-y-3 w-full border-t border-zinc-100 pt-4">
                            {user ? (
                                // MOBILE: if user login show logout
                                <button 
                                    onClick={handleLogout} 
                                    className="block w-full text-center py-3 bg-red-50 text-red-600 border border-red-100 rounded-xl font-bold flex items-center justify-center gap-2"
                                >
                                    <FaSignOutAlt /> Logout
                                </button>
                            ) : (
                                // MOBILE: if user logout show login or register
                                <>
                                    <Link to="/login" onClick={toggleMenu} className="block w-full text-center py-3 bg-gray-100 rounded-xl font-bold text-zinc-800">
                                        Login
                                    </Link>
                                    <Link to="/register" onClick={toggleMenu} className="block w-full text-center py-3 bg-blue-600 text-white rounded-xl font-bold shadow-md shadow-blue-200">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar;