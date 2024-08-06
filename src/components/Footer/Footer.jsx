import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-gray-800 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-5/12 p-6">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4 flex items-center">
                <Logo width="120px" />
              </div>
              <div>
                <p className="text-sm">
                  &copy; Copyright 2024. All Rights Reserved by RP.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 p-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-gray-400" to="/">Features</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/">Pricing</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/">Affiliate Program</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/">Press Kit</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 p-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-gray-400" to="/">Account</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/">Help</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/">Contact Us</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/">Customer Support</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 p-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Legals</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-gray-400" to="/">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/">Licensing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
