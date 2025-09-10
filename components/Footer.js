"use client";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-8 shadow-inner">
      <div className="px-24 mx-auto flex flex-col md:flex-row items-start gap-10 space-y-6 md:space-y-0">

        {/* 1️⃣ Logo Section */}
        <div className="flex items-center justify-center bg-gray-300 w-32 h-32 text-2xl font-bold text-center rounded">
          Logo Here
        </div>

        {/* 2️⃣ Social Icons + Download App Button */}
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-left ml-10" style={{width:"-webkit-fill-available"}}>
            <span className="mb-4 font-medium">Follow us on</span>
            <div className="flex space-x-4 text-gray-600">
              <FaFacebook className="cursor-pointer text-3xl text-blue-600" />
              <FaInstagram className="cursor-pointer text-3xl text-pink-500" />
              <FaLinkedin className="cursor-pointer text-3xl text-blue-700" />
              <FaYoutube className="cursor-pointer text-3xl text-red-600" />
              <FaWhatsapp className="cursor-pointer text-3xl text-green-500" />
              <FaTwitter className="cursor-pointer text-3xl text-blue-400" />
            </div>
            <div className="mt-6 w-full">
              <button className="bg-black text-white px-8 py-2 w-full rounded-lg text-md font-medium hover:bg-gray-800">
                Download App Now
              </button>
            </div>
          </div>
          {/* 3️⃣ Links Section */}
          <div className="grid grid-cols-3 gap-8 text-sm text-gray-700 text-left w-full">
            <div className="space-y-2">
              <a href="#" className="hover:underline block">About Us</a>
              <a href="#" className="hover:underline block">Privacy policy</a>
            </div>

            <div className="space-y-2">
              <a href="#" className="hover:underline block">Disclaimer</a>
              <a href="#" className="hover:underline block">Advertise with us</a>
            </div>

            <div className="space-y-2">
              <a href="#" className="hover:underline block">Contact Us</a>
              <a href="#" className="hover:underline block">Site Map</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
