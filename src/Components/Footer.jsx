import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialCard from './SocialCard';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className=" mx-auto px-4">
        <div className="flex items-center justify-center">
          <SocialCard />
        </div>
        <div className="mt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
