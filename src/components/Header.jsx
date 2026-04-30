import React, { useState, useRef, useEffect } from 'react';
import NavbarItem from '../dropDownMenus/NavbarItem';
import Elivery from "../images/Elivery.png";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';

// ── User avatar dropdown menu items ─────────────────────────────
const MENU_ITEMS = [
    { icon: '👤', label: 'My Profile',   to: '/profile' },
    { icon: '⚙️', label: 'Settings',     to: '/settings' },
    { icon: '🔍', label: 'Track Order',  to: '/track-order' },
    { icon: '📦', label: 'History',      to: '/history' },
    { icon: '💰', label: 'Pricing',      to: '/Pricing' },
    { icon: '🚀', label: 'Generate Shipment', to: '/generate-shipment' },
    { icon: '🧮', label: 'Rate Calculator', to: '/resources/shipping-rate-calculator' },
];

// ── Avatar: shows photo or initial initial ──────────────────────
const Avatar = ({ user, size = 8 }) => {
    const s = `w-${size} h-${size}`;
    if (user?.photoURL) {
        return (
            <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className={`${s} rounded-full object-cover border-2 border-white shadow-md`}
                referrerPolicy="no-referrer"
            />
        );
    }
    const initial = (user?.displayName || user?.email || 'U')[0].toUpperCase();
    return (
        <div className={`${s} rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-md`}>
            {initial}
        </div>
    );
};

