import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 relative overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop")',
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 text-center max-w-[800px] z-10"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full self-center border border-white/20">
              Certified Vocational Training
            </span>
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl drop-shadow-sm">
              Build Your Career With Professional Skill Training
            </h1>
            <p className="text-slate-200 text-base font-normal leading-relaxed @[480px]:text-lg max-w-[600px] self-center">
              Master practical skills, gain industry-recognized certifications, and secure your future with our hands-on vocational courses.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center z-10 pt-4"
          >
            <a href="#courses" className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base font-bold transition-colors">
              Explore Courses
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
