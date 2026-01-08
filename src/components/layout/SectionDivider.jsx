import React from "react";

export default function SectionDivider({ className = "" }) {
  return (
    // Container: minimal height (h-2) so it sits tight between sections
    // overflow-hidden prevents the horizontal scrollbar during animation
    <div className={`relative w-full h-2 overflow-hidden ${className}`}>
      
      {/* Optional: Very faint track line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-gray-500/10 to-transparent"></div>

      {/* The Moving Train (Glow Layer) */}
      <div
        className="
          absolute top-1/2 -translate-y-1/2 left-0
          h-[4px] w-1/2 /* Longer train looks smoother */
          
          /* Sharper gradient matching the screenshot style */
          bg-gradient-to-r from-transparent via-neon-cyan/80 to-transparent
          
          blur-[3px]
          animate-trainTravel
        "
      />
      
      {/* The Moving Train (Bright Core) */}
      <div
        className="
          absolute top-1/2 -translate-y-1/2 left-0
          h-[2px] w-1/2
          
          /* Solid bright core */
          bg-gradient-to-r from-transparent via-white dark:via-neon-cyan to-transparent
          
          animate-trainTravel
        "
      />
    </div>
  );
}