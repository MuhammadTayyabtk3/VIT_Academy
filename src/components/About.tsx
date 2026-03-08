import React from 'react';
import { CheckCircle, School, Settings, Briefcase, Banknote } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <School size={24} />,
      title: 'Expert Trainers',
      description: 'Learn from industry veterans with 10+ years of experience.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Modern Labs',
      description: 'Train on latest CNC machines and diagnostic tools.',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Job Placement',
      description: 'Dedicated placement cell with 95% hiring record.',
    },
    {
      icon: <Banknote size={24} />,
      title: 'Scholarships',
      description: 'Financial aid available for meritorious students.',
    },
  ];

  return (
    <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto w-full px-4 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16" id="about">
        <div className="flex-1 space-y-6">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm">
            About Our Institute
          </h2>
          <h3 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-bold leading-tight">
            Practical Education for Real-World Success
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            We are dedicated to bridging the gap between education and employment. Unlike traditional learning, our curriculum focuses 80% on hands-on practice and 20% on theory, ensuring you are job-ready from day one.
          </p>
          <ul className="space-y-3 mt-4">
            {[
              'Government Recognized Certifications',
              'Partnerships with 50+ Top Companies',
              'Flexible Weekend & Evening Batches',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-primary" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-4 hover:border-primary/50 transition-colors group"
            >
              <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
