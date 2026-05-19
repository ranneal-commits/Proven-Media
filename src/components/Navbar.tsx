import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Insights", path: "/insights" },
    { name: "FAQ", path: "/faq" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/roster" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl tracking-tight text-white">
              PROVEN MEDIA TEAM
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
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
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-primary-hover rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
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
