"use client";

import { useState } from 'react';
import { useEffect } from "react";
import Link from 'next/link';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaWhatsapp,
    FaTwitter,
    FaBars,
    FaTimes
} from 'react-icons/fa';
import { IoSearchOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import Image from 'next/image';

export default function Header() {
   
    const [language, setLanguage] = useState('English');
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => setShowSearch(!showSearch);
    useEffect(() => {
        if (showSearch) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    
        // Clean up on unmount
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [showSearch]);
    return (
        <header className="w-full space-y-3 ">

            {/* Advertisement */}
            <div className="bg-white mb-4 text-center py-2 text-sm font-medium px-4 md:px-24">
                {/* Advertisement Space */}
            </div>

            {/* Language + Location + Social + Sign Up */}
            <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-24 py-3 bg-white border border-black space-y-3 md:space-y-0">

                <div className="flex flex-wrap md:flex-nowrap space-x-3 md:space-x-6 items-center justify-center md:justify-start">
                    <button className="hover:underline text-sm">हिन्दी</button>
                    <button className="hover:underline text-sm">English</button>
                    <button className="hover:underline text-sm">ગુજરાતી</button>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="rounded px-2 py-1 text-sm"
                    >
                        <option>हिन्दी</option>
                        <option>English</option>
                        <option>ગુજરાતી</option>
                    </select>
                    <div className="hidden md:block w-px h-6 bg-gray-300"></div>
                </div>

                <div className="font-semibold text-xl text-center md:text-left">Jaipur</div>

                <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end space-x-3 text-xl">
                    <div className="hidden md:block w-px h-6 bg-gray-300"></div>

                    <FaFacebook className="cursor-pointer text-3xl text-blue-600" />
                    <FaInstagram className="cursor-pointer text-3xl text-pink-500" />
                    <FaLinkedin className="cursor-pointer text-3xl text-blue-700" />
                    <FaYoutube className="cursor-pointer text-3xl text-red-600" />
                    <FaWhatsapp className="cursor-pointer text-3xl text-green-500" />
                    <FaTwitter className="cursor-pointer text-3xl text-blue-400" />
                    <button className="bg-[#002765] text-white px-6 md:px-10 py-1 rounded-full text-sm whitespace-nowrap">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Trending Bar */}
            <div className="bg-white px-4 md:px-24 mx-auto text-red-600 py-2 text-sm whitespace-nowrap overflow-x-auto">
                <strong className="text-black">Trending :</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            {/* Navigation Menu */}
            <nav className="bg-blue-900 text-white px-4 md:px-24 py-3 overflow-x-auto">
                <ul className="flex items-center space-x-6 md:space-x-10 text-md min-w-max">

                    <li><Link href="#"><FaBars /></Link></li>

                    <li onClick={toggleSearch} className="cursor-pointer">
                        {showSearch ? <FaTimes /> : <IoSearchOutline />}
                    </li>

                    <li className="relative group">
                        <Link href="/" className="flex gap-1 items-center">Home</Link>
                    </li>

                    <li className="relative group">
                        <Link href="#" className="flex gap-1 items-center">
                            State <TiArrowSortedDown />
                        </Link>
                        <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Cricket</Link></li>
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">MMA</Link></li>
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Football</Link></li>
                        </ul>
                    </li>

                    <li className="relative group">
                        <Link href="#" className="flex gap-1 items-center">
                            Business <TiArrowSortedDown />
                        </Link>
                        <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">League of Legends</Link></li>
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Dota 2</Link></li>
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">CS:GO</Link></li>
                        </ul>
                    </li>

                    <li className="relative group">
                        <Link href="#" className="flex gap-1 items-center">
                            Entertainment <TiArrowSortedDown />
                        </Link>
                        <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Live Scores</Link></li>
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Fixtures</Link></li>
                        </ul>
                    </li>

                    <li className="relative group">
                        <Link href="/sport" className="flex gap-1 items-center">
                            Sports <TiArrowSortedDown />
                        </Link>
                        <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">ATP</Link></li>
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">WTA</Link></li>
                        </ul>
                    </li>

                    <li className="relative group">
                        <Link href="#" className="flex gap-1 items-center">
                            Lifestyle <TiArrowSortedDown />
                        </Link>
                        <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Schedule</Link></li>
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Medal Table</Link></li>
                        </ul>
                    </li>

                    <li className="relative group">
                        <Link href="/Technology" className="flex gap-1 items-center">
                            Technology <TiArrowSortedDown />
                        </Link>
                        <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">International</Link></li>
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Domestic</Link></li>
                        </ul>
                    </li>

                    <li className="relative group">
                        <Link href="#" className="flex gap-1 items-center">
                            Election <TiArrowSortedDown />
                        </Link>
                        <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">More 1</Link></li>
                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">More 2</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            {showSearch && (
                <div className="fixed inset-0 z-40 bg-black/60 px-6 py-7"
                    style={{ top: '195px', overflowY: 'auto', height: '100vh' }}
                >
                    <div className="
                        absolute left-1/2 top-0 -translate-x-1/2
                        flex flex-col w-full max-w-6xl
                        bg-white shadow-2xl px-6 py-7 z-[101]
                        rounded
                      "
                        style={{ maxHeight: '100%', overflowY: 'auto' }}
                    >

                        <div className="flex w-full gap-4 relative">
                            <div className="flex items-center flex-grow bg-[#f5f5f5] rounded px-4">
                                <IoSearchOutline className="text-gray-400 text-xl" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="flex-grow bg-[#f5f5f5] outline-none px-2 py-3 text-gray-700 text-md h-12"
                                    autoFocus
                                />
                            </div>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 rounded text-md h-12 transition-colors shadow">
                                SEARCH
                            </button>
                        </div>

                        {/* Tag Row */}
                        <div className="flex flex-wrap gap-4 mt-7">
                            {[
                                'नेपाल Gen-Z रेवोलुशन', 'बिहार विधानसभा चुनाव 2025', 'बाढ़', 'शी जिनपिंग',
                                'रेसिप्रोकल टैरिफ', 'उत्तर प्रदेश', 'नेपाल', 'काठमांडू',
                                'केपी ओली', 'डोनाल्ड ट्रंप', 'नरेन्द्र मोदी'
                            ].map(tag => (
                                <button
                                    key={tag}
                                    className="border border-gray-300 rounded-full px-5 py-2 text-base font-normal bg-white hover:bg-gray-100 transition whitespace-nowrap"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </header>
    );
}
