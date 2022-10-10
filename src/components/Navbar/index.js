/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './index.css';
// import Nav from 'react-bootstrap/Nav';
// import Badge from 'react-bootstrap/Badge';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

function login() {
    alert("功能開發中尚不可使用")
}

function NavBar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="bg-gray-800 px-4 py-3">
                <div className="flex justify-between item-center">
                    <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
                        {/* <img width="50PX" src='/logo.png' alt="logo" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot h-8 w-8 mr-2" width="50" height="50" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                            <path d="M10 16h4"></path>
                            <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
                            <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
                            <path d="M9 7l-1 -4"></path>
                            <path d="M15 7l1 -4"></path>
                        </svg>
                        <span className="font-semibold text-xl tracking-tight">MDHS K1D1</span>
                    </a>
                    <div className="hidden md:flex gap-2">
                        <a href="/" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5">{ /* bg-gray-900 text-white px-5 py-3 rounded-md */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                            </svg>
                            首頁
                        </a>
                        <a href="/course" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                <line x1="16" y1="3" x2="16" y2="7"></line>
                                <line x1="8" y1="3" x2="8" y2="7"></line>
                                <line x1="4" y1="11" x2="20" y2="11"></line>
                                <rect x="8" y="15" width="2" height="2"></rect>
                            </svg>
                            班級課表
                        </a>
                        <a href="/people" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            人物趣事
                        </a>
                        <a href="/note" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notes" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="5" y="3" width="14" height="18" rx="2"></rect>
                                <line x1="9" y1="7" x2="15" y2="7"></line>
                                <line x1="9" y1="11" x2="15" y2="11"></line>
                                <line x1="9" y1="15" x2="13" y2="15"></line>
                            </svg>
                            班級記事
                        </a>
                        <a href="/test" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="7 8 3 12 7 16"></polyline>
                                <polyline points="17 8 21 12 17 16"></polyline>
                                <line x1="14" y1="4" x2="10" y2="20"></line>
                            </svg>
                            測試頁面
                        </a>
                    </div>
                    <div className="flex gap-4">
                        {/* <a href="#" className="text-gray-400 py-3 px-2 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="10" cy="10" r="7"></circle>
                                <line x1="21" y1="21" x2="15" y2="15"></line>
                            </svg>
                        </a> */}
                        {/* <a href="#" className="text-gray-400 py-3 px-2 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6">
                                </path>
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                            </svg>
                        </a> */}
                        <button className="text-gray-400 py-3 px-2 hover:text-gray-200 block md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </svg>
                        </button>
                        <a className="block bg-blue-600 text-gray-200 px-4 py-3 rounded-md hover:bg-blue-600/80 hover:text-gray-200" onClick={login}>
                            登入
                        </a>
                    </div>
                </div>
                <div className={(navbarOpen ? "" : " hidden")}>
                    <div className="flex flex-col gap-1 py-3">
                        <a href="/" className="text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex md:py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                            </svg>
                            首頁
                        </a>
                        <a href="/course" className="text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                <line x1="16" y1="3" x2="16" y2="7"></line>
                                <line x1="8" y1="3" x2="8" y2="7"></line>
                                <line x1="4" y1="11" x2="20" y2="11"></line>
                                <rect x="8" y="15" width="2" height="2"></rect>
                            </svg>
                            班級課表
                        </a>
                        <a href="/people" className="text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            人物趣事
                        </a>
                        <a href="/note" className="text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notes" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="5" y="3" width="14" height="18" rx="2"></rect>
                                <line x1="9" y1="7" x2="15" y2="7"></line>
                                <line x1="9" y1="11" x2="15" y2="11"></line>
                                <line x1="9" y1="15" x2="13" y2="15"></line>
                            </svg>
                            班級記事
                        </a>
                        <a href="/test" className="text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="7 8 3 12 7 16"></polyline>
                                <polyline points="17 8 21 12 17 16"></polyline>
                                <line x1="14" y1="4" x2="10" y2="20"></line>
                            </svg>
                            測試頁面
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;