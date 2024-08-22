'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-3xl font-bold">
          <Link href="#home" scroll={true}>NatureID</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="#home" scroll={true} className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg shadow-md transition duration-300">Home</Link>
          <Link href="#about" scroll={true} className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg shadow-md transition duration-300">About</Link>
          <Link href="#contact" scroll={true} className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg shadow-md transition duration-300">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="#home" scroll={false} className="block text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg shadow-md transition duration-300" onClick={toggleMenu}>Home</Link>
          <Link href="#about" scroll={false} className="block text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg shadow-md transition duration-300" onClick={toggleMenu}>About</Link>
          <Link href="#contact" scroll={false} className="block text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg shadow-md transition duration-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
