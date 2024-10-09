import React, { useRef } from "react";

interface CustomSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ value, onChange }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const newValue = Math.round((x / rect.width) * 100);
        onChange(newValue);
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
    <div className="relative w-[70%] h-4 bg-[#E1CDEF] rounded-full">
      <div
        ref={sliderRef}
        className="w-full h-full rounded-full cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute top-0 left-0 h-full bg-[#F5E6FF] rounded-full"
          style={{ width: `${value}%` }}
        >
          <div
            className="absolute -top-2 right-0 w-1 h-8 bg-[#65558F]"
            style={{ transform: "translateX(50%)" }}
          />
        </div>
      </div>
      <div className="absolute -top-8 text-black right-0 mr-2 mt-1 text-sm">
        {value}%
      </div>
    </div>
  );
};

export default CustomSlider;
