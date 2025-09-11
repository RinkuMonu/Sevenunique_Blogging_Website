"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaTwitter, FaBars } from 'react-icons/fa';
import { IoSearchOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Header() {
  const [language, setLanguage] = useState('English');

  return (
    <header className="w-full space-y-3">

      {/* Advertisement */}
      <div className="bg-white mb-4 text-center py-2 text-sm font-medium px-4 md:px-24">
        {/* Advertisement <span className="font-bold">728*90</span> */}
      </div>

      {/* Language + Location + Social + Sign Up */}
      <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-24 py-3 bg-white border border-black space-y-3 md:space-y-0">

        {/* Left: Language Options */}
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

        {/* Center: Location */}
        <div className="font-semibold text-xl text-center md:text-left">Jaipur</div>

        {/* Right: Social Icons + Sign Up */}
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
        <strong className="text-black">Trending :</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
      </div>

      {/* Navigation Menu */}
      <nav className="bg-blue-900 text-white px-4 md:px-24 py-3 overflow-x-auto">
        <ul className="flex items-center space-x-6 md:space-x-10 text-md min-w-max">

          {/* Hamburger Menu */}
          <li>
            <Link href="#"><FaBars /></Link>
          </li>

          {/* Search Icon */}
          <li>
            <Link href="#"><IoSearchOutline /></Link>
          </li>

          <li className="relative group">
            <Link href="/" className="flex gap-1 items-center">
              Home
            </Link>
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

    </header>
  );
}
