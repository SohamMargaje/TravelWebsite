import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-gray-400 relative">
      {/* inner container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-14">
        
        {/* top */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* brand */}
          <div>
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
              alt="logo"
              className="h-8 mb-4"
            />
            <p className="text-sm leading-relaxed">
              Discover meaningful journeys, curated experiences, and travel
              stories that inspire your next adventure.
            </p>

            <div className="flex gap-4 mt-5 text-gray-400">
              <svg className="w-5 h-5 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5z" />
              </svg>
              <svg className="w-5 h-5 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
              </svg>
              <svg className="w-5 h-5 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
              </svg>
            </div>
          </div>

          {/* links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>

          {/* newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">
              Get travel inspiration and exclusive deals straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-slate-800 text-sm px-3 py-2 rounded-l outline-none"
              />
              <button className="bg-black px-4 rounded-r hover:bg-slate-700 transition">
                →
              </button>
            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© {new Date().getFullYear()} ORBIT. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
