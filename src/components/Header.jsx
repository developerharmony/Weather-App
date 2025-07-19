import React, { useState } from 'react';

const Header = ({ theme, changeTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <i className="fas fa-cloud-sun text-3xl text-yellow-400 animate-bounce"></i>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Hava Durumu
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 rounded-full p-1">
              <button
                onClick={() => changeTheme('light')}
                className={`px-3 py-1 rounded-full text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer ${
                  theme === 'light' ? 'bg-white/30 shadow-lg' : 'hover:bg-white/20'
                }`}
              >
                <i className="fas fa-sun mr-1"></i>Açık
              </button>
              <button
                onClick={() => changeTheme('dark')}
                className={`px-3 py-1 rounded-full text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer ${
                  theme === 'dark' ? 'bg-white/30 shadow-lg' : 'hover:bg-white/20'
                }`}
              >
                <i className="fas fa-moon mr-1"></i>Koyu
              </button>
              <button
                onClick={() => changeTheme('custom')}
                className={`px-3 py-1 rounded-full text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer ${
                  theme === 'custom' ? 'bg-white/30 shadow-lg' : 'hover:bg-white/20'
                }`}
              >
                <i className="fas fa-palette mr-1"></i>Özel
              </button>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 cursor-pointer"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white/10 rounded-lg backdrop-blur-lg">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => changeTheme('light')}
                className={`px-3 py-2 rounded-lg text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer ${
                  theme === 'light' ? 'bg-white/30' : 'hover:bg-white/20'
                }`}
              >
                <i className="fas fa-sun mr-2"></i>Açık Tema
              </button>
              <button
                onClick={() => changeTheme('dark')}
                className={`px-3 py-2 rounded-lg text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer ${
                  theme === 'dark' ? 'bg-white/30' : 'hover:bg-white/20'
                }`}
              >
                <i className="fas fa-moon mr-2"></i>Koyu Tema
              </button>
              <button
                onClick={() => changeTheme('custom')}
                className={`px-3 py-2 rounded-lg text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer ${
                  theme === 'custom' ? 'bg-white/30' : 'hover:bg-white/20'
                }`}
              >
                <i className="fas fa-palette mr-2"></i>Özel Tema
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;