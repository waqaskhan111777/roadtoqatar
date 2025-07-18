import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="text-white" style={{ backgroundColor: '#7D3745' }}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-12">
              <div className="flex flex-col leading-tight">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">ROAD</span>
                  <span className="text-orange-400 text-2xl font-bold">.</span>
                  <span className="text-sm font-normal ml-1">to</span>
                </div>
                <div className="text-2xl font-bold -mt-1">QATAR</div>
              </div>
              
              {/* Main Navigation */}
              <div className="hidden lg:flex space-x-16">
                <a href="#" className="hover:opacity-80 transition-opacity text-base">Road to Qatar</a>
                <div className="relative">
                  <a href="#" className="hover:opacity-80 transition-opacity flex items-center text-base">
                    Tournaments
                    <span className="ml-2 w-2 h-2 bg-orange-400 rounded-full"></span>
                  </a>
                </div>
                <a href="#" className="hover:opacity-80 transition-opacity text-base">Explore Qatar</a>
                <a href="#" className="hover:opacity-80 transition-opacity text-base">Hayya Visa Requirements</a>
              </div>
            </div>

            {/* Right Side - Language Selector */}
            <div className="flex items-center">
              <div className="border border-white/30 rounded-md px-4 py-2 flex items-center space-x-2 cursor-pointer hover:bg-white/10 transition-colors">
                <span className="text-base font-medium">عربي</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/qatar-skyline.png"
            alt="Qatar Skyline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-6xl font-bold mb-6">Heading</h1>
            <p className="text-lg mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <button 
              className="text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#7D3745' }}
            >
              Discover More
            </button>
          </div>
        </div>
        
        {/* Small icon in bottom left */}
        <div className="absolute bottom-8 left-8 z-10">
          <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Road to Qatar Section */}
      <section className="text-white py-28" style={{ backgroundColor: '#7D3745' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/images/football-players.png"
                alt="Football Players"
                width={350}
                height={250}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-4xl font-bold mb-6">Road to Qatar</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed enim dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* U-17 Gulf Cup Section */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">U-17 GULF CUP</h2>
              <h3 className="text-2xl text-gray-700 mb-6">Sub-Heading</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Cum quis dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim placerat porta et, aliquet ullamcorper. Duis congue mauris eusmod.
              </p>
              <button 
                className="text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#7D3745' }}
              >
                Discover More
              </button>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/images/football-players.png"
                alt="U-17 Gulf Cup"
                width={350}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* U-17 FWC Section with Decorative Background */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: '#C8FF00' }}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full">
          <Image
            src="/images/decorative-bg-2.png"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-1/6 h-full z-20">
          <div className="relative w-full h-full">
            <Image
              src="/images/decorative-bg-1.png"
              alt=""
              fill
              className="object-cover object-bottom-right"
            />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-5xl font-bold text-black mb-4">U-17 FWC</h2>
              <h3 className="text-2xl text-black mb-8">Sub-Heading</h3>
              <p className="text-black mb-8 leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis diam ex. Maecenas volutpat vitae nunc ut gravida. Nam libero neque, gravida viverra nunc eu, condimentum malesuada enim. Phasellus accumsan tristique enim, in scelerisque ante imperdiet eu. Donec placerat purus id aliquam ullamcorper. In hendrerit maximus malesuada. Duis congue iaculis interdum.
              </p>
              <button 
                className="text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#7D3745' }}
              >
                Get Notified
              </button>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <Image
                  src="/images/football-players.png"
                  alt="U-17 FWC"
                  width={400}
                  height={280}
                  className="rounded-lg shadow-lg block"
                  style={{ position: 'relative' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAC Section */}
      <section className="bg-blue-400 py-28 relative overflow-hidden">
        {/* Decorative Side Image */}
        <div className="absolute left-0 top-0 w-20 h-full z-10">
          <Image
            src="/images/decorative-side.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/images/football-players.png"
                alt="FAC"
                width={350}
                height={250}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-4xl font-bold text-white mb-4">FAC</h2>
              <h3 className="text-2xl text-blue-100 mb-6">Sub-Heading</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Cum quis dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim placerat porta et, aliquet ullamcorper. Duis congue mauris eusmod.
              </p>
              <button 
                className="text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#7D3745' }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FIC Section */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/images/football-players.png"
                alt="FIC"
                width={350}
                height={250}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">FIC</h2>
              <h3 className="text-2xl text-gray-700 mb-6">Sub-Heading</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Cum quis dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim placerat porta et, aliquet ullamcorper. Duis congue mauris eusmod.
              </p>
              <button 
                className="text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#7D3745' }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Qatar Section */}
      <section className="text-white py-28" style={{ backgroundColor: '#7D3745' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">Explore Qatar</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed enim dolor vel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <button 
                className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Discover More
              </button>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/images/football-players.png"
                alt="Explore Qatar"
                width={350}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-28" style={{ backgroundColor: '#7D3745' }}>
        {/* White separator line - full width */}
        <div className="w-full h-px bg-white mb-12"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-8 md:mb-0">
              <a href="#" className="hover:opacity-80 transition-opacity">Cookie Policy</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Terms of Use</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Ticketing Terms & Condition</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-black text-sm font-semibold">f</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-black text-sm font-semibold">t</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-black text-sm font-semibold">in</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}