const Header = () => {
    const { currentUser, signOut } = useAuth();
    const navigate = useNavigate();

    const [isMenu, setisMenu]               = useState(false);
    const [openProducts, setOpenProducts]   = useState(false);
    const [openPlatform, setOpenPlatform]   = useState(false);
    const [dropdownOpen, setDropdownOpen]   = useState(false);
    const dropdownRef                        = useRef(null);

    const liClass    = "text-sm text-gray-800 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-100 ease-in-out px-4 py-2 rounded-md";
    const subLiClass = "text-xs text-gray-600 cursor-pointer hover:text-blue-600 px-4 py-1.5 pl-6";
    const headingClass = "flex items-center justify-between text-sm font-medium text-gray-800 cursor-pointer hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-md transition-all";

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleLogout = async () => {
        setDropdownOpen(false);
        setisMenu(false);
        await signOut();
        navigate('/');
    };

    return (
        <header className="fixed w-screen bg-blue-700 z-10">
            {/* ── Desktop & Tablet ──────────────────────────────────── */}
            <div className="hidden w-full h-auto my-0 lg:my-1 px-2 lg:px-6 md:h-auto md:flex lg:flex items-center justify-evenly">
                <Link to="/">
                    <div className="flex items-center gap-1 lg:gap-2 text-2xl lg:text-3xl capitalize text-white">
                        <img src={Elivery} alt="" className="w-10 lg:w-14 h-10 lg:h-12 my-1 md:mx-0 lg:mx-1" />
                        Elivery
                    </div>
                </Link>

                <NavbarItem />

                {/* Auth area */}
                <div className="flex items-center justify-center my-0 lg:my-1 gap-3">
                    {currentUser ? (
                        /* ── Logged-in: avatar + dropdown ── */
                        <div className="relative" ref={dropdownRef}>
                            <button
                                id="avatar-btn"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 hover:opacity-90 transition-opacity"
                            >
                                <Avatar user={currentUser} size={9} />
                                <svg className={`w-3 h-3 text-white transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown */}
                            {dropdownOpen && (
                                <div className="absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-fadeIn">
                                    {/* User info */}
                                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                                        <Avatar user={currentUser} size={10} />
                                        <div className="min-w-0">
                                            <p className="font-semibold text-gray-800 text-sm truncate">
                                                {currentUser.displayName || 'User'}
                                            </p>
                                            <p className="text-xs text-gray-400 truncate">
                                                {currentUser.email || currentUser.phoneNumber}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Menu items */}
                                    <div className="py-1">
                                        {MENU_ITEMS.map((item) => (
                                            <Link key={item.to} to={item.to} onClick={() => setDropdownOpen(false)}>
                                                <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-pointer text-gray-700">
                                                    <span className="text-base">{item.icon}</span>
                                                    <span className="text-sm font-medium">{item.label}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Logout */}
                                    <div className="border-t border-gray-100 pt-1 mt-1">
                                        <button
                                            id="logout-btn"
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 hover:text-red-600 transition-all text-gray-500 cursor-pointer"
                                        >
                                            <span className="text-base">🚪</span>
                                            <span className="text-sm font-medium">Sign Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* ── Logged-out: Login + Try for free ── */
                        <>
                            <Link to="/Login">
                                <div className="text-white mx-3 lg:mx-4 text-sm lg:text-base cursor-pointer hover:underline">Login</div>
                            </Link>
                            <Link to="/Login">
                                <div className="flex items-center justify-center bg-white text-center text-black w-20 lg:w-24 h-6 lg:h-8 text-sm lg:text-base border border-white rounded-md hover:bg-blue-600 hover:text-white active:ring-white focus:ring-slate-50 cursor-pointer transition-all">
                                    Try for free
                                </div>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* ── Mobile ───────────────────────────────────────────── */}
            <div className="flex justify-between items-center md:hidden w-full h-full px-4 py-2 relative">
                <Link to="/">
                    <div className="flex items-center gap-2 text-xl capitalize text-white">
                        <img src={Elivery} alt="" className="w-8 h-8" />
                        Elivery
                    </div>
                </Link>

                <div className="flex items-center gap-3">
                    {/* Mobile avatar (when logged in) */}
                    {currentUser && (
                        <button onClick={() => setisMenu(!isMenu)}>
                            <Avatar user={currentUser} size={8} />
                        </button>
                    )}

                    {/* Hamburger */}
                    <div
                        className="flex flex-col justify-center items-center gap-[5px] cursor-pointer p-2"
                        onClick={() => setisMenu(!isMenu)}
                    >
                        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenu ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenu ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenu ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenu && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-2xl flex flex-col py-3 z-50 max-h-[85vh] overflow-y-auto">
                        <ul className="flex flex-col gap-1 px-2">

                            {/* If logged in — show user info + menu items */}
                            {currentUser && (
                                <li className="flex items-center gap-3 px-4 py-3 mb-1 bg-blue-50 rounded-xl mx-1">
                                    <Avatar user={currentUser} size={10} />
                                    <div className="min-w-0">
                                        <p className="font-semibold text-gray-800 text-sm truncate">{currentUser.displayName || 'User'}</p>
                                        <p className="text-xs text-gray-400 truncate">{currentUser.email || currentUser.phoneNumber}</p>
                                    </div>
                                </li>
                            )}

                            <Link to="/track-order" onClick={() => setisMenu(false)}>
                                <li className={liClass}>🔍 Track Orders</li>
                            </Link>
                            <Link to="/Pricing" onClick={() => setisMenu(false)}>
                                <li className={liClass}>Pricing</li>
                            </Link>

                            {currentUser && MENU_ITEMS.filter(i => !['/track-order', '/Pricing'].includes(i.to)).map(item => (
                                <Link key={item.to} to={item.to} onClick={() => setisMenu(false)}>
                                    <li className={liClass}>{item.icon} {item.label}</li>
                                </Link>
                            ))}

                            {/* Products submenu */}
                            <li>
                                <div className={headingClass} onClick={() => setOpenProducts(!openProducts)}>
                                    <span>Products</span>
                                    <span className="text-lg">{openProducts ? '−' : '+'}</span>
                                </div>
                                {openProducts && (
                                    <ul className="flex flex-col mt-1 mb-1 border-l-2 border-blue-200 ml-4">
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>Ecommerce Shipping</li>
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>Warehouse</li>
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>B2B Shipping</li>
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>Hyperlocal</li>
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>Intercity Delivery</li>
                                        <li>
                                            <div
                                                className="flex items-center justify-between text-xs font-medium text-gray-700 cursor-pointer hover:text-blue-600 px-4 py-1.5 pl-6"
                                                onClick={(e) => { e.stopPropagation(); setOpenPlatform(!openPlatform); }}
                                            >
                                                <span>Platform</span>
                                                <span>{openPlatform ? '−' : '+'}</span>
                                            </div>
                                            {openPlatform && (
                                                <ul className="flex flex-col border-l-2 border-blue-100 ml-8">
                                                    <li className="text-xs text-gray-500 cursor-pointer hover:text-blue-600 px-4 py-1 pl-6" onClick={() => setisMenu(false)}>Cash on Delivery</li>
                                                    <li className="text-xs text-gray-500 cursor-pointer hover:text-blue-600 px-4 py-1 pl-6" onClick={() => setisMenu(false)}>Multiple Pick Up Point</li>
                                                    <li className="text-xs text-gray-500 cursor-pointer hover:text-blue-600 px-4 py-1 pl-6" onClick={() => setisMenu(false)}>Email & SMS Notification</li>
                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Auth actions */}
                            <li className="mt-3 px-2 flex flex-col gap-2">
                                {currentUser ? (
                                    <button
                                        id="mobile-logout-btn"
                                        onClick={handleLogout}
                                        className="w-full text-center bg-red-500 text-white rounded-md py-2 text-sm font-medium hover:bg-red-600 transition-all"
                                    >
                                        🚪 Sign Out
                                    </button>
                                ) : (
                                    <>
                                        <Link to="/Login" onClick={() => setisMenu(false)}>
                                            <div className="w-full text-center text-blue-600 border border-blue-600 rounded-md py-2 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all">Login</div>
                                        </Link>
                                        <Link to="/Login" onClick={() => setisMenu(false)}>
                                            <div className="w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-700 transition-all">Try for free</div>
                                        </Link>
                                    </>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;