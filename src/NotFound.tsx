import React from 'react';
import { motion } from 'motion/react';
import { Home, Compass, Mail, Ban, GraduationCap, Rocket, Zap, Wrench, Stethoscope, Monitor, Scissors } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const courseTags = [
    { icon: Zap, label: "Electrician" },
    { icon: Wrench, label: "Mechanic" },
    { icon: Stethoscope, label: "Medical" },
    { icon: Monitor, label: "Computer" },
    { icon: Scissors, label: "Tailoring" },
  ];

  return (
    <div className="w-full bg-white flex flex-col lg:flex-row overflow-hidden font-sans text-slate-900">
      
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 h-full p-4 sm:p-12 lg:p-20 flex flex-col justify-center relative bg-white z-10">

        <div className="relative z-10 flex flex-col w-full max-w-md mx-auto lg:mx-0">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 sm:gap-3 mb-1"
          >
            <Ban className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              404 - Page Not Found
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-2 sm:mb-6 text-blue-600 font-semibold text-sm sm:text-base"
          >
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Oops! This Page Is Missing</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mb-2 sm:mb-6 leading-relaxed text-sm sm:text-base"
          >
            It looks like the page you are trying to visit doesn't exist or may have been moved. But your journey to learn professional skills doesn't have to stop here.
          </motion.p>

          {/* Feature Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-50/50 border border-blue-100 rounded-xl sm:rounded-2xl p-2 sm:p-2 mb-3 sm:mb-4 shadow-sm"
          >
            <div className="flex items-center gap-1 mb-1 sm:mb-3">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <h3 className="font-bold text-slate-800 text-sm sm:text-base">Keep Building Your Future</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-4 line-clamp-3 sm:line-clamp-none">
              At Vocational Training Institute, we help students gain practical skills and real-world training in multiple professional fields. Even if this page is lost, your opportunity to learn is still here.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {courseTags.map((tag, index) => (
                <span key={index} className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-blue-100 rounded-full text-[10px] sm:text-xs font-medium text-blue-700 shadow-sm">
                  <tag.icon className="w-3 h-3" />
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-2 sm:mt-0"
          >
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              What You Can Do Now
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 text-xs sm:text-sm"
              >
                <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Return Home
              </button>
              <button 
                onClick={() => navigate('/#courses')}
                className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-blue-600 border border-blue-200 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-xs sm:text-sm"
              >
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Explore Courses
              </button>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Right Side - Images (Hidden on mobile to ensure fit) */}
      <div className="hidden lg:flex w-1/2 h-full bg-slate-50 p-8 sm:p-12 items-center justify-center relative overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 blur-3xl rounded-full pointer-events-none" />

        <div className="relative w-full max-w-lg aspect-square grid grid-cols-2 grid-rows-2 gap-4">
          {/* Image 1 - Electronics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600&auto=format&fit=crop"
              alt="Electronics Training"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 2 - Computer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500 bg-teal-600 flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=600&auto=format&fit=crop"
              alt="Computer Training"
              className="w-full h-full object-cover opacity-90"
            />
          </motion.div>

          {/* Image 3 - Workshop (Wide) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
              alt="Industrial Workshop"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
