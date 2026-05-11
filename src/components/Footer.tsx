import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-neutral-400 py-12 border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-xl tracking-tight text-white block mb-4">
              PROVEN MEDIA TEAM
            </span>
            <p className="text-sm max-w-sm">
              Performance-driven media and automation agency building brand
              authority, lead generation systems, and AI-powered business
              infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/roster"
                  className="hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary text-sm flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Proven Media Team. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
