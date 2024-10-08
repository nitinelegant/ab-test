import React, { useState, useRef } from "react";

const CustomSlider = () => {
  const [value, setValue] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const newValue = Math.round((x / rect.width) * 100);
        setValue(newValue);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="relative w-100 h-4 bg-[#E1CDEF] rounded-full">
      <div
        ref={sliderRef}
        className="w-full h-full rounded-full cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute top-0 left-0 h-full bg-[#F5E6FF] "
          style={{ width: `${value}%` }}
        >
          <div
            className="absolute top-0 right-0 w-1 h-full bg-white"
            style={{ transform: "translateX(50%)" }}
          />
        </div>
      </div>
      {/* <div className="absolute top-0 right-0 mr-2 mt-1 text-sm font-bold">
        {value}%
      </div> */}
    </div>
  );
};

export default CustomSlider;
