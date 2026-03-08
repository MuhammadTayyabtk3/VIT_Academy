import React from 'react';
import { School } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 px-4 lg:px-10">
      <div className="layout-content-container max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 text-center lg:text-left">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <a href="/" className="flex items-center gap-2 text-slate-900 dark:text-white justify-center lg:justify-start">
            <School className="text-primary" size={24} />
            <span className="text-lg font-bold">VTI Academy</span>
          </a>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
            Empowering the next generation of skilled professionals through practical training and industry collaboration.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/#courses" className="hover:text-primary transition-colors">Our Courses</a></li>
            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Courses</h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="/#courses" className="hover:text-primary transition-colors">Electrician</a></li>
            <li><a href="/#courses" className="hover:text-primary transition-colors">Automobile</a></li>
            <li><a href="/#courses" className="hover:text-primary transition-colors">Computer Hardware</a></li>
            <li><a href="/#courses" className="hover:text-primary transition-colors">Tailoring</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800 pt-8">
        © Developed By Muhammad Tayyab.
      </div>
    </footer>
  );
}
