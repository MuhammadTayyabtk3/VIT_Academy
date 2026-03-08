import React, { useState, useEffect } from 'react';

export default function CTA() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900 py-16 px-4">
      <div className="layout-content-container max-w-[960px] mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight max-w-4xl">
          Admissions Open for Spring <span className="text-primary font-mono">{year}</span> Batch
        </h2>
        <p className="text-slate-300 text-lg max-w-xl">
          Don't miss the chance to upgrade your skills. Limited seats available for the upcoming session.
        </p>
      </div>
    </div>
  );
}
