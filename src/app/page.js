'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="text-white" style={{ backgroundColor: '#7D3745' }}>
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-20">
              <div className="flex flex-col leading-tight">
                <div className="flex items-baseline">
                  <span className="text-base md:text-xl lg:text-2xl font-bold">ROAD</span>
                  <span className="text-orange-400 text-base md:text-xl lg:text-2xl font-bold">.</span>
                  <span className="text-xs md:text-sm font-normal ml-1">to</span>
                </div>
                <div className="text-base md:text-xl lg:text-2xl font-bold -mt-1">QATAR</div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden xl:flex space-x-4 lg:space-x-8 xl:space-x-16">
                <a href="#" className="hover:opacity-80 transition-opacity text-sm lg:text-base whitespace-nowrap">Road to Qatar</a>
                <div className="relative">
                  <a href="#" className="hover:opacity-80 transition-opacity flex items-center text-sm lg:text-base">
                    Tournaments
                    <span className="ml-2 w-2 h-2 bg-orange-400 rounded-full"></span>
                  </a>
                </div>
                <a href="#" className="hover:opacity-80 transition-opacity text-sm lg:text-base whitespace-nowrap">Explore Qatar</a>
                <div className="flex items-center">
                  <a href="#" className="hover:opacity-80 transition-opacity text-sm lg:text-base whitespace-nowrap">Hayya Visa Requirements</a>
                  <Image
                    src="/images/rightarrowicon.png"
                    alt="Right Arrow"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button & Language Selector */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Mobile Menu Button */}
              <button 
                className="xl:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              {/* Language Selector */}
              <div className="px-2 md:px-4 py-2 cursor-pointer hover:bg-white/10 transition-colors">
                <Image
                  src="/images/arabicdownarrowicon.png"
                  alt="Arabic Language Selector"
                  width={40}
                  height={16}
                  className="md:w-[60px] md:h-[24px]"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="xl:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#" className="hover:opacity-80 transition-opacity text-sm">Road to Qatar</a>
                <a href="#" className="hover:opacity-80 transition-opacity text-sm flex items-center">
                  Tournaments
                  <span className="ml-2 w-2 h-2 bg-orange-400 rounded-full"></span>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity text-sm">Explore Qatar</a>
                <a href="#" className="hover:opacity-80 transition-opacity text-sm">Hayya Visa Requirements</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] lg:h-screen bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/qatar-skyline.png"
            alt="Qatar Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center">
          <div className="max-w-sm md:max-w-xl lg:max-w-2xl text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">Heading</h1>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <button 
              className="text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
              style={{ backgroundColor: '#7D3745' }}
            >
              Discover More
            </button>
          </div>
        </div>
        
        {/* Side icon in bottom left */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10">
          <Image
            src="/images/sideicon.png"
            alt="Side Icon"
            width={32}
            height={32}
            className="md:w-12 md:h-12 object-contain"
          />
        </div>
      </section>

      {/* Road to Qatar Section */}
      <section className="text-white py-12 md:py-20 lg:py-28" style={{ backgroundColor: '#7D3745' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <Image
                src="/images/football-players.png"
                alt="Football Players"
                width={280}
                height={200}
                className="rounded-lg mx-auto md:w-[320px] md:h-[230px] lg:w-[350px] lg:h-[250px]"
              />
            </div>
            <div className="w-full lg:w-2/3 lg:pl-8 xl:pl-12 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6">Road to Qatar</h2>
              <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed enim dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* U-17 Gulf Cup Section */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            <div className="w-full lg:w-2/3 lg:pr-8 xl:pr-12 mb-6 lg:mb-0 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4">U-17 GULF CUP</h2>
              <h3 className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 md:mb-6">Sub-Heading</h3>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Cum quis dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button 
                className="text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
                style={{ backgroundColor: '#7D3745' }}
              >
                Discover More
              </button>
            </div>
            <div className="w-full lg:w-1/3 order-1 lg:order-2">
              <Image
                src="/images/football-players.png"
                alt="U-17 Gulf Cup"
                width={280}
                height={200}
                className="rounded-lg mx-auto md:w-[320px] md:h-[230px] lg:w-[350px] lg:h-[250px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* U-17 FWC Section with Decorative Background */}
      <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: '#C8FF00' }}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-1/4 md:w-1/3 h-full">
          <Image
            src="/images/decorative-bg-2.png"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-1/6 md:w-1/6 h-full z-20">
          <div className="relative w-full h-full">
            <Image
              src="/images/decorative-bg-1.png"
              alt=""
              fill
              className="object-cover object-bottom-right"
            />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 md:mb-4">U-17 FWC</h2>
              <h3 className="text-lg md:text-xl lg:text-2xl text-black mb-4 md:mb-6 lg:mb-8">Sub-Heading</h3>
              <p className="text-sm md:text-base text-black mb-6 md:mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis diam ex. Maecenas volutpat vitae nunc ut gravida. Nam libero neque, gravida viverra nunc eu, condimentum malesuada enim.
              </p>
              <button 
                className="text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
                style={{ backgroundColor: '#7D3745' }}
              >
                Get Notified
              </button>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/football-players.png"
                  alt="U-17 FWC"
                  width={280}
                  height={200}
                  className="rounded-lg shadow-lg block md:w-[350px] md:h-[250px] lg:w-[400px] lg:h-[280px]"
                  style={{ position: 'relative' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAC Section */}
      <section className="bg-blue-400 py-12 md:py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative Side Image */}
        <div className="absolute left-0 top-0 w-12 md:w-16 lg:w-20 h-full z-10">
          <Image
            src="/images/decorative-side.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:pl-20 xl:pl-24 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <Image
                src="/images/football-players.png"
                alt="FAC"
                width={280}
                height={200}
                className="rounded-lg mx-auto md:w-[320px] md:h-[230px] lg:w-[350px] lg:h-[250px]"
              />
            </div>
            <div className="w-full lg:w-2/3 lg:pl-8 xl:pl-12 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 md:mb-4">FAC</h2>
              <h3 className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-4 md:mb-6">Sub-Heading</h3>
              <p className="text-sm md:text-base text-blue-100 mb-6 md:mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Cum quis dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button 
                className="text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
                style={{ backgroundColor: '#7D3745' }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FIC Section */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <Image
                src="/images/football-players.png"
                alt="FIC"
                width={280}
                height={200}
                className="rounded-lg mx-auto md:w-[320px] md:h-[230px] lg:w-[350px] lg:h-[250px]"
              />
            </div>
            <div className="w-full lg:w-2/3 lg:pl-8 xl:pl-12 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4">FIC</h2>
              <h3 className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 md:mb-6">Sub-Heading</h3>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Cum quis dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button 
                className="text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
                style={{ backgroundColor: '#7D3745' }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Qatar Section */}
      <section className="text-white py-12 md:py-20 lg:py-28" style={{ backgroundColor: '#7D3745' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            <div className="w-full lg:w-2/3 lg:pr-8 xl:pr-12 mb-6 lg:mb-0 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6">Explore Qatar</h2>
              <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed enim dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                Discover More
              </button>
            </div>
            <div className="w-full lg:w-1/3 order-1 lg:order-2">
              <Image
                src="/images/football-players.png"
                alt="Explore Qatar"
                width={280}
                height={200}
                className="rounded-lg mx-auto md:w-[320px] md:h-[230px] lg:w-[350px] lg:h-[250px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 md:py-20 lg:py-28" style={{ backgroundColor: '#7D3745' }}>
        {/* White separator line - full width */}
        <div className="w-full h-px bg-white mb-8 md:mb-12"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 lg:space-x-8 xl:space-x-12 text-center md:text-left">
              <a href="#" className="hover:opacity-80 transition-opacity text-xs md:text-sm lg:text-base">Cookie Policy</a>
              <a href="#" className="hover:opacity-80 transition-opacity text-xs md:text-sm lg:text-base">Terms of Use</a>
              <a href="#" className="hover:opacity-80 transition-opacity text-xs md:text-sm lg:text-base">Ticketing Terms & Condition</a>
              <a href="#" className="hover:opacity-80 transition-opacity text-xs md:text-sm lg:text-base">Privacy Policy</a>
            </div>
            <div className="flex space-x-3 md:space-x-4">
              <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src="/images/insta.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src="/images/tiktok.png"
                  alt="TikTok"
                  width={20}
                  height={20}
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src="/images/youtube.png"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}