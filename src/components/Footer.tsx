import { Link } from "react-router-dom";
import { PrimaryCTA, SecondaryCTA } from "./CTA";

export default function Footer() {
  return (
    <footer className="w-full text-neutral-400">
      {/* Sitewide Footer CTA Block */}
      <div className="bg-primary-hover mt-auto py-10 md:py-16 border-t border-neutral-800">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Ready to talk?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Two ways to start — pick whichever feels right.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTA href="/strategy-call" ctaLocation="footer" className="w-full sm:w-auto">
              Book a Strategy Call
            </PrimaryCTA>
            <SecondaryCTA href="https://proven-marketing-analysis.netlify.app/" ctaLocation="footer" className="w-full sm:w-auto">
              Get a Free Marketing Audit
            </SecondaryCTA>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-primary py-12 border-t border-neutral-800">
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
          <div className="mt-12 pt-8 border-t border-neutral-800 text-sm flex flex-col md:flex-row justify-between items-center">
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
      </div>
    </footer>
  );
}
