import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", path: "/services" },
    { name: "Free Audit", path: "https://proven-marketing-analysis.netlify.app/?cta=top-nav-audit", external: true },
    { name: "Pricing", path: "/pricing" },
    { name: "Insights", path: "/insights" },
    { name: "FAQ", path: "/faq" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/roster" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 md:h-28 items-center">
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="flex-shrink-0 flex items-center h-full">
              {/* Using a wrapper to safely zoom the logo if it has built-in padding, without messing up layout */}
              <div className="w-24 h-24 md:w-32 md:h-32 relative overflow-hidden flex items-center justify-center">
                <img 
                  src="/assets/logo.png" 
                  alt="Proven Media Marketing" 
                  className="absolute w-[160%] max-w-none h-auto object-contain"
                />
              </div>
            </Link>

            <div className="hidden md:flex space-x-6 items-center">
              {links.map((link) => 
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/strategy-call?cta=top-nav"
              className="bg-accent1 text-primary px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent1-hover transition-colors"
            >
              Book a Strategy Call
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-b border-neutral-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => 
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-primary-hover rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-primary-hover rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/strategy-call?cta=top-nav"
              className="block px-3 py-2 text-base font-medium text-primary bg-accent1 hover:bg-accent1-hover rounded-md mt-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
