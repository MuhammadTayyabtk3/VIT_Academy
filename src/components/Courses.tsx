import React from 'react';
import { Star, Hourglass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Courses() {
  const navigate = useNavigate();
  const courses = [
    {
      title: 'Electrician Course',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
      duration: '6 Months',
      rating: 4.9,
      description: 'Master residential and industrial wiring, safety protocols, and circuit maintenance.',
      price: 'By Government',
      color: 'blue',
    },
    {
      title: 'Auto Mechanic Course',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop',
      duration: '6 Months',
      rating: 4.8,
      description: 'Learn engine diagnostics, repair, suspension systems, and modern hybrid vehicle tech.',
      price: 'By Government',
      color: 'green',
    },
    {
      title: 'Medical Lab Course',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop',
      duration: '6 Months',
      rating: 5.0,
      description: 'Comprehensive training in pathology, sample testing, and laboratory equipment management.',
      price: 'By Government',
      color: 'purple',
    },
    {
      title: 'Computer Course',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop',
      duration: '6 Months',
      rating: 4.7,
      description: 'Build expertise in PC assembly, network configuration, troubleshooting, and cybersecurity basics.',
      price: 'By Government',
      color: 'indigo',
    },
    {
      title: 'Tailoring Course',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop',
      duration: '6 Months',
      rating: 4.9,
      description: 'Learn pattern making, stitching techniques, textile science, and garment construction.',
      price: 'By Government',
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, string> = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300',
    };
    return map[color] || map.blue;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-20" id="courses">
      <div className="layout-content-container max-w-[1200px] mx-auto w-full px-4 lg:px-8">
        <div className="flex flex-col gap-2 mb-10 text-center">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm">
            Skill Development
          </h2>
          <h3 className="text-slate-900 dark:text-white text-3xl font-bold">
            Our Top Vocational Courses
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Browse our most popular programs designed to get you hired immediately after completion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`${getColorClasses(course.color)} text-xs font-bold px-2 py-1 rounded`}
                  >
                    {course.duration}
                  </span>
                  <div className="flex items-center text-amber-500 text-sm font-bold">
                    <Star size={18} className="mr-1 fill-current" />
                    {course.rating}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                  {course.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white font-bold">
                    {typeof course.price === 'number' ? `$${course.price}` : course.price} <span className="text-xs font-normal text-slate-500">/ course</span>
                  </span>
                  <button 
                    onClick={() => navigate('/course-details')}
                    className="text-primary font-bold text-sm hover:underline"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Coming Soon Card */}
          <div className="group bg-primary rounded-xl overflow-hidden border border-primary p-6 flex flex-col items-center justify-center text-center gap-4 h-full">
            <div className="size-16 bg-white/20 rounded-full flex items-center justify-center text-white mb-2">
              <Hourglass size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">More Courses Coming Soon</h4>
            <p className="text-white/80 text-sm mb-4">
              We are constantly expanding our vocational programs. Stay tuned for new additions like Plumbing and Welding.
            </p>
            <button className="w-full bg-white/20 text-white font-bold py-3 rounded-lg cursor-not-allowed opacity-80" disabled>
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
