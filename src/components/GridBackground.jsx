import React from "react";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      
      {/* 1. The Flat Wall Grid (Subtle texture) */}
      <div 
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          bg-[size:24px_24px] 
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
        " 
      />

      {/* 2. The 3D Floor Grid (Perspective depth) */}
      <div 
        className="
          absolute bottom-0 left-[-50%] right-[-50%] h-[500px]
          bg-[linear-gradient(to_right,#22d3ee05_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee05_1px,transparent_1px)]
          bg-[size:40px_40px]
          [mask-image:linear-gradient(to_top,#000_0%,transparent_100%)]
          [transform:perspective(500px)_rotateX(60deg)]
          origin-bottom
        " 
      />
      
      {/* 3. Technical Markers (The "Viewfinder" look) */}
      {/* Top Left */}
      <div className="absolute top-10 left-10 w-4 h-4 border-l-2 border-t-2 border-neon-cyan/30" />
      {/* Top Right */}
      <div className="absolute top-10 right-10 w-4 h-4 border-r-2 border-t-2 border-neon-cyan/30" />
      {/* Bottom Left */}
      <div className="absolute bottom-10 left-10 w-4 h-4 border-l-2 border-b-2 border-neon-cyan/30" />
      {/* Bottom Right */}
      <div className="absolute bottom-10 right-10 w-4 h-4 border-r-2 border-b-2 border-neon-cyan/30" />
      
    </div>
  );
}