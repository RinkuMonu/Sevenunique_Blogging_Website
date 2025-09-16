"use client";

import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import Image from "next/image";

export default function Header() {
  const [language, setLanguage] = useState("English");
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);

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


  const images = [
    "/images/life-drop1.png",
    "/images/life-drop2.png",
    "/images/life-drop3.png",
    "/images/life-drop4.png",
    "/images/life-drop5.png",
    "/images/life-drop6.png",
  ];

  const topItems = [
    {
      image: "images/life-drop1.png",
      title:
        "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
      link: "#",
    },
    {
      image: "images/life-drop2.png",
      title:
        "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
      link: "#",
    },
    {
      image: "images/life-drop3.png",
      title:
        "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
      link: "#",
    },
    {
      image: "images/life-drop3.png",
      title:
        "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
      link: "#",
    },
    {
      image: "images/life-drop4.png",
      title:
        "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
      link: "#",
    },
  ];

  const textItems = [
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod",
  ];

  const menuColumns = [
    {
      title: "Home",
      items: [
        "Live TV",
        "Top news",
        "Sports",
        "Business",
        "Astrology",
        "Lifestyle",
        "Election",
        "Podcast",
      ],
    },
    {
      title: "Lifestyle",
      items: [
        "Fashion",
        "Travel",
        "Recipes",
        "Relationship",
        "Beauty",
        "Health & Wellness",
      ],
    },
    {
      title: "Sports",
      items: ["Top news", "International news"],
    },
    {
      title: "Business",
      items: [
        "Startups",
        "International business",
        "Economy",
        "Banking Finance",
      ],
    },
    {
      title: "Opinion",
      items: ["Cartoons", "Blogs", "Humour"],
    },
    {
      title: "Astrology",
      items: ["Horoscope", "Planets & Transits", "Astro Tips", "Kundali match"],
    },
    {
      title: "GK",
      items: ["Current GK", "Yearly", "Monthly"],
    },
    {
      title: "Entertainment",
      items: ["Movie", "Photos", "Events", "Movie reviews", "Music"],
    },
    {
      title: "Technology",
      items: ["Mobile", "Laptop", "Games", "Tech Tips", "Tech News"],
    },
    {
      title: "Education",
      items: ["Govt Exam & Results", "Top Universities", "Jobs"],
    },
    {
      title: "Agriculture",
      items: ["Agri Tips", "Agri Facts"],
    },
    {
      title: "Art & Culture",
      items: [],
    },
    {
      title: "Auto",
      items: [],
    },
    {
      title: "Real Estate",
      items: [],
    },
    {
      title: "Science",
      items: [],
    },
    {
      title: "Election",
      items: [],
    },
  ];

  return (
    <header className="w-full space-y-3 relative">
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

        <div className="font-semibold text-xl text-center md:text-left">
          Jaipur
        </div>

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
        <strong className="text-black">Trending :</strong> Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </div>

      {/* Navigation Menu */}
      <nav className="bg-blue-900 text-white px-4 md:px-24 py-3 overflow-x-auto">
        <ul className="flex items-center space-x-6 md:space-x-10 text-md min-w-max">
        <li className="group">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1"
      >
        <FaBars className="text-xl" />
      </button>

      {/* Full-screen dropdown */}
      {open && (
        <div className="absolute left-0 w-screen bg-white shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {menuColumns.map((col, i) => (
              <div key={i}>
                <h3 className="font-semibold text-red-600 mb-3">
                  {col.title} &gt;
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j}>
                      <Link
                        href="#"
                        className="text-gray-700 hover:text-red-600 text-sm block"
                        onClick={() => setOpen(false)} // 👈 close dropdown
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>

          <li onClick={toggleSearch} className="cursor-pointer">
            {showSearch ? <FaTimes /> : <IoSearchOutline />}
          </li>

          <li className="group">
            <Link href="/" className="flex gap-1 items-center">
              Home
            </Link>
          </li>

          <li className="group">
            <Link href="#" className="flex gap-1 items-center">
              State <TiArrowSortedDown />
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Cricket
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  MMA
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Football
                </Link>
              </li>
            </ul>
          </li>

          <li className="group">
            <Link href="/business" className="flex gap-1 items-center">
              Business <TiArrowSortedDown />
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  League of Legends
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Dota 2
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  CS:GO
                </Link>
              </li>
            </ul>
          </li>

          <li className="group">
            <Link href="/entertainment" className="flex gap-1 items-center">
              Entertainment <TiArrowSortedDown />
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Live Scores
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Fixtures
                </Link>
              </li>
            </ul>
          </li>

          <li className="group">
            <Link href="/sport" className="flex gap-1 items-center">
              Sports <TiArrowSortedDown />
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg whitespace-nowrap">
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  ATP
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  WTA
                </Link>
              </li>
            </ul>
          </li>

          <li className="group">
            <Link href="/Lifestyle" className="flex gap-1 items-center">
              Lifestyle <TiArrowSortedDown />
            </Link>

            {/* Mega Dropdown */}
            <div className="absolute z-50 left-0 top-46 hidden group-hover:block w-full bg-white border-t border-red-500 shadow-lg">
              <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 p-6">
                {/* Left Sidebar Links */}
                <div className="col-span-3 border-r border-gray-200 pr-6">
                  <ul className="flex flex-col gap-2 text-red-600 font-medium text-sm">
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem dolor sit
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem dolor sit
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem ipsum dolor sit
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem dolor sit
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Right Grid with Images */}
                <div className="col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {images.map((src, i) => (
                    <div key={i} className="rounded-lg overflow-hidden">
                      <img
                        src={src}
                        alt={`news-${i}`}
                        className="w-full h-32 object-cover"
                      />
                      <p className="mt-2 text-sm font-medium text-[#002765] leading-snug">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>

          <li className="group">
            <Link href="/Technology" className="flex gap-1 items-center">
              Technology <TiArrowSortedDown />
            </Link>

            {/* Full width dropdown */}
            <div className="absolute left-0 w-screen hidden group-hover:block bg-white shadow-lg z-50">
              <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Row 1: Images with title */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                  {topItems.map((item, i) => (
                    <Link key={i} href={item.link} className="block">
                      <div className="rounded-lg overflow-hidden  transition">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-28 object-cover"
                        />
                        <p className="mt-2 text-sm font-semibold text-[#002765] leading-snug text-start">
                          {item.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Rows 2-4: Text only */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4">
                  {textItems.map((title, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="text-sm font-medium text-[#002765] hover:underline"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <Link href="/Election" className="flex gap-1 items-center">
              Election <TiArrowSortedDown />
            </Link>
            <div className="absolute z-50 left-0 top-46 hidden group-hover:block w-full bg-white border-t border-red-500 shadow-lg">
              <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 p-6">
                {/* Left Sidebar Links */}
                <div className="col-span-3 border-r border-gray-200 pr-6">
                  <ul className="flex flex-col gap-2 text-red-600 font-medium text-sm">
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem dolor sit
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem dolor sit
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem ipsum dolor sit
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Lorem dolor sit
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Right Grid with Images */}
                <div className="col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {images.map((src, i) => (
                    <div key={i} className="rounded-lg overflow-hidden">
                      <img
                        src={src}
                        alt={`news-${i}`}
                        className="w-full h-32 object-cover"
                      />
                      <p className="mt-2 text-sm font-medium text-[#002765] leading-snug">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      {showSearch && (
        <div
          className="fixed inset-0 z-40 bg-black/60 px-6 py-7"
          style={{ top: "195px", overflowY: "auto", height: "100vh" }}
        >
          <div
            className="
                        absolute left-1/2 top-0 -translate-x-1/2
                        flex flex-col w-full max-w-6xl
                        bg-white shadow-2xl px-6 py-7 z-[101]
                        rounded
                      "
            style={{ maxHeight: "100%", overflowY: "auto" }}
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
                "नेपाल Gen-Z रेवोलुशन",
                "बिहार विधानसभा चुनाव 2025",
                "बाढ़",
                "शी जिनपिंग",
                "रेसिप्रोकल टैरिफ",
                "उत्तर प्रदेश",
                "नेपाल",
                "काठमांडू",
                "केपी ओली",
                "डोनाल्ड ट्रंप",
                "नरेन्द्र मोदी",
              ].map((tag) => (
                <button
                  key={tag}
                  className="border border-gray-300 rounded-full px-5 py-2 text-base font-normal bg-white hover:bg-gray-100 transition whitespace-nowrap"
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8 mt-4">
              {topItems.map((item, i) => (
                <Link key={i} href={item.link} className="block">
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-28 object-cover"
                    />
                    <p className="mt-2 text-sm font-semibold text-[#002765] leading-snug text-start p-3">
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
