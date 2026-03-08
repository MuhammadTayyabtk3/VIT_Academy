import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Facilities() {
  return (
    <div className="layout-content-container max-w-[1200px] mx-auto w-full px-4 lg:px-8 py-20" id="contact">
      <div className="flex flex-col lg:flex-row gap-8 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700">
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
            Visit Our Campus
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            World-Class Facilities in the Heart of the City
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 size-10 min-w-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Main Campus</h4>
                <p className="text-slate-500 dark:text-slate-400">
                  Near  Rural Health Centre Mong, Mandi Baha-ud-Din
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 size-10 min-w-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Opening Hours</h4>
                <p className="text-slate-500 dark:text-slate-400">
                  Mon - Sat: 8:00 AM - 3:00 PM<br />Sun: Closed
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 size-10 min-w-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Contact Information</h4>
                <p className="text-slate-500 dark:text-slate-400">
                  054-6626257<br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-[400px] bg-slate-200 dark:bg-slate-700 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1679.8390842379893!2d73.51338462705893!3d32.64139294548587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f7ef9ac9ea1b7%3A0x115cea960d413f6f!2sVocational%20Training%20Instititute!5e0!3m2!1sen!2s!4v1772904381904!5m2!1sen!2s" 
            className="w-full h-full" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
            <div className="bg-white text-slate-900 px-4 py-2 rounded shadow-lg font-bold flex items-center gap-2">
              <MapPin className="text-red-500" size={24} />
              VTI Campus
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
