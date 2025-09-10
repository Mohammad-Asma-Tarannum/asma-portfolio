import React from 'react';

const ArtisticHero: React.FC = () => {
  return (
  <section className="min-h-screen relative bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 artistic-grid opacity-30"></div>
      
      {/* Main content */}
  <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
          <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 gap-2 md:gap-0">
            {/* Responsive navigation, add items here if needed */}
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex-1 flex items-center justify-center px-2 sm:px-4 md:px-8">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-12 gap-4 items-end">
              
              {/* Left side - Main typography */}
              <div className="col-span-12 lg:col-span-8">
                <div className="fade-in">
                  <div className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tighter mb-4 break-words">
                    MOHAMMAD
                  </div>
                  <div className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tighter mb-8 break-words">
                    ASMA
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-gray-600 mb-8 break-words">
                    TARANNUM
                  </div>
                </div>
                
                <div className="fade-in fade-in-delay-2 max-w-md">
                  <p className="text-base sm:text-lg font-light leading-relaxed mb-6 text-gray-800">
                    Frontend Developer specializing in React.
                    Creating digital solutions with precision and purpose.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 mono-text text-xs sm:text-sm">
                    <span className="text-gray-500">CURRENTLY AVAILABLE</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Right side - Geometric elements */}
              <div className="col-span-12 lg:col-span-4 relative mt-8 lg:mt-0">
                <div className="fade-in fade-in-delay-3">
                  {/* Vertical line */}
                  <div className="absolute right-16 top-0 geometric-line h-64"></div>
                  
                  {/* Info blocks */}
                  <div className="space-y-6 sm:space-y-12 text-right">
                    <div className="geometric-border p-4 sm:p-6 bg-gray-50">
                      <div className="mono-text text-xs text-gray-500 mb-2">EDUCATION</div>
                      <div className="text-sm font-light">B.Tech CSE (Data Science)</div>
                      <div className="text-sm text-gray-600">CGPA: 8.82</div>
                    </div>
                    
                    <div className="geometric-border p-4 sm:p-6 bg-white border">
                      <div className="mono-text text-xs text-gray-500 mb-2">LOCATION</div>
                      <div className="text-sm font-light">Secunderabad</div>
                      <div className="text-sm text-gray-600">Telangana, India</div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="fade-in fade-in-delay-4 mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-8 md:mb-0">
                  <div className="mono-text text-xs text-gray-500 mb-4">CONTACT</div>
                  <div className="text-sm space-y-2 ">
                    <div className="flex justify-between items-center border-gray-300 pb-1">
    
                    <a href="mailto:mdasmatarannum@gmail.com"
                     className="hover-underline cursor-pointer">mdasmatarannum@gmail.com</a></div>
                    <div className="flex justify-between items-center border-gray-300 pb-1">
                      <a href="https://www.linkedin.com/in/asma-tarannum-mohammad-190160359/"
                    target="_blank"
                    rel="noopener noreferrer"
                     className="hover-underline cursor-pointer">linkedin.com/in/Asma Tarannum Mohammad</a></div>
                     <div className="flex justify-between items-center border-gray-300 pb-1">
                      <a href="https://github.com/Mohammad-Asma-Tarannum"
                    target="_blank"
                    rel="noopener noreferrer"
                     className="hover-underline cursor-pointer">github.com/Mohammad-Asma-Tarannum</a></div>
      

                  </div>
                </div>
                
                <div className="col-span-12 sm:col-span-6 md:col-span-6 text-center mb-8 md:mb-0">
                  <div className="mono-text text-xs text-gray-400 tracking-widest">
                    SCROLL TO EXPLORE
                  </div>
                  <div className="w-px h-12 bg-gray-300 mx-auto mt-4"></div>
                </div>
                
                <div className="col-span-12 sm:col-span-6 md:col-span-3 text-right">
                  <div className="mono-text text-xs text-gray-500 mb-4">RESUME</div>
                  <a
  href="https://drive.google.com/file/d/1jjr7JYUYliH-GUuNNLrevMw15hIkoxCd/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="hover-underline inline-block cursor-pointer"
>
      
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticHero;